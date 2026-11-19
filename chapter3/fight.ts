import { Weapon } from "./weapon.ts";
import { Warrior } from "./warrior.ts";

class Fight {
    playerOne: Warrior;
    playerTwo: Warrior;

    constructor(playerOne: Warrior, playerTwo: Warrior) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    fight(): Warrior {
        let round: number = 1;
        console.log(`=== fight STARTS: ${this.playerOne.name} vs. ${this.playerTwo.name} ===`);

        while (this.playerOne.health > 0 && this.playerTwo.health > 0) {
            console.log(`\n--- round ${round} ---`);

            this.playerOne.attack(this.playerTwo);
            console.log(`Status ${this.playerTwo.name}: HP = ${Math.max(0, this.playerTwo.health).toFixed(1)}`);

            if (this.playerTwo.health <= 0) {
                console.log(`\n🏆 ${this.playerOne.name} gewinnt den Kampf!`);
                return this.playerOne;
            }

            this.playerTwo.attack(this.playerOne);
            console.log(`Status ${this.playerOne.name}: HP = ${Math.max(0, this.playerOne.health).toFixed(1)}`);

            if (this.playerOne.health <= 0) {
                console.log(`\n🏆 ${this.playerTwo.name} gewinnt den Kampf!`);
                return this.playerTwo;
            }

            round++;
        }

        return this.playerOne.health > 0 ? this.playerOne : this.playerTwo;
    }
}

const lightsaber = new Weapon("Lichtschwert", 85, 95);
const mjolnir = new Weapon("Thors Hammer", 95, 80);

const harry = new Warrior("Harry Potter", lightsaber, 100, 75, 95);
const sauron = new Warrior("Sauron", mjolnir, 100, 95, 85);

const fight1 = new Fight(harry, sauron);
const winner1 = fight1.fight();
console.log(`winner of fight 1: ${winner1.name} (Rest-HP: ${winner1.health.toFixed(1)})\n`);

const magicStaff = new Weapon("Zauberstab", 80, 90);
const forceChoke = new Weapon("Macht-Würgegriff", 90, 90);

const gandalf = new Warrior("Gandalf", magicStaff, 100, 80, 90);
const vader = new Warrior("Darth Vader", forceChoke, 100, 90, 85);

const fight2 = new Fight(gandalf, vader);
const winner2 = fight2.fight();
console.log(`winner of fight 2: ${winner2.name} (Rest-HP: ${winner2.health.toFixed(1)})`);