export class Point2D {

    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public describe(): string {
        return `(${this._x}, ${this._y})`;
    }

    public distanceTo(other: Point2D): number {
        const dx = this._x - other.x;
        const dy = this._y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public describeDistanceTo(other: Point2D): string {
        const d = this.distanceTo(other);
        return `Distance of ${this.describe()} to ${other.describe()} is about ${d.toFixed(2)}.`;
    }
}