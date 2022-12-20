import React from "react";
import { ReactComponent as ColorValue } from "../svg/colorValue.svg";
import { ReactComponent as CloseMini } from "../svg/closeMini.svg";
import { ReactComponent as ColorWhite } from "../svg/colorWhite.svg";
import { ReactComponent as ColorRed } from "../svg/colorRed.svg";
import { ReactComponent as ColorYellow } from "../svg/colorYellow.svg";

export function getColorSvg(name: string) {
    switch (name) {
        case "Наличные":
            return <ColorWhite />;
        case "М/терминал":
            return <ColorValue />;
        case "Онлайн":
            return <ColorYellow />;
        case "Без оплаты":
            return <ColorRed />;
        default:
            return <CloseMini />;
    }
}
