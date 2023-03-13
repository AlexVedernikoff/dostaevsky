import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataFilters } from "models/dataFilters";
import filterService from "../api/service/filters";
import OrdersDataService from "../api/service/orders";

const initialState: DataFilters = {
    isReceived: false,
    isLoading: false,
    data: {},
    isReceivedClientPhone: false,
    openClientPhone: false,
    clientPhone: []
};

export const fetchDataFilters = createAsyncThunk("data/filters/fetchDataFilters", async () => {
    const cities = await filterService.getCities();
    const manufactories = await filterService.getManufactories();
    const promos = await filterService.getPromos();
    const complaints = await filterService.getComplaints();

    return { cities: cities.data, manufactories: manufactories.data, promos: promos.data, complaints: complaints.data };
});

export const fetchClientPhone = createAsyncThunk<string[], string, { rejectValue: string }>("table/fetchClientPhone", async (clientPhone, { rejectWithValue }) => {
    const { data } = await OrdersDataService.getClientPhone(clientPhone);
    return data.slice(0, 9);
});

const dataFilters = createSlice({
    name: "data/filters",
    initialState,
    reducers: {
        toggleClientPhone(state, action: PayloadAction<boolean>) {
            state.openClientPhone = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataFilters.pending, (state) => {
            // console.log("Запрос 2 на сервер получение информации о заказах с учётом фильтров")
            state.isLoading = true;
        });
        builder.addCase(fetchDataFilters.fulfilled, (state, action) => {
            state.isReceived = true;
            state.data = action.payload;
        });
        builder.addCase(fetchDataFilters.rejected, (state) => {
            state.isLoading = false;
            state.isReceived = false;
        });
        builder.addCase(fetchClientPhone.pending, (state) => {
            state.isReceivedClientPhone = false;
        });
        builder.addCase(fetchClientPhone.fulfilled, (state, action) => {
            state.clientPhone = action.payload;
            state.isReceivedClientPhone = true;
            state.openClientPhone = true;
        });
        builder.addCase(fetchClientPhone.rejected, (state) => {
            state.isReceivedClientPhone = false;
            state.openClientPhone = false;
            state.clientPhone = [];
        });
    }
});

export default dataFilters.reducer;
export const { toggleClientPhone } = dataFilters.actions;
