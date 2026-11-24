import { Point2D } from "./Point2Dimension.ts";
import { NamedPoint2D } from "./NamedPoint2Dimension.ts";

export class Point3D extends NamedPoint2D {
    private pointZ: number;

    constructor(x: number, y: number, z: number, name: string) {
        super(x, y, name);
        this.pointZ = z;
    }

    public get z(): number {
        return this.pointZ;
    }

    public override describe(): string {
        return `${this.name} (${this.x}, ${this.y}, ${this.pointZ})`;
    }

    public override distanceTo(other: Point2D): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;

        if (other instanceof Point3D) {
            const dz = this.pointZ - other.z;
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        }

        return Math.sqrt(dx * dx + dy * dy);
    }

    public override describeDistanceTo(other: Point2D): string {
        const d = this.distanceTo(other);

        if (other instanceof Point3D) {
            return `Distance in 3Dimensions of ${this.describe()} to ${other.describe()} is about ${d.toFixed(2)}.`;
        }

        return `Distance in 2Dimensions of ${this.describe()} to ${other.describe()} is about ${d.toFixed(2)}.`;
    }
}

const p3dA = new Point3D(0, 0, 0, "Start position 3D");
const p3dB = new Point3D(2, 3, 6, "End position 3D");
const p2d = new NamedPoint2D(3, 4, "Point A 2D");

console.log("z-Coordinate: ", p3dB.z);
console.log("Describtion: ", p3dB.describe());

console.log("Distance with 3D: ", p3dA.distanceTo(p3dB));
console.log(p3dA.describeDistanceTo(p3dB));

console.log("Distance with only 2D: ", p3dA.distanceTo(p2d));
console.log(p3dA.describeDistanceTo(p2d));