export function getFormatTimeFromIso8601(time: string): string {
    if (time.length === 0) return;

    const date = time.split("T");
    const [yaer, day, month] = date[0].split("-");

    const [hours, minutes] = date[1].split(":");
    return `${day}.${month}.${yaer.slice(2)} ${hours}:${minutes}`;
}
