import { AxiosPromise, AxiosResponse } from "axios";

export type VoidFn = () => void;

export interface Type<T> extends Function {
    new (...args: unknown[]): T;
}

export type Nullable<T = unknown> = T | null;

export interface Tokens {
    access_token: string;
    refresh_token: string;
}

export interface SelectOption {
    value: string | number;
    label: string;
}

export interface Repository<T> {
    getAll: (params?: string) => Promise<AxiosResponse<ServerResponse<T>>> | AxiosPromise<ServerResponse<T>>;
}

export interface UseRepository<T> {
    items?: T;
    isLoading: boolean;
    errorMessage?: string;
    setup: (reset?: boolean, params?: string) => void;
    pageCount?: number;
    pageSize?: number;
    pageNumber?: number;
}

export interface ServerResponse<T> {
    content: T;
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    number: number;
    sort: Sort;
    size: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export type FormError<T extends string | number | symbol> = {
    [key in T]?: string;
};
