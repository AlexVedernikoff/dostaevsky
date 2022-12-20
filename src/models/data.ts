export interface Data {
    id: number;
    status: string;
    statusOfPayment: string;
    isPayed: boolean;
    brand: string;
    preOrder: boolean;
    orderNumber: string;
    channel: string;
    processed: string;
    name: string;
    phone: string;
    amount: string;
    deliveryTime: string;
    city: string;
    address: string;
    courier: string;
    client_feedback: string;
}
export interface Content {
    content: Data[];
}
