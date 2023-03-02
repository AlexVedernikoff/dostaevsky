import { InputValue, InputValueString } from "../models";

const orderList: InputValueString[] = [
    { label: "Принят", value: "accepted" },
    { label: "На кухне", value: "on_kitchen" },
    { label: "Готовится", value: "cooking" },
    { label: "Готов", value: "cooked" },
    { label: "Собирается", value: "packaging" },
    { label: "В пути", value: "delivering" },
    { label: "Доставлен", value: "delivered" },
    { label: "Отменен", value: "canceled" }
];
const cityList: InputValue[] = [
    { label: "Санк-Петербург", value: 1 },
    { label: "Москва", value: 2 },
    { label: "Сочи", value: 3 },
    { label: "Краснодар", value: 4 },
    { label: "Новосибирск", value: 5 }
];
const productionList: InputValue[] = [
    { label: "Офис", value: 1 },
    { label: "Дом", value: 2 }
];

// const brandList: InputValue[] = [         --> фиксим баг 24
//     { label: "Пироги домой", value: 1 },
//     { label: "Достаевский", value: 2 }
// ];

const brandList: InputValueString[] = [
    { label: "Пироги домой", value: "dostaevsky" },
    { label: "Достаевский", value: "pirogidomoy" }
];

const paymentTypeList: InputValueString[] = [
    { label: "Наличные", value: "cash" },
    { label: "Онлайн", value: "online" },
    { label: "М/терминал", value: "mobile_terminal" },
    { label: "Без оплаты", value: "no_pay" }
];

const sourceList: InputValueString[] = [
    { label: "Android", value: "android" },
    { label: "Сайт", value: "web" },
    { label: "Delivery club", value: "delivery_club" },
    { label: "Call-центр", value: "phone" },
    { label: "iOS", value: "ios" }
];

const stockList: InputValue[] = [
    { label: "3 за 999 р.", value: 1 },
    { label: "2 smart-пиццы за 699", value: 2 },
    { label: "2 вока за 499", value: 2 },
    { label: "Подарок при заказе из приложения МСКч", value: 2 }
];

const courierNameList: InputValue[] = [
    { label: "Иванов Иван Иванович", value: 1 },
    { label: "Иванов Петр Петрович", value: 2 },
    { label: "Сидоров Иван Петрович", value: 3 },
    { label: "Петров Иван Иванович", value: 4 },
    { label: "Иванов Иван Петрович", value: 5 }
];

const typeDeliverList: InputValue[] = [
    { label: "Доставка", value: 1 },
    { label: "Самовывоз", value: 2 }
];
const managerNameList: InputValue[] = [
    { label: "2 СПБ Иванов Иван Иванович", value: 1 },
    { label: "1 МСК Иванов Иван Иванович", value: 2 },
    { label: "Иванов Иван Иванович", value: 3 }
];

// const clientFeedbackList: InputValue[] = [   --> фиксим баг 28
//     { label: "Положительный", value: 1 },
//     { label: "Отрицательный", value: 2 }
// ];

const clientFeedbackList: InputValueString[] = [
    { label: "Положительный", value: "positive" },
    { label: "Отрицательный", value: "negative" }
];

const claimTypeList: InputValue[] = [
    { label: "Нет вины компании", value: 1 },
    { label: "Ошибка при оформлении заказа", value: 2 },
    { label: "Вкусовые качества продукции", value: 3 },
    { label: "Жалоба на КЦ", value: 4 },
    { label: "Жалоба на курьера", value: 5 },
    { label: "Перепутали позиции", value: 6 },
    { label: "Не довезли позицию", value: 7 },
    { label: "Доставили раньше времени", value: 8 },
    { label: "Опоздание доставки", value: 9 }
];

const productList: InputValue[] = [
    { label: "Осетинский пирог с говядиной", value: 1 },
    { label: "Пирог карамельно-яблочный", value: 2 },
    { label: "Пицца «Мехико» 24 см", value: 3 },
    { label: "Пицца «Техас» 24 см", value: 4 },
    { label: "Ролл «Карамельная Филадельфия»", value: 5 }
];

const typeSelect = {
    ALL: { label: "Выбрать все", value: 0 },
    RESET: { label: "Снять выделение", value: -1 }
};

export const data = {
    orderList,
    cityList,
    productionList,
    brandList,
    paymentTypeList,
    sourceList,
    courierNameList,
    typeDeliverList,
    managerNameList,
    clientFeedbackList,
    stockList,
    productList,
    claimTypeList,
    typeSelect
};
