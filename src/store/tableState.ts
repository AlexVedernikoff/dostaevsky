import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Content, StateMain } from "../models";
import OrdersDataService from "../api/service/orders";

const initialState: Content = {
    orders: [],
    summary: {
        total_orders: 0,
        orders_total_price: 0,
        orders_average_total_price: 0,
        payment_types: [],
        sources: []
    },
    isLoading: false
};

export const fetchFilteredOrders = createAsyncThunk<Content, undefined, { rejectValue: string; state: { mainFilters: StateMain } }>(
    "table/fetchFilteredOrders",
    async (_, { rejectWithValue, getState }) => {
        const params = getState();
        const notEmptyParams = {}

        for (let key in params.mainFilters.FilterableFields) {
            // console.log(key, " = ", params.mainFilters.FilterableFields[key])

            if (params.mainFilters.FilterableFields[key]) {
                notEmptyParams[key] = params.mainFilters.FilterableFields[key]
            }
        }
        // console.log("params fetchFilteredOrders = ", params.mainFilters.FilterableFields)
        // console.log("params notEmptyParams = ", notEmptyParams)

        // const { data } = await OrdersDataService.getFiltered(params.mainFilters.FilterableFields);
        const { data } = await OrdersDataService.getFiltered(notEmptyParams);
        return data;
    }
);

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilteredOrders.pending, (state) => {
                console.log("Запрос 1 на сервер получение информации о заказах с учётом фильтров")
                state.isLoading = true;
            })
            .addCase(fetchFilteredOrders.fulfilled, (state, action) => {
                console.log("Запрос на сервер выполнен успешно")
                state.orders = action.payload.orders;
                state.summary = action.payload.summary;
                state.isLoading = false;
            })
            .addCase(fetchFilteredOrders.rejected, (state) => {
                console.log("Запрос на сервер отклонён с ошибкой!")
                state.isLoading = false;
            });
    }
});

export default tableSlice.reducer;
