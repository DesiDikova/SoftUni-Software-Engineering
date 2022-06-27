function energyBooster (input) {

    let fruit = input[0];
    let size = input[1];
    let quantity = Number(input[2]);

    let price = null;
    let  isSmallSize = null;
    
    switch (size) {
        case "small":
            isSmallSize = true;
        break;
        case "big":
            isSmallSize = false;
        break;
    }

    switch(fruit) {
        case "Watermelon": price = (isSmallSize ? 2 * 56 : 5 * 28.70); break;
        case "Mango": price = (isSmallSize ? 2 * 36.66 : 5 * 19.60); break;
        case "Pineapple": price = (isSmallSize ? 2 * 42.10 : 5 * 24.80); break;
        case "Raspberry": price = (isSmallSize ? 2 * 20 : 5 * 15.20);break;
    }

    let totalSum = quantity * price;

    if (totalSum >= 400 && totalSum <= 1000) {
        totalSum *= 0.85;
    } else if (totalSum > 1000) {
        totalSum *= 0.50;
    }
    console.log(`${totalSum.toFixed(2)} lv.`)
}

energyBooster(["Mango",
"big",
"8"])


