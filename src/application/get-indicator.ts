export function getIndicator(obj: object): boolean {
    const arrMainKey = ["number_order", "number_telephone", "status_order", "city", "manufacture", "address"];
    const keyObj = Object.keys(obj);

    const filterArrKey = keyObj.filter((key) => !arrMainKey.includes(key));

    if (filterArrKey.length) return true;

    return false;
}
