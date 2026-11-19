function convertTemperature(temparature: number, fromUnit: string): number {

    if (fromUnit.toUpperCase() === "C") {
        return temparature * 1.8 + 32;
    } else if (fromUnit.toUpperCase() === "F") {
        return (temparature - 32) * (5 / 9);
    } else {
        throw new Error("Wrong Input Köbi! Please only use 'C' for celcius or 'F' for fahrenheit.")
    }
}

let temp: string = prompt("Please enter a temprature: ")!;
let unit: string = prompt("Please enter a temprature unit (F or C): ")!;
let numericTemp: number = Number(temp);
let cleanUnit: string = unit.trim().toUpperCase();
let convertedTemp: number = convertTemperature(numericTemp, cleanUnit);
let targetUnit: string = cleanUnit === "C" ? "F" : "C";

console.log(`${numericTemp}°${cleanUnit} = ${Math.round(convertedTemp * 100) / 100}°${targetUnit}`)