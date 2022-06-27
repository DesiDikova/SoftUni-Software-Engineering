function yardGreening(input) {
    let squareMetersGreening = Number(input[0]);
    let priceSquareMeters = squareMetersGreening * 7.61;
    let discount = priceSquareMeters * 0.18;
    let finishPrice = priceSquareMeters - discount;

    let printPrice = `The final price is: ${finishPrice} lv.`
    let finishDiscount = `The discount is: ${discount} lv.`

    console.log(printPrice);
    console.log(finishDiscount);
}

yardGreening(["150"])


