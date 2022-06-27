function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFisherman = Number(input[2]);

    let renta = 0;

    switch (season) {
        case "Spring": 
        renta = 3000; 
        if (countFisherman <= 6) {
            renta = renta * 0.90;
        } else if (countFisherman >= 7 && countFisherman <= 11) {
            renta = renta * 0.85;
        } else {
            renta = renta * 0.75;
        } 
        break;    
        case "Summer": 
        case "Autumn": 
        renta = 4200; 
        if (countFisherman <= 6) {
            renta = renta * 0.90;
        } else if (countFisherman >= 7 && countFisherman <= 11) {
            renta = renta * 0.85;
        } else {
            renta = renta * 0.75;
        }
        break;
        case "Winter": 
        renta = 2600; 
        if (countFisherman <= 6) {
            renta = renta * 0.90;
        } else if (countFisherman >= 7 && countFisherman <= 11) {
            renta = renta * 0.85;
        } else {
            renta = renta * 0.75;
        } 
        break;
    }  
    if (countFisherman % 2 == 0 && season !== "Autumn") {
        renta = renta * 0.95;
    } 

    let diff = Math.abs(budget - renta).toFixed(2);
    
        if (budget >= renta) {
            console.log(`Yes! You have ${diff} leva left.`);
        } else {
            console.log(`Not enough money! You need ${diff} leva.`); 
        }
}       

fishingBoat (["2000", "Winter", "13"]);

