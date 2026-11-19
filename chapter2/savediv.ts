function safeDivide(dividend: number, divisior: number): number | string {
    if (Number.isNaN(divisor) || divisor === 0) {
        return "Error: divisor can't be 0 or NaN!";
    }
    return dividend / divisior;
};

function promtValidNumber(message: string): number {
    let num: number;
    do {
        let input: string = prompt(message)!;

        num = input.trim() === "" ? NaN : Number(input);
    } while (Number.isNaN(num));
    return num;
};

let dividend: number = promtValidNumber("Please enter the dividend: ")!;
let divisor: number = promtValidNumber("Please enter the divisor: ")!;

let result: number | string = safeDivide(dividend, divisor);

if (typeof result === "number") {
    console.log(`${dividend} / ${divisor} = ${result}`);
} else {
    console.log(result);
};