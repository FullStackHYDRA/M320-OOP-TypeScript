import { Point2D } from "./point-2d.ts";

type TriangleCorner = "A" | "B" | "C";

class Triangle {

    constructor(
        public readonly a: Point2D,
        public readonly b: Point2D,
        public readonly c: Point2D
    ) { }


    private getPoint(corner: TriangleCorner): Point2D {
        switch (corner) {
            case "A": return this.a;
            case "B": return this.b;
            case "C": return this.c;
        }
    }


    public sideLength(p: TriangleCorner, q: TriangleCorner): number {
        const pointP = this.getPoint(p);
        const pointQ = this.getPoint(q);

        return pointP.distanceTo(pointQ);
    }


    public get circumference(): number {
        return (
            this.sideLength("A", "B") +
            this.sideLength("B", "C") +
            this.sideLength("C", "A")
        );
    }
}

const pA = new Point2D(0, 0);
const pB = new Point2D(3, 0);
const pC = new Point2D(3, 4);

const triangle = new Triangle(pA, pB, pC);

console.log("Side AB (expected 3):", triangle.sideLength("A", "B"));
console.log("Side BC (expected 4):", triangle.sideLength("B", "C"));
console.log("Side CA (expected 5):", triangle.sideLength("C", "A"));
console.log("Side BA (expected 3):", triangle.sideLength("B", "A"));
console.log("Circumference (expected 12):", triangle.circumference);