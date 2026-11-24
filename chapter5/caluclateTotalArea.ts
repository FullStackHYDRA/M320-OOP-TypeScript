type Kind = "circle" | "square" | "rectangle";

interface Shape {
    readonly kind: Kind;
    readonly area: number;
    describe(): string;
}

class Circle implements Shape {
    public readonly kind: Kind = "circle";

    constructor(private readonly r: number) { }

    public get area(): number {
        return Math.PI * (this.r ** 2);
    }

    public describe(): string {
        return `r=${this.r}`;
    }
}

class Square implements Shape {
    public readonly kind: Kind = "square";

    constructor(private readonly s: number) { }

    public get area(): number {
        return this.s ** 2;
    }

    public describe(): string {
        return `s=${this.s}`;
    }
}

class Rectangle implements Shape {
    public readonly kind: Kind = "rectangle";

    constructor(
        private readonly w: number,
        private readonly h: number,
    ) { }

    public get area(): number {
        return this.w * this.h;
    }

    public describe(): string {
        return `w=${this.w},h=${this.h}`;
    }
}

// ==========================================
// Testsing Functions
// ==========================================

const c = new Circle(3.0);
const s = new Square(5.0);
const r = new Rectangle(3.0, 4.0);

function calculateTotalArea(shapes: Shape[]): number {
    let totalArea = 0.0;
    for (const shape of shapes) {
        console.log(
            `The ${shape.kind} ${shape.describe()} has an area of ${shape.area}.`,
        );
        totalArea += shape.area;
    }
    return totalArea;
}

const total = calculateTotalArea([c, s, r]);
console.log(`The total area is ${total}.`);