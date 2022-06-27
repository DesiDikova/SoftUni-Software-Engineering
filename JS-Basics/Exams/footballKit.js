function footballKit(input) {

    let priceTshirt = Number(input[0]);
    let price = Number(input[1]);

    let priceShorts = priceTshirt * 0.75;
    let socks = priceShorts * 0.20;
    let buttons = 2 * (priceTshirt + priceShorts);
    let totalPrice = priceTshirt + priceShorts + socks + buttons;
    let priceAfterDiscount = totalPrice * 0.85;

    let diff = Math.abs(priceAfterDiscount - price);

    if(priceAfterDiscount >= price) { 
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${priceAfterDiscount.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    }
}

footballKit(["55",
"310"]);
