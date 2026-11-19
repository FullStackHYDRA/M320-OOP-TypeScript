class Rectangles {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    circumference(): number {
        return 2 * (this.width + this.height);
    }

    area(): number {
        return this.width * this.height;
    }
}

class Squares {
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    circumference(): number {
        return 4 * this.side;
    }

    area(): number {
        return this.side ** 2;
    }
}

class Circles {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    circumference(): number {
        return 2 * Math.PI * this.radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const rects1 = new Rectangles(5, 10);
const rects2 = new Rectangles(3.5, 4);

const squares1 = new Squares(6);
const squares2 = new Squares(2.5);

const circles1 = new Circles(4);
const circles2 = new Circles(7.5);

console.log("--- Rectangles ---");
console.log(`Rectangle 1 (${rects1.width}x${rects1.height}): Scope = ${rects1.circumference()}, Area = ${rects1.area()}`);
console.log(`Rectangle 2 (${rects2.width}x${rects2.height}): Scope = ${rects2.circumference()}, Area = ${rects2.area()}`);

console.log("\n--- Quadrate ---");
console.log(`Quadrat 1 (Side ${squares1.side}): Scope = ${squares1.circumference()}, Area = ${squares1.area()}`);
console.log(`Quadrat 2 (Side ${squares2.side}): Scope = ${squares2.circumference()}, Area = ${squares2.area()}`);

console.log("\n--- Circles ---");
console.log(`Circle 1 (Radius ${circles1.radius}): Scope = ${circles1.circumference().toFixed(2)}, Area = ${circles1.area().toFixed(2)}`);
console.log(`Circle 2 (Radius ${circles2.radius}): Scope = ${circles2.circumference().toFixed(2)}, Area = ${circles2.area().toFixed(2)}`);