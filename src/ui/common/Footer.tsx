import React, { useState } from "react";
import StatisticPaymentCard from "../StatisticPaymentCard";
import StatisticChannelCard from "../StatisticChannelCard";
import { ReactComponent as Download } from "../../svg/download.svg";
import { useAppSelector } from "hooks/use-redux";
import { getFormatNumber } from "application/get-format-number";

export function Footer() {
    const [isShownPaymentType, setIsShownPaymentType] = useState(false);
    const [isShownChannelType, setIsShownChannelType] = useState(false);

    const summary = useAppSelector((state) => state.table.summary);

    return (
        <>
            <div className="StatisticsContainer">
                <ul className="StatisticList">
                    <li className="StatisticItem">
                        Всего заказов: <p> {getFormatNumber(summary.total_orders)}</p>
                    </li>
                    <li className="StatisticItem">
                        Сумма заказов, ₽: <p> {getFormatNumber(summary.orders_total_price)}</p>
                    </li>
                    <li className="StatisticItem">
                        Средний чек, ₽: <p> {getFormatNumber(summary.orders_average_total_price)}</p>
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
        </>
    );
}
