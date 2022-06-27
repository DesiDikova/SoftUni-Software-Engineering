function familyTrip(input) {

    let budget = Number(input[0]); //бюджет
    let numberNights = Number(input[1]); //брой нощувки 
    let priceNight = Number(input[2]); //цена за нощувка
    let percentageForCosts = Number(input[3]); //процент за допълнителни разходи

    let finishpriceNight = 0; //цена на всички нощувките за целия престой
    let sumForCosts = 0; //сума за допълнителни разходи
    let finishSum = 0; //крайна сума за почивката

    if(numberNights > 7) { //при нощувки повече от 7:
        priceNight *= 0.95 //цената за нощувка се намалява с 5%
        finishpriceNight = numberNights * priceNight;
    } else {
        finishpriceNight = numberNights * priceNight; //ако нощувките са по - малко от 7: няма промяна в цената за нощувка
    }

    sumForCosts = budget * percentageForCosts / 100;
    finishSum = finishpriceNight + sumForCosts;

    let diff = Math.abs(budget - finishSum);

    if(finishSum <= budget) { //ако сумата е достатъчна да се отпечатат останалите пари след почивката
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`)
    } else { //в противен случай да се отпечатат необходимите пари
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}

familyTrip(["500", "7", "66", "15"]);