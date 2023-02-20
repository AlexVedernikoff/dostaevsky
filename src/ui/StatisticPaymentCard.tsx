import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactComponent as CloseMini } from "../svg/closeMini.svg";
import { ImageButton } from "./common";
import { getColorSvg } from "../application";
import { rows } from "../data/statisticPaymentCard";
import { useAppSelector } from "hooks/use-redux";

export enum PayTypeNameEnum {
    cash = "Наличные",
    no_pay = "Без оплаты",
    online = "Онлайн",
    mobile_terminal = "М/терминал"
}

const StatisticPaymentCard = () => {
    const payment_types = useAppSelector((state) => state.table.summary.payment_types);

    return (
        <div className="StatisticCard StatisticPaymentCard">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <h2 className="StatisticTitle">Тип оплаты</h2>
                            </TableCell>
                            <ImageButton>
                                <CloseMini />
                            </ImageButton>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payment_types.map((row) => (
                            <TableRow key={PayTypeNameEnum[row.payment_type]} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {getColorSvg(PayTypeNameEnum[row.payment_type])}&nbsp;&nbsp;{PayTypeNameEnum[row.payment_type]}
                                </TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                                <TableCell align="right">{row.total_price}</TableCell>
                                <TableCell align="right">{`${row.percentage}%`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default StatisticPaymentCard;
