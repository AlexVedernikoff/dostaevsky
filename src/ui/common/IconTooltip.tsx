import React from "react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export const StyleArrow = {
    "& .MuiTooltip-arrow": {
        color: "white"
    }
};
export const IconTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
        {...props}
        classes={{ popper: className }}
        arrow
        placement="top"
        sx={{
            "& .MuiTooltip-arrow": {
                color: "white"
            }
        }}
    />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: 11
    }
}));
