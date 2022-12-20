import React from "react";
import { IconTooltip, StyleArrow } from "../../common";
import { statusIcons, statusRus } from "../../TableOrdersCustom/constants";
import { ReactComponent as IsPayed } from "../../../svg/isPayed.svg";

export const StatusIcon = (props) => {
    const { row } = props;
    const className = statusIcons[row.status];
    const value = statusRus[row.status];

    return (
        <div className="StatusContainer DefaultStatus">
            <div className={className}>{value}</div>
            {row.isPayed && (
                <div className="payedIcon">
                    <IconTooltip sx={StyleArrow} title="Оплачено">
                        <IsPayed />
                    </IconTooltip>
                </div>
            )}
        </div>
    );
};
