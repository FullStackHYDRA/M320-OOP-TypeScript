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