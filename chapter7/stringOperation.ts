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

export class Trimmer extends StringOperation {
    public override perform(s: string): string {
        return s.trim();
    }
}

export class Multiplier extends StringOperation {
    constructor(private readonly count: number) {
        super();
    }

    public override perform(s: string): string {
        return s.repeat(this.count);
    }
}

export class LowerCaser extends StringOperation {
    public override perform(s: string): string {
        return s.toLowerCase();
    }
}

export class UpperCaser extends StringOperation {
    public override perform(s: string): string {
        return s.toUpperCase();
    }
}

export class Reverser extends StringOperation {
    public override perform(s: string): string {

        const stack = new Stack();
        for (const char of s) {
            stack.add(char);
        }

        let reversed = "";
        while (stack.size() > 0) {
            reversed += stack.get();
        }
        return reversed;

    }
}

export class Replacer extends StringOperation {
    constructor(
        private readonly searchValue: string,
        private readonly replaceValue: string,
    ) {
        super();
    }

    public override perform(s: string): string {

        return s.replaceAll(this.searchValue, this.replaceValue);
    }
}

export class Suffixer extends StringOperation {
    constructor(private readonly suffix: string) {
        super();
    }

    public override perform(s: string): string {
        return s + this.suffix;
    }
}

export class Prefixer extends StringOperation {
    constructor(private readonly prefix: string) {
        super();
    }

    public override perform(s: string): string {
        return this.prefix + s;
    }
}