import { createSlice } from "@reduxjs/toolkit";
import { Content } from "../models";

const initialState: Content = {
    content: [
        {
            id: 1,
            status: "accepted",
            statusOfPayment: "online",
            isPayed: true,
            brand: "dostoevsky",
            preOrder: true,
            orderNumber: "14848574",
            channel: "callCenter",
            processed: "23.11.22 08:55",
            name: "Александр",
            phone: "+7(999)1230055",
            amount: "2 555",
            deliveryTime: "23.11.22 09:45",
            city: "Санкт-Петербург",
            address: "пр-кт Энергетиков, д. 1, кв. 321",
            courier: "",
            client_feedback: "positive"
        },
        {
            id: 2,
            status: "assemble",
            statusOfPayment: "cash",
            isPayed: true,
            brand: "dostoevsky",
            preOrder: true,
            orderNumber: "1234567",
            channel: "android",
            processed: "23.11.22 15:40",
            name: "Анна",
            phone: "+7(999)1230055",
            amount: "2 555",
            deliveryTime: "23.11.22 16:05",
            city: "Новосибирск",
            address: "пр-кт Энергетиков, д. 1, кв. 321",
            courier: "Борисов Т.",
            client_feedback: "positive"
        },
        {
            id: 3,
            status: "prepare",
            statusOfPayment: "terminal",
            isPayed: true,
            preOrder: false,
            brand: "homePie",
            orderNumber: "1903245",
            channel: "iOS",
            processed: "23.11.22 10:57",
            name: "Иван",
            phone: "+7(999)1230055",
            amount: "2 555",
            deliveryTime: "23.11.22 12:00",
            city: "Санкт-Петербург",
            address: "пр-кт Невский, д. 1, кв. 321",
            courier: "",
            client_feedback: "negative"
        },
        {
            id: 4,
            status: "on_kitchen",
            statusOfPayment: "notPaid",
            isPayed: false,
            brand: "homePie",
            preOrder: true,
            orderNumber: "329543",
            channel: "deliveryClub",
            processed: "22.11.22 12:43",
            name: "Константин",
            phone: "+7(999)1230055",
            amount: "2 555",
            deliveryTime: "22.11.22 13:30",
            city: "Санкт-Петербург",
            address: "пр-кт Энергетиков, д. 1, кв. 321",
            courier: "",
            client_feedback: "positive"
        },
        {
            id: 5,
            status: "delivered",
            statusOfPayment: "online",
            isPayed: true,
            brand: "dostoevsky",
            preOrder: true,
            orderNumber: "9384763",
            channel: "web",
            processed: "23.11.22 08:25",
            name: "Василиса",
            phone: "+7(995)1230095",
            amount: "1 999",
            deliveryTime: "23.11.22 09:30",
            city: "Новосибирск",
            address: "пр-кт Ленина, д. 1, кв. 1",
            courier: "Иванов С.",
            client_feedback: "negative"
        }
    ]
};

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {}
});

export default tableSlice.reducer;

export const {} = tableSlice.actions;
