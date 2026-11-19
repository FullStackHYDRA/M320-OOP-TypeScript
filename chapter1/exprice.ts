const TOTAL_FIELDS: number = 64;
const GRAIN_WEIGHT_GRAMS: number = 0.025;
let grainsOnField: number = 1;
let totalGrains: number = 0;

for (let field: number = 1; field <= TOTAL_FIELDS; field++) {
    totalGrains += grainsOnField;
    console.log(`${field}. +${grainsOnField} (total: ${totalGrains})`);


    grainsOnField *= 2;
}

let totalWeightKg: number = (totalGrains * GRAIN_WEIGHT_GRAMS) / 1000;
console.log(`\nGesamtgewicht: ${totalWeightKg} kg (ca. ${(totalWeightKg / 1000).toFixed(0)} Tonnen)`);