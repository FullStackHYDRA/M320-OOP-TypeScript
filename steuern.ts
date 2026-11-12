abstract class Tax {
    abstract calculate(x: number): number;

    static deduce(taxes: Tax[], amount: number): number {
        let remaining = amount;
        for (const tax of taxes) {
            remaining -= tax.calculate(remaining);
        }
        return remaining;
    }
}

class FlatTax extends Tax {
    constructor(private readonly amount: number) {
        super();
    }

    calculate(_x: number): number {
        return this.amount;
    }
}

class ProportionalTax extends Tax {
    constructor(private readonly percent: number) {
        super();
    }

    calculate(x: number): number {
        return x * (this.percent / 100);
    }
}