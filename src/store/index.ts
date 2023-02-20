import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataFilters from "./dataFilters";
import mainFiltersSlice from "./mainState";
import modalSlice from "./modalState";
import tableSlice from "./tableState";

const rootReducer = combineReducers({
    mainFilters: mainFiltersSlice,
    modal: modalSlice,
    table: tableSlice,
    dataFilters: dataFilters
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
