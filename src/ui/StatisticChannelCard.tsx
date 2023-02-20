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
import { rows } from "../data/statisticChannelCard";
import { getSVG } from "../application";
import { useAppSelector } from "hooks/use-redux";

export enum SourcesNameEnum {
    ios = "iOS",
    phone = "Call-центр",
    website = "Сайт",
    android = "Android",
    delivery_club = "Delivery club"
}

const StatisticChannelCard = () => {
    const sources = useAppSelector((state) => state.table.summary.sources);

    return (
        <div className="StatisticCard StatisticChannelCard">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <h2 className="StatisticTitle">Канал поступления</h2>
                            </TableCell>
                            <ImageButton>
                                <CloseMini />
                            </ImageButton>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sources.map((row) => (
                            <TableRow key={SourcesNameEnum[row.source]} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {getSVG(SourcesNameEnum[row.source])}&nbsp;&nbsp;{SourcesNameEnum[row.source]}
                                </TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                                <TableCell align="right">{}</TableCell>
                                <TableCell align="right">{`${row.percentage}%`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default StatisticChannelCard;
