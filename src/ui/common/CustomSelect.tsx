import React, { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/use-redux";
import Select from "react-select";
import { MultiValue, InputOption } from ".";
import { customStylesOrders } from ".";
import debounce from "utils/debounce";

import { data } from "../../data/dataOrder";


export const CustomSelect = (props: any) => {
    console.log("Рендер компонента CustomSelect")


    const dispatch = useAppDispatch();
    const options = props.multi ? (props.options.length !== props.defaultValue.length ? [data.typeSelect.ALL, ...props.options] : [data.typeSelect.RESET, ...props.options]) : props.options;
    const [selectedOptions, setSelected] = useState(props.defaultValue);
    // const [selectedOptions, setSelected] = useState([]);
    console.log("selectedOptions 17 = ", selectedOptions)
    function dispatchChanges(selected) {
        console.log("Сработало событие dispatchChanges")
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

    const debouncedDispatchChange = debounce(dispatchChanges, 500)

    useEffect(() => {
        console.log("Сработал useEffect!!!!!")
        console.log("selectedOptions = ", selectedOptions)
        // debouncedDispatchChange(selectedOptions)
    }, [selectedOptions])

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

            }}
            onMenuClose={() => {
                console.log("Сработало событие onMenuClose")

                const selected = selectedOptions
                console.log("selectedOptions 64 = ", selectedOptions)
                // setSelected((previous) => {
                //     console.log("Предыдущее состояние = ", previous)

                //     return selected
                // });


                if (!selected.find((option) => option.value === 0 || option.value === -1)) {
                    console.log("Мы здесь!! onMenuClose")


                    debouncedDispatchChange(selected)
                }
            }
            }
            onChange={(selected) => {

                console.log("selected = ", selected)
                for (let el of selected) {
                    console.log(el);
                }
                setSelected(() => {
                    console.log("Вызываем функцию setSelected()")
                    return selected
                });
                console.log("Сработало событие onChange")

                if (selected.find((option) => option.value === 0 || option.value === -1)) {
                    console.log("Мы здесь!! onChange")

                    debouncedDispatchChange(selected)
                    // setSelected(() => {
                    //     console.log("Вызываем функцию setSelected()")
                    //     return selected
                    // });
                }
            }}
        />
    );
}
