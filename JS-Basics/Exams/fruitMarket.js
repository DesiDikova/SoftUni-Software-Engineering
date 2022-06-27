function fruitMarket(input) {

    let priceStrawberries = Number(input[0]);
    let countBananas = Number(input[1]);
    let countOranges = Number(input[2]);
    let countRaspberries = Number(input[3]);
    let countStrwberries = Number(input[4]);

    let priceOfRaspberries = priceStrawberries / 2;
    let priceOfOranges = priceOfRaspberries * 0.60;
    let priceOfBananas = priceOfRaspberries * 0.20;

    let sumRaspberries = countRaspberries * priceOfRaspberries;
    let sumOranges = countOranges * priceOfOranges;
    let sumBananas = countBananas * priceOfBananas;
    let sumStrwberries = countStrwberries * priceStrawberries;
    
    let totalSum = sumRaspberries + sumOranges + sumBananas + sumStrwberries;

    console.log(totalSum.toFixed(2));

}

fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]);
63.5
3.57
6.35
8.15
2.5
