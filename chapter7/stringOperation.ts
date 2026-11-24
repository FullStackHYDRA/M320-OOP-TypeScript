import { Stack } from "./sequence.ts";

export abstract class StringOperation {

    public abstract perform(s: string): string;

    public static run(operations: StringOperation[], s: string): string {
        let result = s;
        for (const op of operations) {
            result = op.perform(result);
        }
        return result;
    }
}