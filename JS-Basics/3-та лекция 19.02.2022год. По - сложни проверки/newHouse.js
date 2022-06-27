function newHouse(input) {
    let kindOfFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (kindOfFlowers) {
        case "Roses": 
            sum = numberOfFlowers * 5;
            if (numberOfFlowers > 80) {
                sum = sum - (sum * 0.10);
            } 
            break;
        case "Dahlias": 
            sum = numberOfFlowers * 3.8; 
            if (numberOfFlowers > 90) { 
                sum = sum - (sum * 0.15); 
            }
            break;
        case "Tulips": 
            sum = numberOfFlowers * 2.8; 
            if (numberOfFlowers > 80) {
                sum = sum - (sum * 0.15) 
            } 
            break;
        case "Narcissus": 
        sum = numberOfFlowers * 3; 
        if (numberOfFlowers < 120) {
            sum = sum + (sum * 0.15)
        }
        break;
        case "Gladiolus": 
        sum = numberOfFlowers * 2.5; 
        if (numberOfFlowers < 80) {
            sum = sum + (sum * 0.20)
        }
        break;
    } 

    let diff = Math.abs(budget - sum).toFixed(2);
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${kindOfFlowers} and ${diff} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff} leva more.`);
    }
}   
    
newHouse (["Narcissus", "119", "360"]);