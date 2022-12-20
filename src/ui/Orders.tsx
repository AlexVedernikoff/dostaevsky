import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "hook/use-redux";
import useDebounce from "hook/use-debounce";
import { changeInput, changeSelect } from "../store/mainState";
import { openStateModal } from "../store/modalState";
import { changeMainState } from "../store/mainState";
import { MainButton, CustomSelect } from "./common";
import { InputValueDispatch } from "../models";
import { data } from "../data/dataOrder";
import { getIndicator, getDefaultValue } from "../application";
import OrderToolbar from "./OrderToolbar";
import Modals from "./Modals";
import TableOrdersCustom from "./TableOrdersCustom/TableOrdersCustom";
import { defaultFieldsSelect } from "../constants/constantsOrders";

import { ReactComponent as YourSvg } from "../svg/IconButton.svg";

function Orders() {
    let initialValues: InputValueDispatch;

    const [valueFilter, setValueFilter] = useState(initialValues);
    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.mainFilters.filters);

    const debouncedValueFilter = useDebounce(valueFilter, 1000);

    useEffect(() => {
        if (debouncedValueFilter) {
            if (Array.isArray(valueFilter.value)) {
                dispatch(changeSelect({ property: valueFilter.property, value: valueFilter.value }));
            }

            if (typeof valueFilter.value === "string") {
                dispatch(changeInput({ property: valueFilter.property, value: valueFilter.value }));
            }
        }
    }, [debouncedValueFilter]);

    return (
        <div className="Order">
            <OrderToolbar />
            <div className="OrderFilters">
                <div className="inputSection">
                    <div className="InputGroup">
                        <input
                            defaultValue={getDefaultValue(state.number_order)}
                            key={state.number_order}
                            onChange={(e) => setValueFilter({ value: e.target.value, property: "number_order" })}
                            className="orderNumberInput"
                            id="orderNumber"
                            type="text"
                        />
                        <label className="label" htmlFor="orderNumber">
                            Номер заказа
                        </label>
                    </div>
                    <form className="form">
                        <div className="InputGroup">
                            <input
                                defaultValue={getDefaultValue(state.number_telephone)}
                                key={state.number_telephone}
                                onChange={(e) => setValueFilter({ value: e.target.value, property: "number_telephone" })}
                                className="phoneNumberInput"
                                id="phoneNumber"
                                type="text"
                            />
                            <label className="label" htmlFor="phoneNumber">
                                Телефон клиента
                            </label>
                        </div>
                    </form>
                    <div className="InputGroup">
                        <CustomSelect
                            modal={false}
                            multi={true}
                            options={data.orderList}
                            changeState={setValueFilter}
                            key={uuidv4()}
                            defaultValue={getDefaultValue(state.status_order)}
                            property={"status_order"}
                            className={"SelectFilter SelectOrder SelectOrderStatus MainView"}
                        />
                        <label className="label" htmlFor="orderStatus">
                            Статус заказа
                        </label>
                    </div>
                    <div className="InputGroup">
                        <CustomSelect
                            modal={false}
                            multi={true}
                            options={data.cityList}
                            key={uuidv4()}
                            changeState={setValueFilter}
                            defaultValue={getDefaultValue(state.city)}
                            property={"city"}
                            className={"SelectFilter SelectCity MainView"}
                        />
                        <label className="label" htmlFor="city">
                            Город
                        </label>
                    </div>
                    <div className="InputGroup">
                        <input
                            defaultValue={getDefaultValue(state.address)}
                            key={state.address}
                            onChange={(e) => setValueFilter({ value: e.target.value, property: "address" })}
                            className="inputOrder inputAdress"
                            id="address"
                            type="text"
                        />
                        <label className="label" htmlFor="address">
                            Адрес
                        </label>
                    </div>
                    <div className="InputGroup">
                        <CustomSelect
                            modal={false}
                            multi={true}
                            options={data.productionList}
                            changeState={setValueFilter}
                            key={uuidv4()}
                            defaultValue={getDefaultValue(state.manufacture)}
                            property={"manufacture"}
                            className={"SelectFilter SelectProduction"}
                        />
                        <label htmlFor="manufacture">Производство</label>
                    </div>
                    <div className="buttonGroupReset">
                        <div className="button IconButton" id="btnReset">
                            <IconButton onClick={() => dispatch(changeMainState({ value: defaultFieldsSelect }))}>
                                <YourSvg />
                            </IconButton>
                        </div>

                        <MainButton onClick={() => dispatch(openStateModal({ value: state }))}>
                            Все фильтры
                            {getIndicator(state) && (
                                <div className="containerIndicator">
                                    <div className="Indicator"></div>
                                </div>
                            )}
                        </MainButton>
                    </div>
                </div>
            </div>
            <TableOrdersCustom />
            <Modals />
        </div>
    );
}

export default Orders;
