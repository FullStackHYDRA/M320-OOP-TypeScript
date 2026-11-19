import { Weapon } from "./weapon.ts";

export class Warrior {
    name: string;
    weapon: Weapon;
    health: number;
    strength: number;
    dexterity: number;

    constructor(name: string, weapon: Weapon, health: number, strength: number, dexterity: number) {
        this.name = name;
        this.weapon = weapon;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
    }

    attack(opponent: Warrior): void {
        const hitChance: number = Math.random() * (this.dexterity / 100);

        if (hitChance > 0.5) {
            const damage: number = (this.weapon.effect / 100) * this.strength;

            console.log(`${this.name} hits ${opponent.name} with ${this.weapon.description} for ${damage.toFixed(1)} dmg!`);
            const isDead: boolean = opponent.suffer(damage);

            if (isDead) {
                console.log(`${opponent.name} wurde besiegt!`);
            }
        } else {
            console.log(`${this.name} verfehlt ${opponent.name}!`);
        }
    }

    suffer(damage: number): boolean {
        this.health -= damage;
        this.strength -= damage / 10;
        this.dexterity -= damage / 10;

        if (this.strength < 0) this.strength = 0;
        if (this.dexterity < 0) this.dexterity = 0;

        return this.health <= 0;
    }
}

const sword = new Weapon("Longsword", 80, 90);
const axe = new Weapon("Fancy looking Axe", 95, 70);

const aragorn = new Warrior("Aragorn", sword, 100, 85, 95);
const gimli = new Warrior("Gimly", axe, 100, 95, 80);

aragorn.attack(gimli);
gimli.attack(aragorn);