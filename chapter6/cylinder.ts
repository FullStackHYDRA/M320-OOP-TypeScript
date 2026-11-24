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