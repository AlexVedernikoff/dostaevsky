import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../../styles/TableStyles.scss";
import { getFormatTimeFromIso8601, getTypeDelay } from "../../application";
import { Footer, NoRowsOverlay, IconChannel, OrderNumber, BrandIcon, StatusIcon, Deliver, FeedbackIcon } from "../common";
import { useAppDispatch, useAppSelector } from "hooks/use-redux";
import { fetchFilteredOrders } from "store/tableState";

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "№ заказа",
        renderCell: OrderNumber,
        width: 76,
        maxWidth: 76,
        flex: 1,
        cellClassName: "MuiDataGrid-cell--textCenter"
    },
    {
        field: "source",
        headerName: "Канал",
        renderCell: IconChannel,
        width: 38,
        maxWidth: 45,
        flex: 1,
        cellClassName: "MuiDataGrid-cell--textCenter"
    },
    {
        field: "created_at",
        headerName: "Оформлен",
        renderCell: BrandIcon,
        width: 118,
        maxWidth: 118,
        flex: 1
    },
    { field: "client_name", headerName: "Имя", width: 80, maxWidth: 90, flex: 1 },
    { field: "client_phone", headerName: "Телефон", width: 104, maxWidth: 104, flex: 1 },
    {
        field: "status",
        headerName: "Статус",
        width: 116,
        maxWidth: 116,
        renderCell: StatusIcon,
        flex: 1
    },
    {
        field: "total_price",
        headerName: "Сумма, ₽ ",
        width: 62,
        maxWidth: 62,
        flex: 1,
        cellClassName: "MuiDataGrid-cell--textCenter"
    },
    {
        field: "deliver_at",
        headerName: "Доставить",
        renderCell: Deliver,
        width: 116,
        maxWidth: 118,
        flex: 1
    },
    { field: "city_name", headerName: "Город", width: 110, maxWidth: 112, flex: 1 },
    { field: "address", headerName: "Адрес доставки", width: 110, maxWidth: 192, flex: 1 },
    { field: "courier_name", headerName: "Курьер", width: 100, maxWidth: 94, flex: 1 },
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
    const table = useAppSelector((state) => state.table);
    console.log(" table = ", table)
    const dataFilters = useAppSelector((state) => state.dataFilters);
    const dispatch = useAppDispatch();


    let orders = table.orders.map(order => {
        console.log(order.total_price.toLocaleString('ru'))
        return {
            ...order,
            client_phone: "+" + order.client_phone,
            total_price: order.total_price.toLocaleString('ru')
        };
    })


    if (dataFilters.isReceived) {
        orders = orders.map((order) => {
            console.log("order = ", order)
            const dataCity = dataFilters.data.cities.find((city) => city.id === order.city_id);
            return {
                ...order,
                // client_phone: "+" + client_phone,
                city_name: dataCity.name
            };
        });
    }

    useEffect(() => {
        dispatch(fetchFilteredOrders());
    }, [dispatch]);

    return (
        <div>
            <Box
                sx={{
                    border: "none",
                    height: "calc(100vh - 260px)",
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
                        rows={orders}
                        loading={table.isLoading}
                        columns={columns}
                        getRowClassName={(params) => `${getTypeDelay(getFormatTimeFromIso8601(params.row.created_at))}`}
                        disableColumnFilter={true}
                        disableColumnMenu={true}
                        showColumnRightBorder={false}
                        pageSize={100}
                        rowsPerPageOptions={[5]}
                        pagination={true}
                        style={{ border: "none" }}
                        components={{
                            Pagination: Footer,
                            NoRowsOverlay
                        }}
                    />
                </div>
            </Box>
        </div>
    );
}

export default TableOrders;
