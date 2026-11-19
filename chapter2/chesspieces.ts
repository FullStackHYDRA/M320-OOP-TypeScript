type Kind = "K" | "Q" | "R" | "B" | "N" | "P";
type Colour = "black" | "white";
type Column = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class ChessPiece {
    kind: Kind;
    colour: Colour;
    column: Column;
    row: Row;

    constructor(kind: Kind, colour: Colour, column: Column, row: Row) {
        this.kind = kind;
        this.colour = colour;
        this.column = column;
        this.row = row;
    }

    private getKindName(): string {
        switch (this.kind) {
            case "K": return "King";
            case "Q": return "Queen";
            case "R": return "Rook";
            case "B": return "Bishop";
            case "N": return "Knight";
            case "P": return "Pawn";
        }

    }

    describe(): string {
        return `${this.colour} ${this.getKindName()} at ${this.column}${this.row}`;
    }

}

const pieces: ChessPiece[] = [
    new ChessPiece("K", "white", "D", 1),
    new ChessPiece("Q", "black", "E", 8),
    new ChessPiece("R", "white", "A", 1),
    new ChessPiece("B", "black", "C", 8),
    new ChessPiece("N", "white", "G", 1),
    new ChessPiece("P", "black", "D", 7)
];

for (const piece of pieces) {
    console.log(piece.describe());
}