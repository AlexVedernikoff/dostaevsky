import { FilterParams } from "./app";
import { Filters, InputValue } from "./filters";

export interface InputValueDispatch {
    value: string | InputValue[];
    property: string;
}

export interface PayloadInput {
    property: string;
    value: string;
}

export interface PayloadSelect {
    property: string;
    value: InputValue[];
}

export interface PayloadMainState {
    value: Filters;
}

export interface StateModal {
    open: boolean;
    filters: Filters;
}
export interface StateMain {
    open: boolean;
    filters: Filters;
    FilterableFields: FilterParams;
}
export interface PayloadModal {
    value: boolean;
}
