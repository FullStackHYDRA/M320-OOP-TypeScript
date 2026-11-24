type PointSystem = "FIS" | "FIA";

class RacePoints {
    private system: PointSystem;

    private readonly fiaPoints: number[] = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
    private readonly fisPoints: number[] = [
        100, 80, 60, 50, 45, 40, 36, 32, 29, 26,
        24, 22, 20, 18, 16, 15, 14, 13, 12, 11,
        10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ];

    constructor(system: PointSystem) {
        this.system = system;
    }

};