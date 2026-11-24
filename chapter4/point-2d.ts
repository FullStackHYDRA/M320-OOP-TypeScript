export class Point2D {

    constructor(
        public readonly x: number,
        public readonly y: number
    ) { }

    public distanceTo(p: Point2D): number {
        const dx = this.x - p.x;
        const dy = this.y - p.y;

        return Math.sqrt(dx * dx + dy * dy);

    }
}

const p1 = new Point2D(0, 0);
const p2 = new Point2D(3, 4);
const p3 = new Point2D(-2, 4);

console.log("Distance p1 zu p2 (expected 5):", p1.distanceTo(p2));
console.log("Distance p2 zu p1 (expected 5):", p2.distanceTo(p1));
console.log("Distance p2 zu p3 (expected 5):", p2.distanceTo(p3));
console.log("Distance p1 zu p1 (expected 0):", p1.distanceTo(p1));