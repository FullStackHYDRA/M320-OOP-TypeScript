let capital: number = Number(prompt("Please enter the initial capital: ")!);
let interestRate: number = Number(prompt("Please enter the annual interest rate in percentage%: ")!);
let duration: number = Number(prompt("Please enter the duration in years: ")!);

for (let year: number = 1; year <= duration; year++) {
    let newCapital: number = capital * (1 + (interestRate / 100));
    let interest: number = newCapital - capital;
    console.log(`year ${year}: ${capital.toFixed(2)} + ${interest.toFixed(2)} = ${newCapital.toFixed(2)}`)
    capital = newCapital
};