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