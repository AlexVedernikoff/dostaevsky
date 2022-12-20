import { Filters } from "../models";

export const style = {
    position: "absolute" as "absolute",
    top: "0",
    right: "0",
    width: 368,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: "10px 28px",
    boxSizing: " border-box"
};
export const defaultFieldsSelect: Filters = {
    status_order: [{ label: "Принят", value: 1 }],
    manufacture: [{ label: "Офис", value: 1 }]
};
