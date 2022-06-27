function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositInMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let amountEndPeriod = depositSum + depositInMonths * ((depositSum * annualInterestRate/100) / 12);

    console.log(amountEndPeriod);
}

depositCalculator(["200", "3", "5.7"])