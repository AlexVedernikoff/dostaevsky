import React from "react";
import { IconTooltip, StyleArrow } from "..";
import { channelIcons, channelTitles } from "../../TableOrdersCustom/constants";

export const IconChannel = (props) => {
    const { row } = props;

    const Icon = channelIcons[row.source];
    const title = channelTitles[row.source];

    return (
        <div className="divIconChannel">
            <IconTooltip sx={StyleArrow} title={title}>
                <Icon />
            </IconTooltip>
        </div>
    );
};
