class BankAccount {
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

    execute(t: Transaction): void {
        if (t.amount <= 0) {
            console.log(`Transaction declined: amount (CHF ${t.amount.toFixed(2)}) must be positiv.`);
            return;
        }

        if (this.balance >= t.amount) {
            this.withdraw(t.amount);
            t.account.deposit(t.amount);
            console.log(
                `Transaction succeded: CHF ${t.amount.toFixed(2)} of ${this.holder} (${this.iban}) to ${t.account.holder} (${t.account.iban}) überwiesen.`
            );
        } else {
            console.log(
                `Transaction declined: amount more than actually  ${this.iban} (${this.holder}) has to transferd of CHF ${t.amount.toFixed(2)}.`
            );
        }
    }

    show(): string {
        return `Owner or holder: ${this.holder} | IBAN: ${this.iban} | Kontostand: CHF ${this.balance.toFixed(2)}`;
    }
}

class Transaction {
    account: BankAccount;
    amount: number;

    constructor(account: BankAccount, amount: number) {
        this.account = account;
        this.amount = amount;
    }
}

const accounts1 = new BankAccount("CH93 0076 2011 6238 5295 7", "Anna Meier");
const accounts2 = new BankAccount("CH56 0483 5012 3456 7800 9", "Lukas Keller");
const accounts3 = new BankAccount("CH12 0023 0000 9876 5432 1", "Mia Weber");

accounts1.deposit(1000);
accounts2.deposit(400);
accounts3.deposit(150);

console.log("--- Ausgangslage ---");
console.log(accounts1.show());
console.log(accounts2.show());
console.log(accounts3.show());

console.log("\n--- Transaction 1 (Anna -> Lukas: CHF 250) ---");
const t1 = new Transaction(accounts2, 250);
accounts1.execute(t1);
console.log(accounts1.show());
console.log(accounts2.show());

console.log("\n--- Transaction 2 (Lukas -> Mia: CHF 500) ---");
const t2 = new Transaction(accounts3, 500);
accounts2.execute(t2);
console.log(accounts2.show());
console.log(accounts3.show());

console.log("\n--- Transaction 3 (Mia -> Anna: CHF 1000) ---");
const t3 = new Transaction(accounts1, 1000);
accounts3.execute(t3);
console.log(accounts3.show());
console.log(accounts1.show());