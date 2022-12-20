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

function Header() {
    const [selectedOptions, setSelectedOptions] = useState([]);

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
                            onChange={(options) => {
                                if (Array.isArray(options)) {
                                    setSelectedOptions(options.map((opt) => opt.label));
                                }
                            }}
                            options={roleList}
                            styles={customStylesHeader}
                        />
                    </div>
                    <div className="HeaderButton">
                        <IconLabelButton iconName={<Phone className="PhoneIcon" />} onClick={() => {}}>
                            Телефония
                        </IconLabelButton>
                    </div>
                </div>
                <div className="UserLoginGroup">
                    <div className="UserName">
                        <p>Иванова Анна</p>
                    </div>
                    <ImageAvatar />
                    <Link className="containerLogOut" to={"/auth"}>
                        <LogOut />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;
