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

    public pointsFor(rank: number): number {
        const pointsTable = this.system === "FIA" ? this.fiaPoints : this.fisPoints;
        if (rank >= 1 && rank <= pointsTable.length) {
            return pointsTable[rank - 1];
        }
        return 0;
    }
};

console.log("--- Testing FIA (Formel 1) ---");
const fia = new RacePoints("FIA");
console.log("Platz 1 (erwartet 25):", fia.pointsFor(1));
console.log("Platz 5 (erwartet 10):", fia.pointsFor(5));
console.log("Platz 10 (erwartet 1):", fia.pointsFor(10));
console.log("Platz 11 (erwartet 0):", fia.pointsFor(11));

console.log("\n--- Testing FIS (Ski Alpin) ---");
const fis = new RacePoints("FIS");
console.log("Platz 1 (erwartet 100):", fis.pointsFor(1));
console.log("Platz 15 (erwartet 16):", fis.pointsFor(15));
console.log("Platz 30 (erwartet 1):", fis.pointsFor(30));
console.log("Platz 31 (erwartet 0):", fis.pointsFor(31));
console.log("Platz 0 (erwartet 0):", fis.pointsFor(0));