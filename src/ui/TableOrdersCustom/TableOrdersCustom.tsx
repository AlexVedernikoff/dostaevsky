import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../../styles/TableStyles.scss";
import { getTypeDelay } from "../../application";
import { CustomPagination, NoRowsOverlay, IconChannel, OrderNumber, BrandIcon, StatusIcon, Deliver, FeedbackIcon } from "../common";

import { useAppSelector } from "hook/use-redux";

const columns: GridColDef[] = [
    {
        field: "orderNumber",
        headerName: "№ заказа",
        renderCell: OrderNumber,
        width: 76,
        maxWidth: 76,
        flex: 1,
        cellClassName: "MuiDataGrid-cell--textCenter"
    },
    {
        field: "channel",
        headerName: "Канал",
        renderCell: IconChannel,
        width: 38,
        maxWidth: 45,
        flex: 1,
        cellClassName: "MuiDataGrid-cell--textCenter"
    },
    {
        field: "processed",
        headerName: "Оформлен",
        renderCell: BrandIcon,
        width: 118,
        maxWidth: 118,
        flex: 1
    },
    { field: "name", headerName: "Имя", width: 80, maxWidth: 90, flex: 1 },
    { field: "phone", headerName: "Телефон", width: 104, maxWidth: 104, flex: 1 },
    {
        field: "status",
        headerName: "Статус",
        width: 116,
        maxWidth: 116,
        renderCell: StatusIcon,
        flex: 1
    },
    {
        field: "amount",
        headerName: "Сумма, ₽ ",
        width: 62,
        maxWidth: 62,
        flex: 1,
        cellClassName: "MuiDataGrid-cell--textCenter"
    },
    {
        field: "deliveryTime",
        headerName: "Доставить",
        renderCell: Deliver,
        width: 116,
        maxWidth: 118,
        flex: 1
    },
    { field: "city", headerName: "Город", width: 110, maxWidth: 112, flex: 1 },
    { field: "address", headerName: "Адрес доставки", width: 110, maxWidth: 192, flex: 1 },
    { field: "courier", headerName: "Курьер", width: 100, maxWidth: 94, flex: 1 },
    {
        field: "client_feedback",
        headerName: "Отзыв",
        width: 60,
        maxWidth: 44,
        renderCell: FeedbackIcon,
        flex: 1,
        cellClassName: "MuiDataGrid-cell--textCenter"
    }
];

function TableOrders() {
    const state = useAppSelector((state) => state.table.content);

    return (
        <div>
            <Box
                sx={{
                    boder: "none",
                    height: 400,
                    width: "100%",
                    "& .delay3": {
                        bgcolor: "#FFE0D5"
                    },
                    "& .delay15": {
                        bgcolor: "#FAD1DD"
                    },
                    "& .noDelay": {
                        bgcolor: "#FFFFFF"
                    }
                }}
            >
                <div className="dataGrid">
                    <DataGrid
                        rows={state}
                        columns={columns}
                        getRowClassName={(params) => `${getTypeDelay(params.row.processed)}`}
                        disableColumnFilter={true}
                        disableColumnMenu={true}
                        showColumnRightBorder={false}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        pagination
                        style={{ border: "none" }}
                        components={{
                            Pagination: CustomPagination,
                            NoRowsOverlay
                        }}
                    />
                </div>
            </Box>
        </div>
    );
}

export default TableOrders;
