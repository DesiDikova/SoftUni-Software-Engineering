function touristShop(input) {

    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];

    let totalSum = 0;
    let count = 0;

    while(command !== "Stop") {
        count++;
        let nameProduct = command;
        index++;
        let priceProduct = Number(input[index]);

        if(totalSum > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(totalSum - budget).toFixed(2)} leva!`);
            break;
        }

        if(index % 3 === 0) {
            priceProduct /= 2;
        }

        totalSum += priceProduct; 

        command = input[++index];
    }

    if(command === "Stop") {
        console.log(`You bought ${count} products for ${totalSum.toFixed(2)} leva.`);
    }
}

touristShop
// (["153.20",
// "Backpack",
// "25.20",
// "Shoes",
// "54",
// "Sunglasses",
// "30",
// "Stop"])

(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"]);