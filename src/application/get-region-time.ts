export function getRegionTime(time: string): string {
    const [day, mounth, year, hour, minute] = time.split(".").join(" ").split(":").join(" ").split(" ");
    const objDate = new Date(Number(`20${year}`), Number(`${mounth}`) - 1, Number(day), Number(hour), Number(minute));

    objDate.setHours(objDate.getHours() + 3);

    const [yearRes, mounthRes, stringRes] = objDate.toJSON().toString().split("-");

    const getHour = () => {
        let hour = objDate.getHours();
        if (hour < 10) return `0${hour}`;
        return `${hour}`;
    };

    const [dateandHour, minuteRes] = stringRes.split(":");
    const [dateRes] = dateandHour.split("T");

    return `${dateRes}.${mounthRes}.${yearRes.slice(2)} ${getHour()}:${minuteRes}`;
}
