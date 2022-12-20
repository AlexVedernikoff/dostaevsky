export function getCountFilters(obj: object): number {
    let count = 0;

    const keyObj = Object.keys(obj);

    keyObj.forEach((key) => {
        if (typeof obj[key] === "string" && obj[key].length) {
            count += 1;
        } else if (Array.isArray(obj[key]) && obj[key].length) {
            count += obj[key].length;
        }
    });
    return count;
}
