import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateModal, PayloadInput, PayloadSelect, PayloadMainState } from "../models";

const initialState: StateModal = {
    open: false,
    filters: {}
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        // openStateModal(state, action: PayloadAction<PayloadMainState>) {
        //     state.open = true;
        //     state.filters = action.payload.value;
        // },
        // closeStateModal(state) {
        //     state.open = false;
        // },
        // resetModalState(state) {
        //     state.filters = {};
        // },
        // changeInput(state, action: PayloadAction<PayloadInput>) {
        //     state.filters[action.payload.property] = action.payload.value;
        // },
        // changeSelect(state, action: PayloadAction<PayloadSelect>) {
        //     state.filters[action.payload.property] = action.payload.value;
        // }
    }
});

export default modalSlice.reducer;

// export const { openStateModal, closeStateModal, resetModalState, changeInput, changeSelect } = modalSlice.actions;
