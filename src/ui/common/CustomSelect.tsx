import React, { useState } from "react";
import { useAppDispatch } from "hooks/use-redux";
import Select from "react-select";
import { MultiValue, InputOption } from ".";
import { customStylesOrders } from ".";
import debounce from "utils/debounce";

import { data } from "../../data/dataOrder";


export const CustomSelect = (props: any) => {

    const dispatch = useAppDispatch();
    const options = props.multi ? (props.options.length !== props.defaultValue.length ? [data.typeSelect.ALL, ...props.options] : [data.typeSelect.RESET, ...props.options]) : props.options;
    const [selectedOptions, setSelected] = useState([]);

    function dispatchChanges(selected) {
        // console.log("Сработало событие dispatchChanges")
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

    }

    const debouncedDispatchChange = debounce(dispatchChanges, 500)
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
            onMenuClose={() => {
                // console.log("Сработало событие onMenuClose")
                // console.log("selectedOptions = ", selectedOptions)
                const selected = selectedOptions
                if (!selected.find((option) => option.value === 0 || option.value === -1)) {
                    // console.log("Мы здесь!! onMenuClose")
                    // dispatchChanges(selected)
                    debouncedDispatchChange(selected)
                }
            }
            }
            onChange={(selected) => {

                // console.log("selected = ", selected)
                setSelected(selected);
                // console.log("Сработало событие onChange")

                if (selected.find((option) => option.value === 0 || option.value === -1)) {
                    // console.log("Мы здесь!! onChange")
                    // dispatchChanges(selected)
                    debouncedDispatchChange(selected)
                }
            }}
        />
    );
}
