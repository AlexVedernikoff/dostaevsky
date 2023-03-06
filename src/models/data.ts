import { StringifyOptions } from "querystring";

export interface Data {
    id: number;
    status: string;
    payment_type: string;
    is_paid: boolean;
    brand: string;
    is_preorder: boolean;
    source: string;
    created_at: string;
    client_name: string;
    client_phone: string;
    total_price: number;
    deliver_at: string;
    city_id: number;
    address: string;
    courier_name: string;
    client_feedback: string;
    manufactory_id: number;
    manager_name: string;
    calendarDeliverFrom?: string;
    calendarDeliverTo?: string;
    calendarCreateFrom?: string;
    calendarCreateTo?: string;
}

export interface IPaymantTypes {
    payment_type: string;
    count: number;
    total_price: number;
    percentage: number;
}

export interface ISources {
    source: string;
    count: number;
    percentage: number;
}

export interface ISummary {
    total_orders: number;
    orders_total_price: number;
    orders_average_total_price: number;
    payment_types: IPaymantTypes[];
    sources: ISources[];
}

export interface Content {
    orders: Data[];
    summary: ISummary;
    isLoading: boolean;
}
