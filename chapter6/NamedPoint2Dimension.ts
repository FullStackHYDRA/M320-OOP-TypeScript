import { Point2D } from "./Point2Dimension.ts";

export class NamedPoint2D extends Point2D {
    private pointName: string;

    constructor(x: number, y: number, name: string) {
        super(x, y);
        this.pointName = name;
    }

    public get name(): string {
        return this.pointName;
    }

    public override describe(): string {

        return `${this.pointName} ${super.describe()}`;
    }
}