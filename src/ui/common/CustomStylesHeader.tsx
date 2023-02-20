import { StylesConfig } from "react-select";

export const customStylesHeader: StylesConfig = {
    valueContainer: (provided: Record<string, unknown>, state: any) => ({
        ...provided,
        display: "flex",
        height: "26px",
        minHeight: "26px",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        backgroundColor: "#7B59CE",
        color: "white"
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
        height: "36px",
        minHeight: "36px",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        outline: "none",
        border: "1px solid white",
        borderColor: "none",
        boxShadow: "none",
        backgroundColor: "#7B59CE",
        "&:hover": {
            borderColor: "white"
        }
    }),
    singleValue: (provided: Record<string, unknown>, state: any) => ({
        ...provided,
        color: "white"
    }),
    indicatorSeparator: (provided: Record<string, unknown>, state: any) => ({
        ...provided,
        display: "none"
    }),
    option: (provided: Record<string, unknown>, state: any) => ({
        ...provided,
        color: "black",
        backgroundColor: state.isFocused ? "#EEEEEE" : "#ffffff",
        display: "flex",
        justifyContent: "flex-start"
    }),
    indicatorsContainer: (provided: Record<string, unknown>, state: any) => ({
        ...provided,
        "& svg": {
            fill: "white"
        }
    })
};
