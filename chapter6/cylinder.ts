import { Circle } from "./circle.ts";

export class Cylinder extends Circle {

    private Height: number;


    constructor(x: number, y: number, r: number, h: number, name: string) {
        super(x, y, r, name);
        this.Height = h;
    }

    public get height(): number {
        return this.Height;
    }

    public surface(): number {

        return 2 * Math.PI * (this.radius + this.Height);
    }

    public volume(): number {

        return this.area() * this.Height;
    }

    public override describe(): string {
        return `${super.describe()} and Hight ${this.Height}`;
    }
}

const cyl = new Cylinder(0, 0, 3, 10, "Cylinder 1");

console.log("Name:", cyl.name);
console.log("Center:", cyl.x, cyl.y);
console.log("Radius:", cyl.radius);
console.log("Area A_circle:", cyl.area().toFixed(2));

console.log("Height (expected 10):", cyl.height);
console.log("Surface Area (Formula from Task):", cyl.surface().toFixed(2));
console.log("Volume V (expected ~282.74):", cyl.volume().toFixed(2));
console.log("Description: ", cyl.describe());