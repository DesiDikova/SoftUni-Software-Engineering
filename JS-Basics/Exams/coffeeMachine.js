function coffeeMachine(input) {

    let drink = input[0]; //напитка
    let sugar = input[1]; //захар
    let numberDrinks = Number(input[2]); //брой напитки

    let sumDrinks = 0; //крайна цена

    if(drink === "Espresso") {
        switch(sugar) { 
            case "Without": sumDrinks = numberDrinks * 0.90; break;
            case "Normal": sumDrinks = numberDrinks * 1.00;break;
            case "Extra": sumDrinks = numberDrinks * 1.20;break;
        }
    } 

    if(drink === "Cappuccino") {
        switch(sugar) {
            case "Without": sumDrinks = numberDrinks * 1.00;break;
            case "Normal": sumDrinks = numberDrinks * 1.20;break;
            case "Extra": sumDrinks = numberDrinks * 1.60;break;
        }
    }

    if(drink === "Tea") {
        switch(sugar) {
            case "Without": sumDrinks = numberDrinks * 0.50;break;
            case "Normal": sumDrinks = numberDrinks * 0.60;break;
            case "Extra": sumDrinks = numberDrinks * 0.70;break;
        }
    }

    if(sugar === "Without") { //при напитка без захар има 35% отстъпка
        sumDrinks *= 0.65;
    }
    
    if(drink === "Espresso" && numberDrinks >= 5) { //при напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка
        sumDrinks *= 0.75;
    }

    if(sumDrinks > 15.00) { //при сума надвишаваща 15 лева, има 20% отстъпка от крайната цена
        sumDrinks *= 0.80;
    }
    
    console.log(`You bought ${numberDrinks} cups of ${drink} for ${sumDrinks.toFixed(2)} lv.`);

}

coffeeMachine//(["Espresso", "Without", "10"]);


