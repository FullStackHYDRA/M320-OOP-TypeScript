type Rectangle = {
    width: number;
    height: number;
};

type Square = {
    side: number;
};

type Circle = {
    radius: number;
};

type Shape = Rectangle | Square | Circle;

const rect1: Rectangle = { width: 5, height: 10 };
const rect2: Rectangle = { width: 3.5, height: 4 };
const square1: Square = { side: 6 };
const square2: Square = { side: 2.5 };
const circle1: Circle = { radius: 4 };
const circle2: Circle = { radius: 7.5 };

function rectangleCircumference(r: Rectangle): number {
    return 2 * (r.width + r.height);
};

function rectangleArea(r: Rectangle): number {
    return r.width * r.height;
};

function squareCircumference(s: Square): number {
    return 4 * s.side;
};

function squareArea(s: Square): number {
    return s.side ** 2;
};

function circleCircumference(c: Circle): number {
    return 2 * Math.PI * c.radius;
};

function circleArea(c: Circle): number {
    return Math.PI * c.radius ** 2;
};

console.log("--- Rectangles ---");
console.log(`Rectangle 1 (${rect1.width}x${rect1.height}): Scope = ${rectangleCircumference(rect1)} ; Area = ${rectangleArea(rect1)}`);
console.log(`Rectangle 2 (${rect2.width}x${rect2.height}): Scope = ${rectangleCircumference(rect2)} ; Area = ${rectangleArea(rect2)}`);

console.log("\n--- Squares ---");
console.log(`Square 1 (Side ${square1.side}): Scope = ${squareCircumference(square1)} ; Area = ${squareArea(square1)}`);
console.log(`Square 2 (Side ${square2.side}): Scope = ${squareCircumference(square2)} ; Area = ${squareArea(square2)}`);

console.log("\n--- Cricles ---");
console.log(`Cricle 1 (Radius ${circle1.radius}): Scope = ${circleCircumference(circle1).toFixed(2)} ; Area = ${circleArea(circle1).toFixed(2)}`);
console.log(`Cricle 2 (Radius ${circle2.radius}): Scope = ${circleCircumference(circle2).toFixed(2)} ; Area = ${circleArea(circle2).toFixed(2)}`);