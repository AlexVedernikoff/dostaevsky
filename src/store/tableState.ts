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

        const { data } = await OrdersDataService.getFiltered(params.mainFilters.FilterableFields);
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
                console.log("Запрос на сервер получение информации о заказах с учётом фильтров")
                state.isLoading = true;
            })
            .addCase(fetchFilteredOrders.fulfilled, (state, action) => {
                state.orders = action.payload.orders;
                state.summary = action.payload.summary;
                state.isLoading = false;
            })
            .addCase(fetchFilteredOrders.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export default tableSlice.reducer;
