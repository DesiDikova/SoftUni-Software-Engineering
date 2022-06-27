function easterBakery(input) {

    let priceOfFlourForOneKilogram = Number(input[0]); //цена на брашното за 1кг
    let kilogramsFlour = Number(input[1]); //килограми брашно
    let kilogramsSugar = Number(input[2]); //килограми захар
    let numberOfEggShells = Number(input[3]); //брой кори с яйца
    let numberPackagesMaq = Number(input[4]); //брой пакети мая

    let priceForKilogramSugar = priceOfFlourForOneKilogram * 0.75; //цена за един килограм захар
    let priceForOneEggShells = priceOfFlourForOneKilogram * 1.10; //цена за един картон яйца
    let priceForOnePackagesMaq = priceForKilogramSugar * 0.20; //цена за един пакет мая

    let sumFlour = kilogramsFlour * priceOfFlourForOneKilogram; //цена на нужното количество брашно
    let sumSugar = kilogramsSugar * priceForKilogramSugar; //цена на нужното количество захар
    let sumEggs = numberOfEggShells * priceForOneEggShells; //цена на нужното количество кори с яйца
    let sumPackagesMaq = numberPackagesMaq * priceForOnePackagesMaq; //цена на нужното количество пакети мая

    let totalSum = sumFlour + sumSugar + sumEggs + sumPackagesMaq; //нужната сума за закупуване на продуктите

    console.log(totalSum.toFixed(2)); 
}

easterBakery(["50", "10", "3.5", "6", "1"]);