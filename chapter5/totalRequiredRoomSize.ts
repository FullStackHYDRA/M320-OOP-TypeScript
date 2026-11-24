interface Rectangular {
    get width(): number;
    get height(): number;
}

class Rectangles implements Rectangular {
    constructor(
        private readonly _width: number,
        private readonly _height: number,
    ) { }

    public get width(): number {
        return this._width;
    }

    public get height(): number {
        return this._height;
    }
}

class Squares implements Rectangular {
    constructor(private readonly _side: number) { }

    public get width(): number {
        return this._side;
    }

    public get height(): number {
        return this._side;
    }
}

class Circles implements Rectangular {
    constructor(private readonly _radius: number) { }

    public get width(): number {
        return 2 * this._radius;
    }

    public get height(): number {
        return 2 * this._radius;
    }
}

// ==========================================
// Testcode
// ==========================================

function totalRequiredRoomSize(rs: Rectangular[]): number {
    let total = 0.0;
    for (let r of rs) {
        total += r.width * r.height;
    }
    return total;
}

const r1 = new Rectangles(4, 3); // 4 * 3 = 12
const s1 = new Squares(5);       // 5 * 5 = 25
const c1 = new Circles(4);       // Durchmesser = 2 * 4 = 8 -> 8 * 8 = 64

console.log(`total area: ${totalRequiredRoomSize([r1, s1, c1])}`); // 12 + 25 + 64 = 101