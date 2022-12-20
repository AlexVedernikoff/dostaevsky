import React, { useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Header from "./Header";
import { sidebarWidth } from "../constants/constantsSidebar";

import { ReactComponent as Close } from "../svg/close.svg";
import { ReactComponent as Orders } from "../svg/orders.svg";
import { ReactComponent as Clients } from "../svg/clients.svg";

const openedMixin = (theme: Theme): CSSObject => ({
    width: sidebarWidth,

    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: "70px",
    [theme.breakpoints.up("sm")]: {
        width: "70px"
    }
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    width: sidebarWidth,
    height: "auto",
    flexShrink: 1,
    whiteSpace: "normal",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
    })
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

function Sidebar() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <AppBar position="fixed">
                    <div className="HeaderToolbar">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: "none" })
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <div className="DivClose">
                                <IconButton
                                    onClick={handleDrawerClose}
                                    sx={{
                                        marginRight: 5,
                                        marginLeft: -1,
                                        ...(!open && { display: "none" })
                                    }}
                                >
                                    <Close className="Close" />
                                </IconButton>
                            </div>
                            <Header />
                        </Toolbar>
                    </div>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <div className="IconSideBar">
                        {open ? (
                            <>
                                <IconButton className="IconSize2">
                                    <Orders className="OrdersIcon" />
                                    <div className="IconSideBarOrders">Заказы</div>
                                </IconButton>
                                <IconButton className="IconSize">
                                    <Clients />
                                    <div className="IconSideBarClients">Клиенты</div>
                                </IconButton>
                            </>
                        ) : (
                            <>
                                <IconButton>
                                    <Orders className="OrdersIcon" />
                                </IconButton>
                                <IconButton>
                                    <Clients />
                                </IconButton>
                            </>
                        )}
                    </div>
                </Drawer>
            </Box>
        </>
    );
}

export default Sidebar;
