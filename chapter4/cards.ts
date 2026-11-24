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
};

class Deck {
    private cards: Card[] = [];

    private static readonly allSuites: Suite[] = ["Hearts", "Diamonds", "Spades", "Clubs"];
    private static readonly allRanks: Rank[] = [
        "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"
    ];

    constructor(full: boolean) {
        const lowRanks: Rank[] = ["2", "3", "4", "5"];

        for (const suite of Deck.allSuites) {
            for (const rank of Deck.allRanks) {

                if (!full && lowRanks.includes(rank)) {
                    continue;
                }
                this.cards.push(new Card(rank, suite));
            }
        }
    }
    public output(): void {

        for (const suite of Deck.allSuites) {
            const line = this.cards
                .filter((card) => card.suite === suite)
                .map((card) => card.show())
                .join(" ");

            console.log(line);
        }
    }
};