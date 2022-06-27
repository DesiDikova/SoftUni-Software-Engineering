function foodDelivery(input) {
    let chiken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let priceFood = (chiken * 10.35 + fish * 12.40 + vegan * 8.15);
    let priceDesert = priceFood * 0.20;
    let foodDelivery = priceFood + priceDesert + 2.50;
    
    console.log(foodDelivery);
}

foodDelivery(["9", "2", "6"])