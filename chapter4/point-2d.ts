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