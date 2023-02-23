import React, { useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "hooks/use-redux";
// import { closeStateModal, changeInput, changeSelect, resetState } from "../store/mainState";
//import { resetState } from "../store/mainState";
import { closeStateModal, changeInput, changeSelect, resetModalState } from "../store/modalState";

import { changeMainState } from "../store/mainState";
import { getCountFilters, getDefaultValue } from "../application";
import useDebounce from "hooks/use-debounce";
import { CustomSelect, MainButton } from "./common";
import { data } from "../data/dataOrder";
import { v4 as uuidv4 } from "uuid";

import Fade from "@mui/material/Fade/Fade";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";

import { style } from "../constants/constantsOrders";

import { ReactComponent as Ruble } from "../svg/ruble.svg";
import { ReactComponent as Line } from "../svg/line.svg";
import { ReactComponent as Calendar } from "../svg/calendar.svg";

import { InputValueDispatch } from "../models";
import { fetchFilteredOrders } from "store/tableState";

function Modals() {
    const dispatch = useAppDispatch();
    // const stateModal = useAppSelector((state) => state.mainFilters);
    const stateModal = useAppSelector((state) => state.modal);
    console.log("stateModal = ", stateModal)

    const filteredOrders = useCallback(() => {
        dispatch(fetchFilteredOrders());
    }, [dispatch]);

    function resetFilters() {
        // dispatch(resetState());
        dispatch(resetModalState());
        filteredOrders();
    }

    function applyFilters() {
        dispatch(changeMainState({ value: stateModal.filters }));
        dispatch(closeStateModal());
        filteredOrders();
    }

    const dataFilters = useAppSelector((state) => state.dataFilters);

    const cityList = [];
    const productionList = [];
    const stockList = [];
    const claimTypeList = [];

    if (dataFilters.isReceived) {
        dataFilters.data.cities.map((city) => {
            return cityList.push({ label: city.name, value: city.id });
        });

        dataFilters.data.manufactories.map((manufactor) => {
            return productionList.push({ label: manufactor.name, value: manufactor.id });
        });

        dataFilters.data.promos.map((promo) => {
            return stockList.push({ label: promo.name, value: promo.id });
        });

        dataFilters.data.complaints.map((complaint) => {
            return claimTypeList.push({ label: complaint.name, value: complaint.key });
        });
    }

    let initialValues: InputValueDispatch;

    const [valueFilter, setValueFilter] = useState(initialValues);
    const debouncedValueFilter = useDebounce(valueFilter, 1000);

    useEffect(() => {
        if (debouncedValueFilter) {
            if (typeof valueFilter.value === "string") dispatch(changeInput({ property: valueFilter.property, value: valueFilter.value }));
        }
    }, [debouncedValueFilter]);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={stateModal.open}
            onClose={() => dispatch(closeStateModal())}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            sx={{ overflow: "scroll", padding: "0" }}
        >
            <Fade in={stateModal.open}>
                <Box sx={style} className="boxModal">
                    <div className="titleFiltersCounter">
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Фильтры
                        </Typography>
                        <div className="counterFiltersBox">
                            <b>{getCountFilters(stateModal.filters)}</b>
                        </div>
                    </div>
                    <div className="InputGroupFilter">
                        <div className="inputSectionFilter">
                            <div className="InputGroup">
                                <input
                                    key={stateModal.filters.number_order}
                                    defaultValue={stateModal.filters.number_order}
                                    onChange={(e) => setValueFilter({ value: e.target.value, property: "number_order" })}
                                    className="inputFilter inputOrder"
                                    id="orderNumber"
                                    type="text"
                                />
                                <label htmlFor="orderNumber">№ заказа</label>
                            </div>
                            <div className="InputGroup">
                                <input
                                    key={stateModal.filters.number_telephone}
                                    defaultValue={stateModal.filters.number_telephone}
                                    onChange={(e) => setValueFilter({ value: e.target.value, property: "number_telephone" })}
                                    className="inputFilter inputOrder"
                                    id="phoneNumber"
                                    type="text"
                                />
                                <label htmlFor="phoneNumber">Телефон клиента</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={data.orderList}
                                    key={uuidv4()}
                                    property={"status_order"}
                                    changeState={changeSelect}
                                    defaultValue={getDefaultValue(stateModal.filters.status_order)}
                                    className={"SelectFilter SelectOrder"}
                                />
                                <label htmlFor="orderStatus">Статус заказа</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={cityList}
                                    key={uuidv4()}
                                    property={"city"}
                                    defaultValue={getDefaultValue(stateModal.filters.city)}
                                    changeState={changeSelect}
                                    className={"SelectFilter SelectCity"}
                                />
                                <label htmlFor="city">Город заказа</label>
                            </div>
                            <div className="InputGroup">
                                <input
                                    key={stateModal.filters.address}
                                    defaultValue={stateModal.filters.address}
                                    onChange={(e) => setValueFilter({ value: e.target.value, property: "address" })}
                                    className="inputOrder inputAdress"
                                    id="address"
                                    type="text"
                                />
                                <label htmlFor="address">Адрес</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={productionList}
                                    key={uuidv4()}
                                    property={"manufacture"}
                                    defaultValue={getDefaultValue(stateModal.filters.manufacture)}
                                    changeState={changeSelect}
                                    className={"SelectFilter"}
                                />
                                <label htmlFor="production">Производство</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    multi={true}
                                    modal={true}
                                    options={data.brandList}
                                    key={uuidv4()}
                                    property={"brand"}
                                    defaultValue={getDefaultValue(stateModal.filters.brand)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="brand">Бренд заказа</label>
                            </div>
                            <div className="InputGroup">
                                <div className="OrderInputs">
                                    <input
                                        key={stateModal.filters.fromAmount}
                                        defaultValue={getDefaultValue(stateModal.filters.fromAmount)}
                                        onChange={(e) => setValueFilter({ value: e.target.value, property: "fromAmount" })}
                                        className="inputOrder"
                                        id="price"
                                    />
                                    <Ruble className="iconRubleLeft" />
                                    <Line className="line" />
                                    <input
                                        key={stateModal.filters.toAmount}
                                        defaultValue={getDefaultValue(stateModal.filters.toAmount)}
                                        onChange={(e) => setValueFilter({ value: e.target.value, property: "toAmount" })}
                                        className="inputOrder"
                                        name="toAmount"
                                    />
                                    <Ruble className="iconRubleRight" />
                                </div>
                                <label className="label" htmlFor="price">
                                    Сумма заказа
                                </label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={data.paymentTypeList}
                                    key={uuidv4()}
                                    property={"paymentType"}
                                    defaultValue={getDefaultValue(stateModal.filters.paymentType)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="paymentType">Тип оплаты</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={data.sourceList}
                                    key={uuidv4()}
                                    property={"source"}
                                    defaultValue={getDefaultValue(stateModal.filters.source)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="source">Канал появления</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={stockList}
                                    key={uuidv4()}
                                    property={"stock"}
                                    defaultValue={getDefaultValue(stateModal.filters.stock)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="stock">Акция</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={data.courierNameList}
                                    key={uuidv4()}
                                    property={"courierName"}
                                    defaultValue={getDefaultValue(stateModal.filters.courierName)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="courierName">Курьер</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    name="typeDeliver"
                                    options={data.typeDeliverList}
                                    key={uuidv4()}
                                    property={"typeDeliver"}
                                    defaultValue={getDefaultValue(stateModal.filters.typeDeliver)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="typeDeliver">Тип доставки</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={data.managerNameList}
                                    key={uuidv4()}
                                    property={"managerName"}
                                    defaultValue={getDefaultValue(stateModal.filters.managerName)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="managerName">Менеджер заказа</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={data.clientFeedbackList}
                                    key={uuidv4()}
                                    property={"clientFeedback"}
                                    defaultValue={getDefaultValue(stateModal.filters.clientFeedback)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="clientFeedback">Отзыв</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={claimTypeList}
                                    key={uuidv4()}
                                    property={"claimType"}
                                    defaultValue={getDefaultValue(stateModal.filters.claimType)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="claimType">Тип претензии</label>
                            </div>
                            <div className="InputGroup">
                                <input
                                    key={stateModal.filters.recipientPhone}
                                    defaultValue={getDefaultValue(stateModal.filters.recipientPhone)}
                                    onChange={(e) => setValueFilter({ value: e.target.value, property: "recipientPhone" })}
                                    className="inputFilter inputOrder"
                                    id="phoneNumber"
                                    type="text"
                                />
                                <label htmlFor="recipientPhone">Телефон получателя</label>
                            </div>
                            <div className="InputGroup">
                                <CustomSelect
                                    modal={true}
                                    multi={true}
                                    options={data.productList}
                                    key={uuidv4()}
                                    property={"product"}
                                    defaultValue={getDefaultValue(stateModal.filters.product)}
                                    changeState={changeSelect}
                                    className="SelectFilter"
                                />
                                <label htmlFor="product">Товар</label>
                            </div>
                            <div className="InputGroup">
                                <div className="OrderInputs">
                                    <input className="inputOrder " id="calendarCreate" />
                                    <Calendar className="iconCalendarLeft" />
                                    <Line className="line" />
                                    <input className="inputOrder" />
                                    <Calendar className="iconCalendarRight" />
                                </div>
                                <label className="label" htmlFor="calendarCreate">
                                    Дата и время поступления заказа
                                </label>
                            </div>
                            <div className="InputGroup">
                                <div className="OrderInputs">
                                    <input className="inputOrder " id="calendarDeliver" />
                                    <Calendar className="iconCalendarLeft" />
                                    <Line className="line" />
                                    <input className="inputOrder " />
                                    <Calendar className="iconCalendarRight" />
                                </div>
                                <label className="label" htmlFor="calendarDeliver">
                                    Дата и время доставки
                                </label>
                            </div>
                        </div>
                        <div className="buttonGroup">
                            <MainButton onClick={() => resetFilters()}>Сбросить</MainButton>
                            <div className="SubmitButton">
                                <MainButton onClick={() => applyFilters()}>Применить</MainButton>
                            </div>
                        </div>
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
}

export default Modals;
