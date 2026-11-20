abstract class Statistics {
    private ns: number[] = [];
    public add(x: number) {
        this.ns.push(x);
    }
    public addAll(xs: number[]) {
        this.ns.push(...xs);
    }
}