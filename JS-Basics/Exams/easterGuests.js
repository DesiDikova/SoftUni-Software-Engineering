function easterGuests(input) {

    let numberOfGuests = Number(input[0]); //брой гости
    let budget = Number(input[1]); //бюджет

    let numberOfEasterCakes = 0; //колко броя козунаци трябва да се купят
    let numberOfEggs = 0; //колко броя яйца трабва да се  купят
    let totalSum = 0; //сума, която трбва да се плати

    numberOfEasterCakes = Math.ceil(numberOfGuests / 3); 
    numberOfEggs = numberOfGuests * 2;
    totalSum = numberOfEasterCakes * 4.00 + numberOfEggs * 0.45;

    let diff = Math.abs(budget - totalSum); //остатък

    if(budget >= totalSum) {
        console.log(`Lyubo bought ${numberOfEasterCakes} Easter bread and ${numberOfEggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}

easterGuests(["9", "12"])
