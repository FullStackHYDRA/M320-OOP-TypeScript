export abstract class Tax {

    public abstract calculate(x: number): number;

    public static deduce(taxes: Tax[], amount: number): number {
        let remaining = amount;

        for (const tax of taxes) {
            remaining -= tax.calculate(remaining);
        }

        return remaining;
    }
}

export class FlatTax extends Tax {
    constructor(private readonly flatAmount: number) {
        super();
    }

    public override calculate(_x: number): number {
        return this.flatAmount;
    }
}

export class ProportionalTax extends Tax {
    constructor(private readonly percentage: number) {
        super();
    }

    public override calculate(x: number): number {
        return x * (this.percentage / 100);
    }
}