export class Point3D {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly z: number
    ) { }

    public distanceTo(p: Point3D): number {
        const dx = this.x - p.x;
        const dy = this.y - p.y;
        const dz = this.z - p.z;

        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

type TriangleCorner = "A" | "B" | "C";

export class Triangle {

    constructor(
        public readonly a: Point3D,
        public readonly b: Point3D,
        public readonly c: Point3D
    ) { }

    private getPoint(corner: TriangleCorner): Point3D {
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

export class Sphere {
    constructor(
        public readonly m: Point3D,
        private r: number
    ) { }

    public scale(s: number): void {
        if (s <= 0) {
            throw new Error("The Scale must be greater than 0 köbi!");
        }
        this.r *= s;
    }

    public get volume(): number {
        return (4 / 3) * Math.PI * (this.r ** 3);
    }

    public get surfaceArea(): number {
        return 4 * Math.PI * (this.r ** 2);
    }
}