// Tax rates from KRA
const taxBrackets = [
    { min: 0, max: 24800, rate: 10 },
    { min: 24801, max: 28733, rate: 15 },
    { min: 28734, max: 42440, rate: 20 },
    { min: 42441, max: 57680, rate: 25 },
    { min: 57681, max: Infinity, rate: 30 }
];

// NHIF and NSSF rates
const nhifRate = 0.025; // 2.5%
const nssfRate = 0.06; // 6%

// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    let tax = 0;
    let remainingSalary = grossSalary;

    for (const bracket of taxBrackets) {
        if (remainingSalary <= 0) 
        break;
        const taxableAmountInBracket = Math.min(remainingSalary, bracket.max - bracket.min + 1);
        tax += (taxableAmountInBracket * bracket.rate) / 100;
        remainingSalary -= taxableAmountInBracket;
    }

    return tax;
}

// Function to calculate NHIF Deductions
function calculateNHIF(grossSalary) {
    return Math.min(600, grossSalary * nhifRate);
}

// Function to calculate NSSF Deductions
function calculateNSSF(grossSalary) {
    return Math.min(1800, grossSalary * nssfRate);
}

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return netSalary;
}

// Example of the code in action
const basicSalary = 50000; // Example basic salary
const benefits = 10000; // Example benefits
const netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary:", netSalary);
