function promptNumer(): number {
    let input: string = prompt("Please enter a number: ")!;
    if (input.trim() === "") {
        return NaN;
    }
    return Number(input);
};

function calculateSum(numbers: number[]): number {
    let sum: number = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
};

function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }
    return calculateSum(numbers) / numbers.length;
};


let numbers: number[] = [];

while (true) {
    let num: number = promptNumer();

    if (Number.isNaN(num)) {
        break;
    }

    numbers.push(num);
};

if (numbers.length > 0) {
    let sum: number = calculateSum(numbers);
    let mean: number = calculateMean(numbers);

    console.log(`Sum: ${sum}`);
    console.log(`Mean: ${mean.toFixed(2)}`);


} else {
    console.log("No numbers were entered Köbi. Please Try again...");
};