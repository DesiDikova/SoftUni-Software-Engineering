function paintingEggs(input) {

    let eggSize = input[0]; //размер яйца
    let eggColor = input[1]; //цвят на яйцата
    let numberOfBatches = Number(input[2]); //брой партиди с яйца

    let priceBatchesEggs = 0; //цена на партида яйца
    let costs = 0; //производствени разходи
    let income = 0; //приходи

    switch(eggSize) { //цена на броя партиди яйца, според размер и цвета на боята
        case "Large": 
            if(eggColor === "Red") {
                priceBatchesEggs = numberOfBatches * 16;
            } else if(eggColor === "Green") {
                priceBatchesEggs = numberOfBatches * 12;
            } else if(eggColor === "Yellow") {
                priceBatchesEggs = numberOfBatches * 9;
            }
        break;
        case "Medium": 
            if(eggColor === "Red") {
                priceBatchesEggs = numberOfBatches * 13;
            } else if(eggColor === "Green") {
                priceBatchesEggs = numberOfBatches * 9;
            } else if(eggColor === "Yellow") {
                priceBatchesEggs = numberOfBatches * 7;
            }
        break;
        case "Small": 
            if(eggColor === "Red") {
                priceBatchesEggs = numberOfBatches * 9;
            } else if(eggColor === "Green") {
                priceBatchesEggs = numberOfBatches * 8;
            } else if(eggColor === "Yellow") {
                priceBatchesEggs = numberOfBatches * 5;
            }
        break;
    }
    costs = priceBatchesEggs * 0.35;
    income = priceBatchesEggs - costs;
    console.log(`${income.toFixed(2)} leva.`);
}

paintingEggs(["Large", "Red", "7"]);
