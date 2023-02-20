import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoAuth } from "../svg/logoAuth.svg";
import { ReactComponent as EyeOpen } from "../svg/eyeOpen.svg";
import { ReactComponent as EyeClose } from "../svg/eyeClose.svg";

import "../styles/Auth.scss";

export interface IAuthPageProps {}

const AuthPage: FC<IAuthPageProps> = (props) => {
    const navigate = useNavigate();

    const [openEye, setOpenEye] = useState(true);
    const [validate, setValidate] = useState(true);

    function changeState(state) {
        setOpenEye(!state);
    }
    function checkValue(event) {
        event.preventDefault();
        const login = event.target.login.value;
        const password = event.target.password.value;
        if (login === "admin" && password === "admin") navigate("/");
        else {
            setValidate(false);
        }
    }

    return (
        <>
            <LogoAuth className="logoAuth" />
            <div className="AuthContainer">
                <div className={validate ? "formWithLogoSuccsess" : "formWithLogoError"}>
                    <img className="logoAuthForm" src="img/logoAuthForm.png" alt="Logo_Auth_Form" />
                    <form className="form" onSubmit={(e) => checkValue(e)}>
                        <div className="inputGroupAuth">
                            <div className="inputGroup">
                                <label className="label">Логин</label>
                                <input name="login" className="inputLogin" placeholder="Введите логин"></input>
                                {validate ? <small></small> : <small className="errorMessage">Неверный логин</small>}
                            </div>
                            <div className="inputGroup">
                                <label className="label">Пароль</label>
                                <input name="password" className="inputPassword" placeholder="Введите пароль" type={openEye ? "password" : "text"}></input>
                                {validate ? <small></small> : <small className="errorMessage">Неверный пароль</small>}
                                {openEye ? (
                                    <EyeOpen
                                        onClick={() => {
                                            changeState(openEye);
                                        }}
                                        className="eye"
                                    />
                                ) : (
                                    <EyeClose
                                        onClick={() => {
                                            changeState(openEye);
                                        }}
                                        className="eye"
                                    />
                                )}
                            </div>
                        </div>
                        <button className="btnSignIn">
                            <b>Войти</b>
                        </button>
                    </form>
                </div>
                <div className="Footer">
                    <p className="textFooter">
                        Есть вопросы?
                        <br />
                        Напишите нам по адресу
                        <a href="https://support.dostaevsky.ru/"> support.dostaevsky.ru</a> или <br />
                        позвоните <a href="#">+7 (911) 993-65-84, +7 (911) 931-27-38</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default AuthPage;
