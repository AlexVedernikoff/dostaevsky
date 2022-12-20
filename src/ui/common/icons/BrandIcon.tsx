import React from "react";
import { IconTooltip, StyleArrow } from "../../common";
import { brandIcons, brandTitles, brandClassName } from "../../TableOrdersCustom/constants";
import { getRegionTime } from "../../../application";

export const BrandIcon = (props) => {
    const { value, row } = props;

    const Icon = brandIcons[row.brand];
    const title = brandTitles[row.brand];
    const className = brandClassName[row.brand];

    return (
        <div className="brandGroup">
            {row.city === "Новосибирск" ? (
                <div className="timeProcessed">
                    <IconTooltip sx={StyleArrow} title="Московское время">
                        <div className="cursorTooltip">{value}</div>
                    </IconTooltip>
                    <IconTooltip sx={StyleArrow} title="Время региона">
                        <div className="timeRegion cursorTooltip">{getRegionTime(value)}</div>
                    </IconTooltip>
                </div>
            ) : (
                <div className="timeProcessed">{value}</div>
            )}
            <div className={className}>
                <IconTooltip sx={StyleArrow} title={title}>
                    <Icon />
                </IconTooltip>
            </div>
        </div>
    );
};
