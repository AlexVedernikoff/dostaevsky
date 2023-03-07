import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { ReactComponent as Phone } from "../svg/phone.svg";
import { ReactComponent as HeroLogo } from "../svg/logo.svg";
import { ReactComponent as LogOut } from "../svg/logout.svg";
import { IconLabelButton, ImageAvatar } from "./common";
import Divider from "@mui/material/Divider";
import { roleList } from "../data/dataHeader";
import { customStylesHeader } from "../ui/common";
import { Buffer } from "buffer";

function Header() {

    function parseNameFromToken() {
        const tokens = JSON.parse(localStorage.getItem("tokens"));
        if (!tokens) return;
        const decodeToken = Buffer.from(tokens.access_token, 'base64').toString('utf-8')
        const regexp = /"unique_name":".*?"/gi;
        const matches_array = decodeToken.match(regexp);
        const name = (matches_array[0].split(":"))[1].slice(1, -1)
        // console.log("Достаём имя пользователя из token: ", name);
        return name;
    }

    return (
        <>
            <div className="HeaderContainer">
                <div className="HeroGroup">
                    <div>
                        <HeroLogo />
                    </div>
                    <div className="Divider">
                        <Divider orientation="vertical" flexItem sx={{ width: 2, height: 32, background: "#ffffff", opacity: 0.2, borderRadius: 0.5 }} />
                    </div>
                    <div>
                        <Select
                            isSearchable={true}
                            isClearable={false}
                            placeholder=""
                            defaultValue={[{ label: "Оператор", value: 1 }]}
                            name="role"
                            className="SelectFilter"
                            options={roleList}
                            styles={customStylesHeader}
                        />
                    </div>
                    <div className="HeaderButton">
                        <IconLabelButton iconName={<Phone className="PhoneIcon" />} onClick={() => { }}>
                            Телефония
                        </IconLabelButton>
                    </div>
                </div>
                <div className="UserLoginGroup">
                    <div className="UserName">
                        <p>{parseNameFromToken()}</p>
                    </div>
                    <ImageAvatar />
                    {/* <Link className="containerLogOut" to={"/auth"}> */}
                    <Link className="containerLogOut" to={"../"}
                        onClick={() => {
                            console.log("Вы кликнули на logout")
                            localStorage.clear()
                        }}>
                        <LogOut />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;
