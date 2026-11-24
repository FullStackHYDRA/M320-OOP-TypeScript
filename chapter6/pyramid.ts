import { NamedPoint2D } from "./NamedPoint2Dimension.ts";
import { Rectangle } from "./rectangle.ts";

export class Pyramid extends Rectangle {
    private Height: number;

    constructor(a: NamedPoint2D, c: NamedPoint2D, h: number) {
        super(a, c);
        this.Height = h;
    }

    public get height(): number {
        return this.Height;
    }

    public volume(): number {
        return (1 / 3) * this.AB * this.BC * this.Height;
    }
}