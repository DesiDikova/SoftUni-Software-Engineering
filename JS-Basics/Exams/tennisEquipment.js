function tennisEquipment(input) {

    let priceForOneTennisRacket = Number(input[0]);
    let countTennisRacket = Number(input[1]);
    let countSneakers = Number(input[2]);

    let priceTennisRackets = countTennisRacket * priceForOneTennisRacket;
    let priceForOneSneakers =  (1 / 6) * priceForOneTennisRacket;
    let priceSneakers = countSneakers * priceForOneSneakers;
    let finishPriceForRaketsAndSneakers = priceTennisRackets + priceSneakers;
    let other = (20 / 100) * finishPriceForRaketsAndSneakers;
    let finishPrice = finishPriceForRaketsAndSneakers + other;
    
    console.log(`Price to be paid by Djokovic ${Math.floor(1 / 8 * finishPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(7 / 8 * finishPrice)}`); 
}

tennisEquipment(["386", "7", "4"]);