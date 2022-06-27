function addBags(input) {

    let priceBags = Number(input[0]);
    let weightBags = Number(input[1]);
    let dayToTravel = Number(input[2]);
    let numBags = Number(input[3]);

    let priceBagsMin = 0;

    if (weightBags < 10){
        priceBagsMin = priceBags * 0.20;
    } else if (weightBags <= 20) {
        priceBagsMin = priceBags * 0.50;
    } else if (weightBags > 20) {
        priceBagsMin = priceBags;
    }
    
    if (dayToTravel < 7) {
        priceBagsMin *= 1.40;
    } else if (dayToTravel <= 30) {
        priceBagsMin *= 1.15;
    } else if (dayToTravel > 30) {
        priceBagsMin *= 1.10;
    }

    console.log(`The total price of bags is: ${(numBags * priceBagsMin).toFixed(2)} lv.`);
}
addBags(["63.80", "23", "3", "1"])
addBags(["25.50", "5", "36", "6"]);






