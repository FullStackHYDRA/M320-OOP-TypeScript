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