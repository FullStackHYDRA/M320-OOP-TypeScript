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
                console.log(`${opponent.name} defeated!`);
            }
        } else {
            console.log(`${this.name} faild ${opponent.name}!`);
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

class ShieldWarrior extends Warrior {
    shieldBlockPercent: number;
    private readonly initialHealth: number;
    private readonly initialStrength: number;
    private readonly initialDexterity: number;

    constructor(
        name: string,
        weapon: Weapon,
        health: number,
        strength: number,
        dexterity: number,
        shieldBlockPercent: number = 0
    ) {
        super(name, weapon, health, strength, dexterity);
        this.shieldBlockPercent = shieldBlockPercent;
        this.initialHealth = health;
        this.initialStrength = strength;
        this.initialDexterity = dexterity;
    }

    override suffer(damage: number): boolean {
        const blocked = damage * (this.shieldBlockPercent / 100);
        const actualDamage = damage - blocked;

        if (this.shieldBlockPercent > 0) {
            console.log(`   shild ${this.name}s Schild blockt ${blocked.toFixed(1)} Schaden (erlitten: ${actualDamage.toFixed(1)})!`);
        }

        return super.suffer(actualDamage);
    }

    healForNextRound(): void {
        this.health = this.initialHealth;
        this.strength = this.initialStrength;
        this.dexterity = this.initialDexterity;
    }
}

class VampireWarrior extends ShieldWarrior {
    lifestealPercent: number;

    constructor(
        name: string,
        weapon: Weapon,
        health: number,
        strength: number,
        dexterity: number,
        shieldBlockPercent: number,
        lifestealPercent: number
    ) {
        super(name, weapon, health, strength, dexterity, shieldBlockPercent);
        this.lifestealPercent = lifestealPercent;
    }

    override attack(opponent: Warrior): void {
        const opponentHealthBefore = opponent.health;
        super.attack(opponent);

        const actualDealt = opponentHealthBefore - opponent.health;
        if (actualDealt > 0) {
            const healed = actualDealt * (this.lifestealPercent / 100);
            this.health = Math.min(100, this.health + healed);
            console.log(`   vamp ${this.name} drains ${healed.toFixed(1)} HP to (current HP: ${this.health.toFixed(1)})!`);
        }
    }
}

class ArenaFight {
    constructor(private p1: ShieldWarrior, private p2: ShieldWarrior) { }

    fight(): ShieldWarrior {
        let round = 1;
        console.log(`\n fight  ${this.p1.name} vs. ${this.p2.name}`);

        while (this.p1.health > 0 && this.p2.health > 0 && round <= 50) {
            this.p1.attack(this.p2);
            if (this.p2.health <= 0) break;

            this.p2.attack(this.p1);
            round++;
        }

        const winner = this.p1.health >= this.p2.health ? this.p1 : this.p2;
        console.log(`   winner : ${winner.name} (Rest-HP: ${Math.max(0, winner.health).toFixed(1)})`);
        return winner;
    }
}

class KnockoutTournament {
    private participants: ShieldWarrior[];

    constructor(participants: ShieldWarrior[]) {
        this.participants = participants;
    }

    start(): ShieldWarrior {
        let currentRoundParticipants = [...this.participants];
        let stage = 1;

        console.log("==========================================");
        console.log(" Big tournament starting!");
        console.log("==========================================");

        while (currentRoundParticipants.length > 1) {
            console.log(`\n=== tournament round ${stage} (${currentRoundParticipants.length} fighter) ===`);
            const nextRoundWinners: ShieldWarrior[] = [];

            for (let i = 0; i < currentRoundParticipants.length; i += 2) {
                const fighter1 = currentRoundParticipants[i];
                const fighter2 = currentRoundParticipants[i + 1];

                if (!fighter2) {
                    console.log(`🎫 ${fighter1.name} lucky champion!`);
                    nextRoundWinners.push(fighter1);
                    continue;
                }

                const match = new ArenaFight(fighter1, fighter2);
                const winner = match.fight();
                winner.healForNextRound();
                nextRoundWinners.push(winner);
            }

            currentRoundParticipants = nextRoundWinners;
            stage++;
        }

        const champion = currentRoundParticipants[0];
        console.log("\n==========================================");
        console.log(`TURNIER-CHAMPION: ${champion.name}!`);
        console.log("==========================================");
        return champion;
    }
}

const participants: ShieldWarrior[] = [
    new ShieldWarrior("Harry Potter", new Weapon("Lightsaber", 80, 95), 100, 75, 95, 15),
    new ShieldWarrior("Sauron", new Weapon("Mylnirr", 95, 80), 100, 95, 85, 30),
    new VampireWarrior("Graf Dracula", new Weapon("Bloodthurster", 75, 90), 100, 80, 95, 10, 40),
    new ShieldWarrior("Captain America", new Weapon("Vibraniumschild", 70, 95), 100, 80, 90, 45)
];

const tournament = new KnockoutTournament(participants);
tournament.start();

const sword = new Weapon("Longsword", 80, 90);
const axe = new Weapon("Fancy looking Axe", 95, 70);

const aragorn = new Warrior("Aragorn", sword, 100, 85, 95);
const gimli = new Warrior("Gimly", axe, 100, 95, 80);

aragorn.attack(gimli);
gimli.attack(aragorn);