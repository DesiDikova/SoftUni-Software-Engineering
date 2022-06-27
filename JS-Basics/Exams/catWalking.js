function catWalking(input) {
    let minWalk = Number(input[0]);
    let quantityWalk = Number(input[1]);
    let calories = Number(input[2]);

    let totalWalkInMin = quantityWalk * minWalk;
    let calorieExpenditure = totalWalkInMin * 5;
    let percentage = 50 / 100 * calories;

    if (calorieExpenditure >= percentage) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${calorieExpenditure}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${calorieExpenditure}.`)
    }
}

catWalking(["40", "2", "300"]);
