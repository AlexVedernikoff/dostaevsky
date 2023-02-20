import React from "react";
import { IconTooltip, StyleArrow } from "..";
import { feedbackTitles, feedbackClassName, feedbackIcon } from "../../TableOrdersCustom/constants";

export const FeedbackIcon = (props) => {
    const { row } = props;
    if (row.client_feedback === "none") return <></>;

    const Icon = feedbackIcon[row.client_feedback];
    const className = feedbackClassName[row.client_feedback];
    const title = feedbackTitles[row.client_feedback];

    return (
        <div className={className}>
            <IconTooltip sx={StyleArrow} title={title}>
                <Icon />
            </IconTooltip>
        </div>
    );
};
