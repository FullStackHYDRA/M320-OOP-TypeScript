abstract class Sequence {
    abstract size(): number;
    abstract add(value: string): void;
    abstract get(): string;
}

class Queue extends Sequence {
    private items: string[] = [];

    size(): number {
        return this.items.length;
    }

    add(value: string): void {
        this.items.push(value);
    }

    get(): string {
        const value = this.items.shift();
        if (value === undefined) {
            throw new Error("Queue is empty");
        }
        return value;
    }
}

class Stack extends Sequence {
    private items: string[] = [];

    size(): number {
        return this.items.length;
    }

    add(value: string): void {
        this.items.push(value); // oben drauflegen
    }

    get(): string {
        const value = this.items.pop();
        if (value === undefined) {
            throw new Error("Stack is empty");
        }
        return value;
    }
}

const queue: Sequence = new Queue();
const stack: Sequence = new Stack();

for (const employee of ["Alice", "Bob", "Mallory"]) {
    queue.add(employee);
    stack.add(employee);
}
while (queue.size() > 0) {
    console.log("next in line: " + queue.get());
}
while (stack.size() > 0) {
    console.log("topmost of stack: " + stack.get());
}