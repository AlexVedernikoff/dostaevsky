import React, { useState, useEffect, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "hooks/use-redux";
import useDebounce from "hooks/use-debounce";
import { changeInput, changeSelect, resetState } from "../store/mainState";
import { openStateModal } from "../store/modalState";

import { MainButton, CustomSelect } from "./common";
import { InputValueDispatch } from "../models";
import { data } from "../data/dataOrder";
import { getIndicator, getDefaultValue } from "../application";
import OrderToolbar from "./OrderToolbar";
import Modals from "./Modals";
import TableOrdersCustom from "./TableOrdersCustom/TableOrdersCustom";

import { ReactComponent as YourSvg } from "../svg/IconButton.svg";
import { fetchClientPhone, fetchDataFilters, toggleClientPhone } from "store/dataFilters";
import { fetchFilteredOrders } from "store/tableState";
import { List, ListItemButton, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";

function Orders() {
    // console.log("рендер компонента Orders")
    let initialValues: InputValueDispatch;

    const [valueFilter, setValueFilter] = useState(initialValues);
    const [clientPhone, setClientPhone] = useState("");

    const [clientPhoneFetch, setClientPhoneFetch] = useState("");

    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.mainFilters.filters);

    const dataFilters = useAppSelector((state) => state.dataFilters);

    const debouncedValueFilter = useDebounce(valueFilter, 1000);
    const debouncedClientPhone = useDebounce(clientPhone, 1000);

    useEffect(() => {
        if (!dataFilters.isReceived && !dataFilters.isLoading) {
            // dispatch(fetchDataFilters());
        }
    }, []);

    const [focusedInput, setFocusedInput] = useState("orderNumber");

    useEffect(() => {
        const input = document.getElementById(focusedInput);
        input.focus();
    });

    useEffect(() => {
        // console.log("Вы вызвали setClientPhone(state.number_telephone)")
        state.number_telephone ?
            setClientPhone(state.number_telephone) :
            setClientPhone("")
    }, [state]);


    const cityList = [];
    const productionList = [];

    if (dataFilters.isReceived) {
        dataFilters.data.cities.map((city) => {
            return cityList.push({ label: city.name, value: city.id });
        });

        dataFilters.data.manufactories.map((city) => {
            return productionList.push({ label: city.name, value: city.id });
        });
    }

    const filteredOrders = useCallback(() => {
        dispatch(fetchFilteredOrders());
    }, []);

    useEffect(() => {
        if (debouncedValueFilter) {
            if (typeof valueFilter.value === "string") {
                dispatch(changeInput({ property: valueFilter.property, value: valueFilter.value }));
                filteredOrders();
            }
        }
    }, [debouncedValueFilter]);

    useEffect(() => {
        if (debouncedClientPhone) {
            const value = clientPhone.replace(/[^0-9]/g, "");

            if (value.length >= 4 && value.length < 11) {
                setClientPhoneFetch(value);
                dispatch(fetchClientPhone(value));
            } else if (value.length === 11) {
                dispatch(toggleClientPhone(false));
                setValueFilter({ value: value, property: "number_telephone" });
            }

            // if (value.length === 11) {
            //     dispatch(toggleClientPhone(false));
            //     setValueFilter({ value: value, property: "number_telephone" });
            // }
        }
    }, [debouncedClientPhone]);

    const setValueSelect = (property) => {
        dispatch(changeSelect({ property: property.property, value: property.value }));
        filteredOrders();
    };

    const handlerPhoneInput = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        if (value.length > 11) return;

        setClientPhone(e.target.value);
        if (e.target.value.length === 0) {
            setValueFilter({ value: value, property: "number_telephone" });
        }

    };

    const handlerPhoneClick = (phone) => {
        dispatch(toggleClientPhone(false));
        setClientPhone(`+${phone}`);
    };

    const clearFilter = () => {
        setClientPhone("");
        dispatch(resetState());
        filteredOrders();
    };

    return (
        <div className="Order">
            <OrderToolbar />
            <div className="OrderFilters">
                <div className="inputSection">
                    <div className="InputGroup">
                        <input
                            defaultValue={getDefaultValue(state.number_order)}
                            key={state.number_order}
                            onChange={(e) => {
                                setValueFilter({ value: e.target.value, property: "number_order" })
                            }}
                            onClick={() => setFocusedInput("orderNumber")}
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
                            <input key={state.number_telephone}
                                onChange={handlerPhoneInput} value={clientPhone} className="phoneNumberInput" id="phoneNumber" type="text"
                                onClick={() => setFocusedInput("phoneNumber")}
                            />
                            {dataFilters.openClientPhone && (
                                <List className="InputList">
                                    <>
                                        {Array.isArray(dataFilters.clientPhone) ?
                                            (

                                                dataFilters.clientPhone.filter(phone => phone.includes(clientPhoneFetch))
                                                    .map((phone) => {
                                                        return (
                                                            <ListItemButton key={phone} onClick={() => handlerPhoneClick(phone)}>
                                                                <ListItemText
                                                                    primary={
                                                                        <Typography className="InputListItemText">
                                                                            <b>+{`${phone.slice(0, 1)}(${phone.slice(1, 4)})${phone.slice(4, clientPhoneFetch.length)}`}</b>
                                                                            <span>{phone.slice(clientPhoneFetch.length)}</span>
                                                                        </Typography>
                                                                    }
                                                                />
                                                            </ListItemButton>
                                                        );
                                                    })) : null
                                        }
                                    </>
                                </List>
                            )}

                            <label className="label" htmlFor="phoneNumber">
                                Телефон клиента
                            </label>
                        </div>
                    </form>
                    <div className="InputGroup InputGroupMain">
                        <CustomSelect
                            modal={false}
                            multi={true}
                            options={data.orderList}
                            changeState={setValueSelect}
                            key={uuidv4()}
                            defaultValue={getDefaultValue(state.status_order)}
                            property={"status_order"}
                            className={"SelectFilter SelectOrder SelectOrderStatus MainView"}
                        />
                        <label className="label" htmlFor="orderStatus">
                            Статус заказа
                        </label>
                    </div>
                    <div className="InputGroup InputGroupMain">
                        <CustomSelect
                            modal={false}
                            multi={true}
                            options={cityList}
                            key={uuidv4()}
                            changeState={setValueSelect}
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
                            onClick={() => setFocusedInput("address")}
                            className="inputOrder inputAdress"
                            id="address"
                            type="text"
                        />
                        <label className="label" htmlFor="address">
                            Адрес
                        </label>
                    </div>
                    <div className="InputGroup InputGroupMain">
                        <CustomSelect
                            modal={false}
                            multi={true}
                            options={productionList}
                            changeState={setValueSelect}
                            key={uuidv4()}
                            defaultValue={getDefaultValue(state.manufacture)}
                            property={"manufacture"}
                            className={"SelectFilter SelectProduction"}
                        />
                        <label htmlFor="manufacture">Производство</label>
                    </div>
                    <div className="buttonGroupReset">
                        <div className="button IconButton" id="btnReset">
                            <IconButton onClick={() => clearFilter()}>
                                <YourSvg />
                            </IconButton>
                        </div>

                        <MainButton onClick={() => dispatch(openStateModal({ value: state }))}>
                            Все&#160;фильтры
                            {getIndicator(state) && (
                                <div className="containerIndicator">
                                    <div className="Indicator"></div>
                                </div>
                            )}
                        </MainButton>
                    </div>
                </div>
            </div >
            <TableOrdersCustom />
            <Modals />
        </div >
    );
}

export default Orders;
