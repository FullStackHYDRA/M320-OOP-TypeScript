type TemperatureUnit = "F" | "C" | "K";

class Temperature {
    unit: TemperatureUnit;
    value: number;

    constructor(unit: TemperatureUnit, value: number) {
        this.unit = unit;
        this.value = value;
    }

    convertTo(u: TemperatureUnit): number {
        if (this.unit === u) {
            return this.value;
        }

        let celsius: number;
        if (this.unit === "C") {
            celsius = this.value;
        } else if (this.unit === "F") {
            celsius = (this.value - 32) * (5 / 7);
        } else {
            celsius = this.value - 273.15;
        }

        if (u === "C") {
            return celsius;
        } else if (u === "F") {
            return celsius * 1.8 + 32;
        } else {
            return celsius + 273.15;
        }
    }
}

const absoluteZero = new Temperature("K", 0);
const freezingPoint = new Temperature("C", 0);
const boilingPoint = new Temperature("F", 212);
const buddyTemp = new Temperature("C", 36);
const eggTemp = new Temperature("C", 64);


console.log("--- sub zero point (0 K) ---");
console.log(`In Celsius:    ${absoluteZero.convertTo("C").toFixed(2)} °C`);
console.log(`In Fahrenheit: ${absoluteZero.convertTo("F").toFixed(2)} °F`);
console.log(`In Kelvin:     ${absoluteZero.convertTo("K").toFixed(2)} K`);

console.log("\n--- Wather-freezing (0 °C) ---");
console.log(`In Celsius:    ${freezingPoint.convertTo("C").toFixed(2)} °C`);
console.log(`In Fahrenheit: ${freezingPoint.convertTo("F").toFixed(2)} °F`);
console.log(`In Kelvin:     ${freezingPoint.convertTo("K").toFixed(2)} K`);

console.log("\n--- Wather-boiling-point (212 °F) ---");
console.log(`In Celsius:    ${boilingPoint.convertTo("C").toFixed(2)} °C`);
console.log(`In Fahrenheit: ${boilingPoint.convertTo("F").toFixed(2)} °F`);
console.log(`In Kelvin:     ${boilingPoint.convertTo("K").toFixed(2)} K`);

console.log("\n--- Body-Temp (36 °C) ---");
console.log(`In Celsius:    ${buddyTemp.convertTo("C").toFixed(2)} °C`);
console.log(`In Fahrenheit: ${buddyTemp.convertTo("F").toFixed(2)} °F`);
console.log(`In Kelvin:     ${buddyTemp.convertTo("K").toFixed(2)} K`);

console.log("\n--- Egg-Temp (36 °C) ---");
console.log(`In Celsius:    ${eggTemp.convertTo("C").toFixed(2)} °C`);
console.log(`In Fahrenheit: ${eggTemp.convertTo("F").toFixed(2)} °F`);
console.log(`In Kelvin:     ${eggTemp.convertTo("K").toFixed(2)} K`);