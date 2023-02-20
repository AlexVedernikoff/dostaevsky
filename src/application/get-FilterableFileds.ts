import { FilteredFieldsInDB } from "constants/constantsOrders";
import { InputValue } from "models";

export function getFilterableFields(payloadProperty: string, payloadValue: string | InputValue[]) {
    let value;
    const field = FilteredFieldsInDB[payloadProperty];

    if (!field) return;

    if (Array.isArray(payloadValue)) {
        const values = [];
        payloadValue.forEach((element) => {
            values.push(element.value);
        });
        value = values.join(",");
    } else {
        value = payloadValue;
    }

    return { property: field, value: value };
}
