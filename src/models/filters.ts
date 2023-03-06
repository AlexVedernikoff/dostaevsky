export interface InputValue {
    label: string;
    value: number;
}

export interface InputValueString {
    label: string;
    value: string;
}

export interface Filters {
    number_order?: string;
    number_telephone?: string;
    status_order?: InputValueString[];
    city?: InputValue[];
    address?: string;
    manufacture?: InputValue[];
    brand?: InputValue[];
    fromAmount?: string;
    toAmount?: string;
    paymentType?: InputValue[];
    source?: InputValue[];
    stock?: InputValue[];
    courierName?: InputValue[];
    typeDeliver?: InputValue[];
    managerName?: InputValue[];
    clientFeedback?: InputValue[];
    claimType?: InputValue[];
    product?: InputValue[];
    recipientPhone?: string;
    calendarDeliverFrom?: string;
    calendarDeliverTo?: string;
    calendarCreateFrom?: string;
    calendarCreateTo?: string;
}
