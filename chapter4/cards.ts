type Rank =
    | "Ace" | "2" | "3" | "4" | "5" | "6" | "7"
    | "8" | "9" | "10" | "Jack" | "Queen" | "King";

type Suite = "Hearts" | "Diamonds" | "Spades" | "Clubs";

class Card {

    constructor(
        public readonly rank: Rank,
        public readonly suite: Suite
    ) { }

    public show(): string {
        let symbol = "";

        switch (this.suite) {
            case "Spades": symbol = "\u{2660}"; break; // ♠
            case "Hearts": symbol = "\u{2665}"; break; // ♥
            case "Diamonds": symbol = "\u{2666}"; break; // ♦
            case "Clubs": symbol = "\u{2663}"; break; // ♣
        }

        return `${this.rank}${symbol}`;
    }
}