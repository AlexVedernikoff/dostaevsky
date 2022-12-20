import React from "react";
import { ReactComponent as Android } from "../svg/android.svg";
import { ReactComponent as Apple } from "../svg/apple.svg";
import { ReactComponent as Web } from "../svg/web.svg";
import { ReactComponent as DC } from "../svg/dc.svg";
import { ReactComponent as CloseMini } from "../svg/closeMini.svg";

export function getSVG(name: string) {
    switch (name) {
        case "Android":
            return <Android />;
        case "Call-центр":
            return <Android />;
        case "iOS":
            return <Apple />;
        case "Сайт":
            return <Web />;
        case "Delivery club":
            return <DC />;
        default:
            return <CloseMini />;
    }
}
