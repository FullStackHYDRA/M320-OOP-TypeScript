export class Weapon {
    readonly description: string;
    readonly damage: number;
    readonly accuracy: number;

    constructor(description: string, damage: number, accuracy: number) {
        this.description = description;
        this.damage = damage;
        this.accuracy = accuracy;
    }

    get effect(): number {

        return (this.damage / 100) * (this.accuracy / 100) * 100;
    }
}

const sword = new Weapon("longsword", 80, 75);
console.log(`${sword.description}: damage = ${sword.damage}%, accuracy = ${sword.accuracy}%, effect = ${sword.effect}%`);