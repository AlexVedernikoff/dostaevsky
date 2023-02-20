import api from "../index";

class filterService {
    getCities() {
        return api.get("/cities");
    }

    getManufactories() {
        return api.get("/manufactories");
    }

    getPromos() {
        return api.get("/promos");
    }

    getComplaints() {
        return api.get("/complaints");
    }

    getManagerByName(name: string = null) {
        if (name !== null) {
            return api.get("/managers", {
                params: {
                    name
                }
            });
        }
    }

    getCouriersByName(name: string = null) {
        if (name !== null) {
            return api.get("/couriers", {
                params: {
                    name
                }
            });
        }
    }

    getProductsByName(name: string = null) {
        if (name !== null) {
            return api.get("/products", {
                params: {
                    name
                }
            });
        }
    }

    getPhoneByNumber(phone: number = null) {
        if (Number.isFinite(phone)) {
            return api.get("/products", {
                params: {
                    phone
                }
            });
        }
    }
}

export default new filterService();
