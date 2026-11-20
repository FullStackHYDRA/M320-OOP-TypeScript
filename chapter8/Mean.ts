import { Statistics } from "./Statistics";

class Mean extends Statistics {
    public compute(): number {
        const sum: number = this.numbers.reduce((a: number, b: number) => a + b)
        return sum / this.numbers.length;
    }
}