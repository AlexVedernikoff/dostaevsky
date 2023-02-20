export interface DataCitiesValue {
    id: number;
    name: string;
}

export interface DataManufactoriesValue {
    id: number;
    city_id: number;
    name: string;
}
export interface DataComplaintsValue {
    key: string;
    name: string;
}

export interface DataFilters {
    isReceived: boolean;
    isLoading: boolean;
    data: {
        cities?: DataCitiesValue[];
        manufactories?: DataManufactoriesValue[];
        promos?: DataManufactoriesValue[];
        complaints?: DataComplaintsValue[];
    };
    isReceivedClientPhone: boolean;
    openClientPhone: boolean;
    clientPhone: string[];
}
