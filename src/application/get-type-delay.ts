export function getTypeDelay(time: string): string {
    let dateNow = new Date();
    let delaySmall = 3 * 60 * 1000; // delay * second * millisecond
    let delayBig = 15 * 60 * 1000; // delay * second * millisecond

    //const [day, mounth, year, hour, minute] = time.split(".").join(" ").split(":").join(" ").split(" ");

    const date = new Date(Date.parse(time));
    const day = date.getDate();
    const mounth = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const objDateOrder = new Date(Number(`20${year}`), Number(`${mounth}`), Number(day), Number(hour), Number(minute));

    const different = Number(Date.parse(String(dateNow))) - Number(Date.parse(String(objDateOrder)));
    if (different >= delaySmall && different <= delayBig) {
        return "delay3";
    } else if (different >= delayBig) {
        return "delay15";
    } else {
        return "noDelay";
    }
}
