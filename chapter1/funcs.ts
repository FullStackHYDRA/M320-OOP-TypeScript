function displayPretty(price: number, granularity: number, currency: string): string {
    const rounded: number = Math.round((price * 1.0) / granularity) / (1.0 / granularity);
    const result: string = `${currency} ${rounded}`;
    return result;
}

function formatTime(seconds: number): string {
    let remainder: number = seconds;
    const hours: number = remainder / 3600;
    remainder %= 3600;
    const minutes: number = remainder / 60;
    remainder %= 60;
    let text: string = "";
    text = `${hours.toFixed(0)}:`;
    text += `${minutes.toFixed(0)}'`;
    text += `${remainder}"`;
    return text;
}