function shopping(input) {
    let sum = Number(input[0]);
    let countVC = Number(input[1]);
    let countProcessors = Number(input[2]);
    let countRAM = Number(input[3]);

    let countVCPrice = countVC * 250;
    let countProcessorsPrice = countProcessors * (countVCPrice * 0.35);
    let countRAMPrice = countRAM * (countVCPrice * 0.10);
    
    let sumFinish = countVCPrice + countProcessorsPrice + countRAMPrice;
    
    if(countVC > countProcessors) {
        sumFinish = sumFinish - (sumFinish * 0.15);
    }

    let diff = Math.abs(sum - sumFinish).toFixed(2);

    if(sum >= sumFinish){
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`)
    } 
}

shopping(["920.45", "3", "1", "1"]);
