function petShop(input) {
    let foodDog = Number(input[0]);
    let foodCat = Number(input[1]);

    let price = foodDog * 2.50 + foodCat * 4;
    let finishPrice = `${price} lv.`

    console.log(finishPrice);
}

petShop(["13", "9"])