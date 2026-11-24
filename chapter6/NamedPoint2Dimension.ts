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

const p1 = new NamedPoint2D(0, 0, "Start position");
const p2 = new NamedPoint2D(3, 4, "End position");

console.log("Name:", p1.name);
console.log("Coordinaten:", p1.x, p1.y);
console.log("Describtion:", p1.describe());


console.log("Distance:", p1.distanceTo(p2));
console.log(p1.describeDistanceTo(p2));