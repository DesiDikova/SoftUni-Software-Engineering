function movieDestination(input) {

    let budget = Number(input[0]); //бюджет
    let destination = input[1]; //дестинация
    let season = input[2]; //сезон
    let numDays = Number(input[3]); //брой дни  

    let sum = 0; //сума, необходима за заснемане на филма

    switch(destination) { 
        case "Dubai": 
            if(season === "Summer") {
                sum = numDays * 40000;
                sum *= 0.70; //Ако дестинацията е Дубай – 30% отстъпка от крайната цена
            } else if(season === "Winter") {
                sum = numDays * 45000;
                sum *= 0.70; //Ако дестинацията е Дубай – 30% отстъпка от крайната цена
            }   
        break;
        case "Sofia": 
            if(season === "Summer") {
                sum = numDays * 12500;
                sum *= 1.25; //Ако дестинацията е София – цената се оскъпява с 25%
            } else if(season === "Winter") {
                sum = numDays * 17000;
                sum *= 1.25; //Ако дестинацията е София – цената се оскъпява с 25%
            }
        break;
        case "London": 
            if(season === "Summer") {
                sum = numDays * 20250;
            } else if(season === "Winter") {
                sum = numDays * 24000;
            }
        break;
    }

    let diff = Math.abs(budget - sum); //остатък от бюджета (нужна сума)
    if(budget >= sum) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}

movieDestination//(["400000", "Sofia", "Winter", "20"]);


