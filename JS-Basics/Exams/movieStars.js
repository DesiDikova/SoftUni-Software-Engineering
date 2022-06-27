function movieStars(input) {

    let index = 0;
    let budget = Number(input[index]); //бюджет
    index++;

    let remuneration = 0
    while(index < input.length) {
        let name = input[index]; //име на актьор 

        //ако името на актьора е по-дълго от 15 символа, възнаграждението му ще е 20 % от останалия бюджет до момента
        if(name.length > 15) {
            remuneration = budget * 0.20; 
        } else {
            remuneration = Number(input[++index]);
        }

        //ако бюджетът се изчерпи или се стигне до команда "ACTION" 
        if(budget < 0 || name === "ACTION") {
            break;
        }
        
        budget -= remuneration;

        name = input[++index];
    }
 
    if(budget >= 0) { //ако бюджетът е достатъчен
        console.log(`We are left with ${budget.toFixed(2)} leva.`); //останал бюджет
    } else { //ако бюджетът не е достатъчен
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`); //необходим бюджет
    }
}

movieStars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
// (["170000",
// "Ben Affleck",
// "40000.50",
// "Zahari Baharov",
// "80000",
// "Tom Hanks",
// "2000.99",
// "ACTION"])

// (["1000",
// "John Cena",
// "800",
// "Freddy Kim",
// "3000",
// "ACTION"])