import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateModal, PayloadInput, PayloadSelect, PayloadMainState } from "../models";
import { defaultFieldsSelect } from "constants/constantsOrders";


const initialState: StateModal = {
    open: false,
    // filters: {}
    filters: defaultFieldsSelect,
    // FilterableFields: defaultFilterableFields
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openStateModal(state, action: PayloadAction<PayloadMainState>) {
            state.open = true;
            state.filters = action.payload.value;
        },
        closeStateModal(state) {
            state.open = false;
        },
        resetModalState(state) {
            state.filters = defaultFieldsSelect;
        },
        changeInput(state, action: PayloadAction<PayloadInput>) {
            state.filters[action.payload.property] = action.payload.value;
        },
        changeSelect(state, action: PayloadAction<PayloadSelect>) {
            state.filters[action.payload.property] = action.payload.value;
        }
    }
});

export default modalSlice.reducer;

// export const { openStateModal, closeStateModal, resetModalState, changeInput, changeSelect } = modalSlice.actions;
export const { openStateModal, closeStateModal, resetModalState, changeInput, changeSelect } = modalSlice.actions;