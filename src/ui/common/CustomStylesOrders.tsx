import { StylesConfig } from "react-select";

export const customStylesOrders: StylesConfig = {
    valueContainer: (provided: Record<string, unknown>, state: any) => ({
        ...provided,
        display: "flex",
        height: "32px",
        minHeight: "32px",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "space-between"
    }),
    multiValueLabel: (provided: Record<string, unknown>, state: any) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        maxWidth: "250px",
        maxHeight: "20px"
    }),
    control: (provided: Record<string, unknown>, state: any) => ({
        ...provided,
        order: "2",
        height: "32px",
        minHeight: "32px",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        outline: "none",
        border: state.isFocused ? "1px solid #6941C6" : "1px solid #cccccc",
        boxShadow: state.isFocused ? "0px 0px 0px 2px rgba(123, 89, 206, 0.5)" : "none"
    })
};
