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