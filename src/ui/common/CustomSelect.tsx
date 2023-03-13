import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/use-redux";
import Select from "react-select";
import { MultiValue, InputOption } from ".";
import { customStylesOrders } from ".";
import debounce from "utils/debounce";

import { data } from "../../data/dataOrder";

export const CustomSelect = (props: any) => {
    // if (props.property === "status_order") {
    //     console.log("Рендер компонента CustomSelect")
    //     console.log("props.defaultValue = ", props.defaultValue)
    // }

    const dispatch = useAppDispatch();
    const options = props.multi ? (props.options.length !== props.defaultValue.length ? [data.typeSelect.ALL, ...props.options] : [data.typeSelect.RESET, ...props.options]) : props.options;
    const [selectedOptions, setSelected] = useState(props.defaultValue);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log("isModalOpen = ", isModalOpen)
    // console.log("selectedOptions 17 = ", selectedOptions)
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
            return;
        }
        if (Array.isArray(selected)) {
            props.multi && selected.length && selected.find((option) => option.value === 0)
                ? dispatch(props.changeState({ value: options.slice(1), property: props.property }))
                : selected.find((option) => option.value === -1)
                    ? dispatch(props.changeState({ value: [], property: props.property }))
                    : dispatch(props.changeState({ value: selected, property: props.property }));
        }

    }

    // const debouncedDispatchChange = debounce(dispatchChanges, 0)

    // const state = useAppSelector(state => state.modal)
    // console.log("Окно со всеми фильрами открыто = ", state.open)


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
            onMenuOpen={() => {
                setIsModalOpen(true)
            }}
            onMenuClose={() => {
                setIsModalOpen(false)
                // console.log("Сработало событие onMenuClose")
                const selected = selectedOptions
                // console.log("selectedOptions 64 = ", selectedOptions)
                if (!selected.find((option) => option.value === 0 || option.value === -1)) {
                    // console.log("Мы здесь!! onMenuClose")
                    dispatchChanges(selected)
                }
            }
            }
            onChange={(selected) => {

                // console.log("selected = ", selected)
                // for (let el of selected) {
                //     console.log(el);
                // }
                setSelected(selected);
                // console.log("Сработало событие onChange")
                // console.log(props)

                if (selected.find((option) => option.value === 0 || option.value === -1)) {
                    // console.log("Мы здесь!! onChange")
                    dispatchChanges(selected)
                }
                if (!isModalOpen) {
                    // console.log("Мы здесь!! сработало событие onChange")
                    dispatchChanges(selected)
                }
            }}
        />
    );
}


