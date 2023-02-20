import React from "react";
import { orderNumber } from "../../TableOrdersCustom/constants";

export const OrderNumber = (props) => {
    const { value, row } = props;
    const colorIcon = orderNumber[row.payment_type];

    return <div className={`orderNumber ${colorIcon}`}>{value}</div>;
};
