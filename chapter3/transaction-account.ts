class TransactionAccount {
    private balance: number = 0.0;
    private readonly iban: string;
    private holder: string;

    constructor(iban: string, holder: string) {
        this.iban = iban;
        this.holder = holder;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            return;
        }
        if (this.balance - amount >= 0) {
            this.balance -= amount;
        }
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            return;
        }
        this.balance += amount;
    }

    show(): string {
        return `Holder or Owner: ${this.holder} | IBAN: ${this.iban} | Balance: CHF ${this.balance.toFixed(2)}`;
    }
}

const account1 = new TransactionAccount("CH93 0076 2011 6238 5295 7", "Anna Zweifel");
const account2 = new TransactionAccount("CH56 0483 5012 3456 7800 9", "Maximilian Muff");
const account3 = new TransactionAccount("CH12 0023 0000 9876 5432 1", "Anisa Weber");


account1.deposit(1500);
account1.withdraw(350.50);
account1.withdraw(2000);

account2.deposit(500);
account2.deposit(-100);
account2.withdraw(-50);

account3.deposit(250.75);
account3.withdraw(250.75);

console.log(account1.show());
console.log(account2.show());
console.log(account3.show());