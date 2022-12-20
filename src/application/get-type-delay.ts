export function getTypeDelay(time: string): string {
    let dateNow = new Date();

    const [day, mounth, year, hour, minute] = time.split(".").join(" ").split(":").join(" ").split(" ");
    const objDateOrder = new Date(Number(`20${year}`), Number(`${mounth}`) - 1, Number(day), Number(hour), Number(minute));

    const different = Number(Date.parse(String(dateNow))) - Number(Date.parse(String(objDateOrder)));
    if (different >= Number(180000) && different <= Number(900000)) {
        return "delay3";
    } else if (different >= Number(900000)) {
        return "delay15";
    } else {
        return "noDelay";
    }
}
