import { Statistics } from "./Statistics.ts";

class Median extends Statistics {
    public compute(): number {
        return this.numbers[Math.floor(this.numbers.length / 2)];
    }
}

const median = new Median();
median.addAll([1, 2, 3, 4, 5, 6, 7]);
console.log(median.compute());