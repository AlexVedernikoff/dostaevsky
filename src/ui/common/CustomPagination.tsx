import React, { useState } from "react";
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import StatisticPaymentCard from "../StatisticPaymentCard";
import StatisticChannelCard from "../StatisticChannelCard";
import { ReactComponent as Download } from "../../svg/download.svg";

export function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const [isShownPaymentType, setIsShownPaymentType] = useState(false);
    const [isShownChannelType, setIsShownChannelType] = useState(false);
    return (
        <>
            <div className="StatisticsContainer">
                <ul className="StatisticList">
                    <li className="StatisticItem">
                        Всего заказов: <p> 15</p>
                    </li>
                    <li className="StatisticItem">
                        Сумма заказов, ₽: <p> 75 000</p>
                    </li>
                    <li className="StatisticItem">
                        Средний чек, ₽: <p> 1500</p>
                    </li>
                    <li className="StatisticItem ChipItem" onMouseEnter={() => setIsShownPaymentType(true)} onMouseLeave={() => setIsShownPaymentType(false)}>
                        Тип оплаты
                        {isShownPaymentType && <StatisticPaymentCard />}
                    </li>
                    <li className="StatisticItem ChipItem" onMouseEnter={() => setIsShownChannelType(true)} onMouseLeave={() => setIsShownChannelType(false)}>
                        Канал поступления
                        {isShownChannelType && <StatisticChannelCard />}
                    </li>
                    <li className="StatisticItem">
                        <Download />
                    </li>
                </ul>
            </div>
            <Pagination color="primary" count={pageCount} page={page + 1} onChange={(event, value) => apiRef.current.setPage(value - 1)} />
        </>
    );
}
