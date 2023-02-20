import React from "react";
import { IconTooltip, StyleArrow } from "..";
import { brandIcons, brandTitles, brandClassName } from "../../TableOrdersCustom/constants";
import { getFormatTimeFromIso8601, getRegionTime } from "../../../application";

export const BrandIcon = (props) => {
    const { value, row } = props;

    const Icon = brandIcons[row.brand];
    const title = brandTitles[row.brand];
    const className = brandClassName[row.brand];

    const time = getFormatTimeFromIso8601(value);

    return (
        <div className="brandGroup">
            {row.city === 5 ? (
                <div className="timeProcessed">
                    <IconTooltip sx={StyleArrow} title="Московское время">
                        <div className="cursorTooltip">{time}</div>
                    </IconTooltip>
                    <IconTooltip sx={StyleArrow} title="Время региона">
                        <div className="timeRegion cursorTooltip">{getRegionTime(time)}</div>
                    </IconTooltip>
                </div>
            ) : (
                <div className="timeProcessed">{time}</div>
            )}
            <div className={className}>
                <IconTooltip sx={StyleArrow} title={title}>
                    <Icon />
                </IconTooltip>
            </div>
        </div>
    );
};
