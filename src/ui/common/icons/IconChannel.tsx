import React from "react";
import { IconTooltip, StyleArrow } from "../../common";
import { channelIcons, channelTitles } from "../../TableOrdersCustom/constants";

export const IconChannel = (props) => {
    const { row } = props;

    const Icon = channelIcons[row.channel];
    const title = channelTitles[row.channel];

    return (
        <div className="divIconChannel">
            <IconTooltip sx={StyleArrow} title={title}>
                <Icon />
            </IconTooltip>
        </div>
    );
};
