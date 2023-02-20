import React from "react";
import { IconTooltip, StyleArrow } from "../../common";
import { getFormatTimeFromIso8601, getRegionTime } from "../../../application";
import { ReactComponent as PreOrder } from "../../../svg/preorder.svg";

export const Deliver = (props) => {
    const { value, row } = props;

    const time = getFormatTimeFromIso8601(value);
    return (
        <div className="deliverGroup">
            {row.city === 5 ? (
                <div className="deliverTime">
                    <IconTooltip sx={StyleArrow} title="Московское время">
                        <div className="cursorTooltip">{time}</div>
                    </IconTooltip>
                    <IconTooltip sx={StyleArrow} title="Время региона">
                        <div className="timeRegion cursorTooltip">{getRegionTime(time)}</div>
                    </IconTooltip>
                </div>
            ) : (
                <div className="deliverTime">{time}</div>
            )}
            {row.is_preorder && (
                <div className="divIconDeliver">
                    <IconTooltip sx={StyleArrow} title="Предзаказ">
                        <PreOrder />
                    </IconTooltip>
                </div>
            )}
        </div>
    );
};
