import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFilterableFields } from "application/get-FilterableFileds";
import { defaultFieldsSelect, defaultFilterableFields } from "constants/constantsOrders";
import { StateMain, PayloadInput, PayloadSelect, PayloadMainState } from "../models";

const initialState: StateMain = {
    open: false,
    filters: defaultFieldsSelect,
    FilterableFields: defaultFilterableFields
};

const mainFiltersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        openStateModal(state, action: PayloadAction<PayloadMainState>) {
            state.open = true;
            state.filters = action.payload.value;
        },
        closeStateModal(state) {
            state.open = false;
        },
        resetState(state) {
            state.filters = defaultFieldsSelect;
            state.FilterableFields = defaultFilterableFields;
        },
        changeInput(state, action: PayloadAction<PayloadInput>) {
            state.filters[action.payload.property] = action.payload.value;
            const field = getFilterableFields(action.payload.property, action.payload.value);
            if (field) {
                state.FilterableFields[field.property] = field.value;
            }
        },
        changeSelect(state, action: PayloadAction<PayloadSelect>) {
            state.filters[action.payload.property] = action.payload.value;
            const field = getFilterableFields(action.payload.property, action.payload.value);
            if (field) {
                state.FilterableFields[field.property] = field.value;
            }
        },
        changeMainState(state, action: PayloadAction<PayloadMainState>) {
            state.filters = action.payload.value;

            for (const value in action.payload.value) {
                let field = getFilterableFields(value, action.payload.value[value]);
                if (field) {
                    state.FilterableFields[field.property] = field.value;
                }
            }
        }
    }
});
export default mainFiltersSlice.reducer;

export const { openStateModal, closeStateModal, resetState, changeInput, changeSelect, changeMainState } = mainFiltersSlice.actions;
