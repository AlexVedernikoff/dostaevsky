import React from "react";
import { IconTooltip, StyleArrow } from "../../common";
import { getRegionTime } from "../../../application";
import { ReactComponent as PreOrder } from "../../../svg/preorder.svg";

export const Deliver = (props) => {
    const { value, row } = props;
    return (
        <div className="deliverGroup">
            {row.city === "Новосибирск" ? (
                <div className="deliverTime">
                    <IconTooltip sx={StyleArrow} title="Московское время">
                        <div className="cursorTooltip">{value}</div>
                    </IconTooltip>
                    <IconTooltip sx={StyleArrow} title="Время региона">
                        <div className="timeRegion cursorTooltip">{getRegionTime(value)}</div>
                    </IconTooltip>
                </div>
            ) : (
                <div className="deliverTime">{value}</div>
            )}
            {row.preOrder && (
                <div className="divIconDeliver">
                    <IconTooltip sx={StyleArrow} title="Предзаказ">
                        <PreOrder />
                    </IconTooltip>
                </div>
            )}
        </div>
    );
};
