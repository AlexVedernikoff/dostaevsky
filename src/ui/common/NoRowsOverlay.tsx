import React from "react";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { ReactComponent as Magnifier } from "../../../src/svg/magnifier.svg";
import { ReactComponent as CrossMagnifier } from "../../svg/crossMagnifier.svg";
import { resetState } from "../../store/mainState";

export function NoRowsOverlay() {
    const dispatch = useDispatch();

    console.log("resetState = ", resetState)
    return (
        <Stack height="100%" alignItems="center" justifyContent="center">
            <div className="IconSearch">
                <div className="Magnifier">
                    <Magnifier />
                </div>
                <div className="CrossMagnifier">
                    <CrossMagnifier />
                </div>
            </div>
            <p>
                <b>
                    Результаты не найдены
                    <b />
                </b>{" "}
                <br />
                Измените или сбросьте примененные фильтры
            </p>
            <div className="button">
                <Button onClick={() => {
                    console.log("Вы сбросили фильтры до значений по умолчанию")
                    dispatch(resetState());
                }} variant="outlined">Сбросить фильтры</Button>
            </div>
        </Stack>
    );
}
