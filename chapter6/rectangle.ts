import { NamedPoint2D } from "./NamedPoint2Dimension.ts";

export class Rectangle {
    private pointA: NamedPoint2D;
    private pointC: NamedPoint2D;

    constructor(a: NamedPoint2D, c: NamedPoint2D) {
        this.pointA = a;
        this.pointC = c;
    }

    public get A(): NamedPoint2D {
        return this.pointA;
    }

    public get B(): NamedPoint2D {
        return new NamedPoint2D(this.pointA.x, this.pointC.y, "B");
    }

    public get C(): NamedPoint2D {
        return this.pointC;
    }

    public get D(): NamedPoint2D {
        return new NamedPoint2D(this.pointC.x, this.pointA.y, "D");
    }

    public get AB(): number {
        return this.A.distanceTo(this.B);
    }

    public get BC(): number {
        return this.B.distanceTo(this.C);
    }

    public diagonal(): number {
        return Math.sqrt(this.AB ** 2 + this.BC ** 2);

    }

    public circumference(): number {
        return 2 * (this.AB + this.BC);
    }

    public area(): number {
        return this.AB * this.BC;
    }
}