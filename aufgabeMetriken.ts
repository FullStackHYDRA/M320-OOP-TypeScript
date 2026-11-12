abstract class Metric {
    constructor(
        protected readonly name: string,
        protected readonly timestamp: number,
    ) { }


    describe(): string {
        return `${this.name}[${this.timestamp}]=${this.valueStr()}`;
    }


    protected abstract valueStr(): string;
}

class Gauge extends Metric {
    constructor(
        private readonly value: number,
        private readonly unit: string,
        name: string,
        timestamp: number,
    ) {
        super(name, timestamp);
    }

    protected valueStr(): string {
        return `${this.value}${this.unit}`;
    }
}

class Info extends Metric {
    constructor(
        private readonly text: string,
        name: string,
        timestamp: number,
    ) {
        super(name, timestamp);
    }

    protected valueStr(): string {
        return this.text;
    }
}

const fileSystemSizeBytes: Metric = new Gauge(
    1e9,
    "bytes",
    "file_system_size_bytes",
    new Date().getTime(),
);
const kernelVersion: Metric = new Info(
    "6.18.54",
    "kernelVersion",
    new Date().getTime(),
);
console.log(fileSystemSizeBytes.describe());
console.log(kernelVersion.describe());