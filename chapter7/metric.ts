export abstract class Metric {
    private metricName: string;
    private timeStamp: number;

    constructor(name: string, timestamp: number) {
        this.metricName = name;
        this.timeStamp = timestamp;
    }

    public get name(): string {
        return this.metricName;
    }

    public get timestamp(): number {
        return this.timeStamp;
    }

    public abstract valueStr(): string;

    public describe(): string {
        return `${this.metricName}[${this.timeStamp}]=${this.valueStr()}`;
    }
}

export class Gauge extends Metric {
    private metricValue: number;
    private metricUnit: string;

    constructor(value: number, unit: string, name: string, timestamp: number) {
        super(name, timestamp);
        this.metricValue = value;
        this.metricUnit = unit;
    }

    public get value(): number {
        return this.metricValue;
    }

    public get unit(): string {
        return this.metricUnit;
    }

    public override valueStr(): string {
        return `${this.metricValue}${this.metricUnit}`;
    }
}

export class Info extends Metric {
    private infoText: string;

    constructor(text: string, name: string, timestamp: number) {
        super(name, timestamp);
        this.infoText = text;
    }

    public get text(): string {
        return this.infoText;
    }

    public override valueStr(): string {
        return this.infoText;
    }
}