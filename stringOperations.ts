abstract class StringOperation {
    abstract perform(s: string): string;

    static run(operations: StringOperation[], s: string): string {
        let result = s;
        for (const operation of operations) {
            result = operation.perform(result);
        }
        return result;
    }
}

class Trimmer extends StringOperation {
    perform(s: string): string {
        return s.trim();
    }
}

class Multiplier extends StringOperation {
    constructor(private readonly times: number) {
        super();
    }

    perform(s: string): string {
        return s.repeat(this.times);
    }
}

class LowerCaser extends StringOperation {
    perform(s: string): string {
        return s.toLowerCase();
    }
}

class UpperCaser extends StringOperation {
    perform(s: string): string {
        return s.toUpperCase();
    }
}

class Reverser extends StringOperation {
    perform(s: string): string {
        const stack = new Stack();
        for (const char of s) {
            stack.add(char);
        }
        let result = "";
        while (stack.size() > 0) {
            result += stack.get();
        }
        return result;
    }
}

class Replacer extends StringOperation {
    constructor(
        private readonly pattern: string,
        private readonly replacement: string,
    ) {
        super();
    }

    perform(s: string): string {
        return s.split(this.pattern).join(this.replacement);
    }
}

class Suffixer extends StringOperation {
    constructor(private readonly suffix: string) {
        super();
    }

    perform(s: string): string {
        return s + this.suffix;
    }
}

class Prefixer extends StringOperation {
    constructor(private readonly prefix: string) {
        super();
    }

    perform(s: string): string {
        return this.prefix + s;
    }
}