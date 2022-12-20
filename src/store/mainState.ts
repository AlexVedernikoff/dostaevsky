import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateMain, PayloadInput, PayloadSelect, PayloadMainState, Filters } from "../models";

const initialState: StateMain = {
    filters: {
        status_order: [{ label: "Принят", value: 1 }],
        manufacture: [{ label: "Офис", value: 1 }]
    }
};

const mainFiltersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeInput(state, action: PayloadAction<PayloadInput>) {
            state.filters[action.payload.property] = action.payload.value;
        },
        changeSelect(state, action: PayloadAction<PayloadSelect>) {
            state.filters[action.payload.property] = action.payload.value;
        },
        changeMainState(state, action: PayloadAction<PayloadMainState>) {
            state.filters = action.payload.value;
        }
    }
});
export default mainFiltersSlice.reducer;

export const { changeInput, changeSelect, changeMainState } = mainFiltersSlice.actions;
