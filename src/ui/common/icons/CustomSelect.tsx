import React from "react";
import { useAppDispatch } from "hook/use-redux";
import Select from "react-select";
import { MultiValue, InputOption } from "../../common";
import { customStylesOrders } from "../../common";

import { data } from "../../../data/dataOrder";

export const CustomSelect = (props) => {
    const dispatch = useAppDispatch();
    const options = props.multi ? (props.options.length !== props.defaultValue.length ? [data.typeSelect.ALL, ...props.options] : [data.typeSelect.RESET, ...props.options]) : props.options;
    return (
        <Select
            options={options}
            isMulti={props.multi}
            isSearchable={true}
            isClearable={false}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            blurInputOnSelect={false}
            placeholder=""
            components={{
                Option: InputOption,
                MultiValue
            }}
            styles={customStylesOrders}
            className={props.className}
            defaultValue={props.defaultValue}
            onChange={(selected) => {
                if (!props.modal) {
                    if (Array.isArray(selected)) {
                        props.multi && selected.length && selected.find((option) => option.value === 0)
                            ? props.changeState({ value: options.slice(1), property: props.property })
                            : selected.find((option) => option.value === -1)
                            ? props.changeState({ value: [], property: props.property })
                            : props.changeState({ value: selected, property: props.property });
                    }
                }
                if (Array.isArray(selected)) {
                    props.multi && selected.length && selected.find((option) => option.value === 0)
                        ? dispatch(props.changeState({ value: options.slice(1), property: props.property }))
                        : selected.find((option) => option.value === -1)
                        ? dispatch(props.changeState({ value: [], property: props.property }))
                        : dispatch(props.changeState({ value: selected, property: props.property }));
                }
            }}
        />
    );
};
