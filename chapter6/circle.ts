import { NamedPoint2D } from "./NamedPoint2Dimension.ts";

export class Circle extends NamedPoint2D {
    private Radius: number;

    constructor(x: number, y: number, r: number, name: string) {
        super(x, y, name);
        this.Radius = r;
    }

    public get radius(): number {
        return this.Radius;
    }

    public diameter(): number {
        return 2 * this.Radius;
    }

    public circumference(): number {
        return 2 * Math.PI * this.Radius;
    }

    public area(): number {
        return Math.PI * (this.Radius ** 2);
    }

    public override describe(): string {
        return `${super.describe()} with Radius ${this.Radius}`;
    }
}

const c1 = new Circle(2, 3, 5, "Circle 1");
const c2 = new Circle(5, 7, 10, "Circle 2");

console.log("Name:", c1.name);                    // "Circle 1"
console.log("Center: ", c1.x, c1.y);          // 2, 3
console.log("Describtion: ", c1.describe());      // "Circle 1 (2, 3) with Radius 5"
console.log("Distance to center: ", c1.distanceTo(c2)); // 5

console.log("Radius (expected 5):", c1.radius);
console.log("Duiameter (expected 10):", c1.diameter());
console.log("Circumference (expected ~31.42):", c1.circumference().toFixed(2));
console.log("Area (expected ~78.54):", c1.area().toFixed(2));