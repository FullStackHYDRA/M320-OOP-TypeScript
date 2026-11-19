class QuadaticEquation {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    discriminant(): number {
        return this.b * this.b - 4 * this.a * this.c;
    }

    solve(): number[] {
        const d: number = this.discriminant();

        if (d < 0) {
            return [];
        } else if (d === 0) {
            const x: number = -this.b / (2 * this.a);
            return [x];
        } else {

            const x1: number = (-this.b + Math.sqrt(d)) / (2 * this.a);
            const x2: number = (-this.b - Math.sqrt(d)) / (2 * this.a);
            return [x1, x2];
        }
    }
}


const eqTwoSolutions = new QuadaticEquation(1, -5, 6);
console.log("Fall 1 :", eqTwoSolutions.solve());

const eqOneSolution = new QuadaticEquation(1, -4, 4);
console.log("Fall 2 :  ", eqOneSolution.solve());

const eqNoSolution = new QuadaticEquation(1, 2, 5);
console.log("Fall 3 : ", eqNoSolution.solve());