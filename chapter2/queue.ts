class Queue {
    queue: string[] = [];
    maxLength: number;

    constructor(maxLength: number) {
        this.maxLength = maxLength;
    }

    enter(item: string): number | undefined {
        if (this.queue.length >= this.maxLength) {
            return undefined;
        }
        return this.queue.unshift(item);
    }

    exit(): string | undefined {
        return this.queue.pop();
    }

    size(): number {
        return this.queue.length;
    }
}

// Testing the Que Code

const waitingLine = new Queue(5);

console.log("--- 1. Refil the queue (Max: 5) ---");
const people = ["Anna", "Christina", "Claudia", "Petra", "Elena", "MiniG"];

for (const person of people) {
    const position = waitingLine.enter(person);
    if (position !== undefined) {
        console.log(`${person} placed in position ${position} (size waiting Line: ${waitingLine.size()})`);
    } else {
        console.log(`${person} refused – Queue is full!`);
    }
}

console.log("\n--- 2. SUDO remove element (FIFO: First In, First Out) ---");
console.log(`Bedient: ${waitingLine.exit()} (Verbleibend: ${waitingLine.size()})`);
console.log(`Bedient: ${waitingLine.exit()} (Verbleibend: ${waitingLine.size()})`);

console.log("\n--- 3. Refil the queue ---");
const morePeople = ["Greta", "Samuel", "Maximillian"];
for (const person of morePeople) {
    const position = waitingLine.enter(person);
    if (position !== undefined) {
        console.log(`${person} placed in position ${position} (size waiting Line: ${waitingLine.size()})`);
    } else {
        console.log(`${person} refused – Queue is full!`);
    }
}