import { FilterParams, Filters } from "../models";

export const style = {
    position: "absolute" as "absolute",
    top: "0",
    right: "0",
    width: 368,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: "10px 28px",
    boxSizing: " border-box"
};
export const defaultFieldsSelect: Filters = {

    status_order: [{ label: "На кухне", value: "on_kitchen" }],
    manufacture: [{ label: "Офис", value: 9 }]


};

export const defaultFilterableFields: FilterParams = {
    status: defaultFieldsSelect.status_order[0].value,
    manufactory_id: defaultFieldsSelect.manufacture[0].value
};

export const FilteredFieldsInDB = {
    number_order: "id",
    number_telephone: "client_phone",
    status_order: "status",
    city: "city_id",
    address: "address",
    manufacture: "manufactory_id",
    brand: "brand",
    fromAmount: "total_price_from",
    toAmount: "total_price_to",
    paymentType: "payment_type",
    source: "source",
    stock: "promo_id",
    courierName: "courier_id",
    typeDeliver: "delivery_type",
    managerName: "manager_id",
    clientFeedback: "client_feedback",
    claimType: "complaint_type",
    product: "product_id",
    calendarDeliverFrom: "calendarDeliverFrom",
    calendarDeliverTo: "calendarDeliverTo",
    calendarCreateFrom: "calendarCreateFrom",
    calendarCreateTo: "calendarCreateTo"
};
