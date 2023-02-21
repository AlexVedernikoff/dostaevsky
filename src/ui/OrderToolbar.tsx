import React from "react";
import { IconLabelButton } from "./common";
import { ReactComponent as Refresh } from "../svg/refresh.svg";
import { ReactComponent as Add } from "../svg/add.svg";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";

const OrderToolbar = () => {
    return (
        <div className="OrderToolbar">
            <div className="TitleText">Заказы</div>
            <div className="buttonGroup">
                <IconLabelButton iconName={<Refresh />} onClick={() => { }}>
                    Обновить
                </IconLabelButton>

                <PopupState variant="popper" popupId="demo-popup-popper">
                    {(popupState) => (
                        <div>
                            <div className="button">
                                <Button className="btnNewOrder" variant="outlined" {...bindToggle(popupState)}>
                                    <Add />&nbsp;Новый&#160;заказ
                                </Button>
                            </div>
                            <Popper {...bindPopper(popupState)} transition>
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper className="paperNewOrder">
                                            <Button className="btnCity">Санкт-Петербург</Button>
                                            <Button className="btnCity">Москва</Button>
                                            <Button className="btnCity">Регионы</Button>
                                        </Paper>
                                    </Fade>
                                )}
                            </Popper>
                        </div>
                    )}
                </PopupState>
            </div>
        </div>
    );
};

export default OrderToolbar;
