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

const center = new Point2D(2, 3);
const circle = new Circle(center, 10);

console.log("--- Original Circle (r = 10) ---");
console.log("Circumference (expected ~62.83):", circle.circumference.toFixed(2));
console.log("Area (expected ~314.16):", circle.area.toFixed(2));

console.log("\n--- Circle reduced by factor of 0.5 (new r = 5) ---");
circle.scale(0.5);
console.log("Circumference (expected ~31.42):", circle.circumference.toFixed(2));
console.log("Area (expected ~78.54):", circle.area.toFixed(2));

console.log("\n--- Circle expand by factor 3 (neuer r = 15) ---");
circle.scale(3);
console.log("Circumference (expected ~94.25):", circle.circumference.toFixed(2));
console.log("Area (expected ~706.86):", circle.area.toFixed(2));