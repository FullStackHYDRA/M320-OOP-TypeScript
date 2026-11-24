export class Point2D {

    private pointX: number;
    private pointY: number;

    constructor(x: number, y: number) {
        this.pointX = x;
        this.pointY = y;
    }

    public get x(): number {
        return this.pointX;
    }

    public get y(): number {
        return this.pointY;
    }

    public describe(): string {
        return `(${this.pointX}, ${this.pointY})`;
    }

    public distanceTo(other: Point2D): number {
        const dx = this.pointX - other.x;
        const dy = this.pointY - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public describeDistanceTo(other: Point2D): string {
        const d = this.distanceTo(other);
        return `Distance of ${this.describe()} to ${other.describe()} is about ${d.toFixed(2)}.`;
    }
}
const p1 = new Point2D(1, 2);
const p2 = new Point2D(4, 6);

console.log("x-Coordinate of p1:", p1.x);
console.log("y-Coordinate of p1:", p1.y);
console.log("Describtion p1:", p1.describe());
console.log("Distance:", p1.distanceTo(p2));
console.log(p1.describeDistanceTo(p2));