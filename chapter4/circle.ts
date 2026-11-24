import { Point2D } from "./point-2d.ts";

class Circle {

    constructor(
        public readonly m: Point2D,
        private r: number
    ) { }

    public scale(s: number): void {
        if (s <= 0) {
            throw new Error("Scale must be greater than 0 köbi!");
        }
        this.r *= s;
    }

    public get circumference(): number {
        return 2 * Math.PI * this.r;
    }

    public get area(): number {
        return Math.PI * this.r * this.r;
    }
}