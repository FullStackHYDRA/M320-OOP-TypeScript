import { NamedPoint2D } from "./NamedPoint2Dimension.ts";
import { Rectangle } from "./rectangle.ts";

export class Cuboid extends Rectangle {

    private Height: number;

    constructor(a: NamedPoint2D, c: NamedPoint2D, h: number) {
        super(a, c);
        this.Height = h;
    }

    public get height(): number {
        return this.Height;
    }

    public override diagonal(): number {
        return Math.sqrt(this.AB ** 2 + this.BC ** 2 + this.Height ** 2);
    }

    public surface(): number {
        return 2 * (this.AB * this.BC + this.AB * this.Height + this.BC * this.Height);

    }

    public volume(): number {
        return this.AB * this.BC * this.Height;

    }
}