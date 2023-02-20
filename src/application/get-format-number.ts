export function getFormatNumber(number: number): string | null {
    if (!Number.isFinite(number)) return;

    return new Intl.NumberFormat("ru-RU").format(number);
}
