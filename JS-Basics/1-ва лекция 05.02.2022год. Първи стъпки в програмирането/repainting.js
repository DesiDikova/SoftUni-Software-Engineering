function repainting(input) {
    let nailon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hour = Number(input[3]);

    let priceNailon = (nailon + 2) * 1.50;
    let pricePaint = (paint * 1.10) * 14.50;
    let priceThinner = thinner * 5.00

    let sum = priceNailon + pricePaint + priceThinner + 0.40;
    let sumForOneHour =  (sum * 0.30);
    let totalWork = sumForOneHour * hour;
    let totalSum = sum + totalWork;

    console.log(totalSum);
}

repainting(["10", "11", "4", "8"])

