import React from "react";
import { components } from "react-select";

const MoreSelectedBadge = ({ items }) => {
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        background: "#E6E6E6",
        // background: "red",
        borderRadius: "4px",
        fontFamily: "Circe",
        fontSize: "11px",
        padding: "3px",
        width: "30px",
        height: "15px",
        order: 99
    };

    const length = items.length;
    const label = `+ ${length}`;

    return <div style={style}>{label}</div>;
};

export const MultiValue: any = ({ index, getValue, props, children, isSelected, ...rest }) => {
    const maxToShow = 2;
    const overflow = getValue()
        .slice(maxToShow)
        .map((x) => x.label);

    return index < maxToShow ? (
        <components.MultiValue {...rest} {...props}>
            <>{children}</>
        </components.MultiValue>
    ) : index === maxToShow ? (
        <MoreSelectedBadge items={overflow} />
    ) : null;
};
