function catDiet(input) {

    let fatPercentage = Number(input[0]);
    let proteinsPercentage = Number(input[1]);
    let carbohydratesPercentage = Number(input[2]);
    let allCalories = Number(input[3]);
    let waterPercentage = Number(input[4]);

    let countFat = (fatPercentage / 100 * allCalories) / 9;
    let countProteins = (proteinsPercentage / 100 * allCalories) / 4;
    let countCarbohydrates = (carbohydratesPercentage / 100 * allCalories) / 4;
    let food = countFat + countProteins + countCarbohydrates;
    let caloriesForOneGrams = allCalories / food;
    let water = 100 - waterPercentage;
    let gramsFood = water / 100 * caloriesForOneGrams;

    console.log(gramsFood.toFixed(4));
}

catDiet(["60",
"25",
"15",
"2500",
"60"])
