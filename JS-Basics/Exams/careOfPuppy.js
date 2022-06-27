function careOfPuppy(input) {

    let foodInKilogram = Number(input[0]);
    let index = 1;
    let comand = input[index];

    let foodInGrams = foodInKilogram * 1000;
    let quantityFood = 0;

    while(comand !== "Adopted") {
        let food = Number(comand);
        quantityFood += food;
        comand = input[++index];
    }
    diff = Math.abs(quantityFood - foodInGrams);
        if(quantityFood > foodInGrams) {
            console.log(`Food is not enough. You need ${diff} grams more.`);
        } else {
            console.log(`Food is enough! Leftovers: ${diff} grams.`);
        }
}

careOfPuppy(["3",
"1000",
"1000",
"1000",
"Adopted"])
