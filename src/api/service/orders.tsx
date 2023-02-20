import { FilterParams } from "models";
import api from "../index";

class OrdersDataService {
    getAll() {
        return api.get("/orders");
    }

    getSortedByField(field, type = "asc") {
        return api.get("/orders", {
            params: {
                sort_by: `${field}__${type}`
            }
        });
    }

    getFiltered(params: FilterParams = {}) {
        return api.get("/orders", {
            params
        });
    }

    getClientPhone(phone: string) {
        return api.get("/clientphones", {
            params: { phone }
        });
    }
}

export default new OrdersDataService();
