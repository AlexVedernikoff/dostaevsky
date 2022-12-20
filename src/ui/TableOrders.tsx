import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const rows: GridRowsProp = [
    {
        id: 1,
        col1: "Hello",
        col2: "World",
        col3: "test1",
        col4: "test2",
        col5: "test3",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12"
    },
    {
        id: 1,
        col1: "Hello",
        col2: "World",
        col3: "test1",
        col4: "test2",
        col5: "test3",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12"
    },
    {
        id: 1,
        col1: "Hello",
        col2: "World",
        col3: "test1",
        col4: "test2",
        col5: "test3",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12"
    },
    {
        id: 1,
        col1: "14848574",
        col2: "",
        col3: "25.08.22 12:43",
        col4: "Александр",
        col5: "+7(999)1230055",
        col6: "col6",
        col7: "2 555",
        col8: "25.08.22 16:00",
        col9: "Санкт-Петербург",
        col10: "пр-кт Энергетиков, д. 1, кв. 321",
        col11: "col11",
        col12: "col12"
    }
];
const columns: GridColDef[] = [
    { field: "col1", headerName: "№ заказа", width: 110, maxWidth: 95, flex: 1 },
    { field: "col2", headerName: "Канал", width: 60, maxWidth: 60, flex: 1 },
    { field: "col3", headerName: "Оформлен", width: 114, flex: 1 },
    { field: "col4", headerName: "Имя", width: 110, flex: 1 },
    { field: "col5", headerName: "Телефон", width: 110, maxWidth: 130, flex: 1 },
    { field: "col6", headerName: "Статус", width: 110, flex: 1 },
    { field: "col7", headerName: "Сумма, ₽ ", width: 60, maxWidth: 60, flex: 1 },
    { field: "col8", headerName: "Доставить", width: 110, flex: 1 },
    { field: "col9", headerName: "Город", width: 115, flex: 1 },
    { field: "col10", headerName: "Адрес доставки", width: 110, flex: 1 },
    { field: "col11", headerName: "Курьер", width: 100, maxWidth: 100, flex: 1 },
    { field: "col12", headerName: "Отзыв", width: 60, maxWidth: 60, flex: 1 }
];
function TableOrders() {
    return (
        <div>
            <DataGrid rows={rows} columns={columns} disableColumnFilter={true} disableColumnMenu={true} showColumnRightBorder={false} pagination />
        </div>
    );
}

export default TableOrders;
