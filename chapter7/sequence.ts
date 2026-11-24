export abstract class Sequence {

    protected items: string[] = [];

    public size(): number {
        return this.items.length;
    }

    public add(value: string): void {
        this.items.push(value);
    }

    public abstract get(): string;
}

export class Queue extends Sequence {
    public override get(): string {
        const item = this.items.shift();
        if (item === undefined) {
            throw new Error("Queue ist leer.");
        }
        return item;
    }
}

export class Stack extends Sequence {
    public override get(): string {
        const item = this.items.pop();
        if (item === undefined) {
            throw new Error("Stack ist leer.");
        }
        return item;
    }
}