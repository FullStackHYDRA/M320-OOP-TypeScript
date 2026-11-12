export { };

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
        this.items.push(value);
    }

    get(): string {
        const value = this.items.pop();
        if (value === undefined) {
            throw new Error("Stack is empty");
        }
        return value;
    }
}

class Mixer extends Sequence {

    private items: string[] = [];
    get(): string {
        if (this.items.length === 0) {
            throw new Error("Mixer is empty");
        }
        const index = Math.floor(Math.random() * this.items.length);
        return this.items.splice(index, 1)[0];
    }
}

const queue: Sequence = new Queue();
const stack: Sequence = new Stack();
const mixer: Sequence = new Mixer();

for (const employee of ["Alice", "Bob", "Mallory", "Hans-Peter", "Köbi"]) {
    queue.add(employee);
    stack.add(employee);
    mixer.add(employee);
}

while (queue.size() > 0) {
    console.log("next in line: " + queue.get());
}

while (stack.size() > 0) {
    console.log("topmost of stack: " + stack.get());
}

while (mixer.size() > 0) {
    console.log("random pick: " + mixer.get());
}