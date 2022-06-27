function club(input) {

    let index = 0;
    let profit = Number(input[index]); //печалба
    index++;
    let command = input[index];

    let income = 0; //приходи
    
    while(index < input.length) {
        let nameCocktail = input[index]; //име на коктейл
        if(nameCocktail === "Party!") { //при получена команда "Party!" 
           
            console.log(`We need ${Math.abs(income - profit).toFixed(2)} leva more.`); //- да се отпечата недостигащата сума
            console.log(`Club income - ${income.toFixed(2)} leva.`); //- да се отпечатат приходите
        }

        index++;
        let numberCocktails = Number(input[index]); //брой коктейли за поръчка
        
        let priceCocktails = nameCocktail.length * numberCocktails; //цената на един коктейл е дължината на неговото име

        //ако цената на една поръчка е нечетно число, има 25% отстъпка от цената на поръчката
        if(priceCocktails % 2 !== 0) { 
            priceCocktails *= 0.75;
        }

        income += priceCocktails;
        command = input[++index];
    } 

        //при достигане на желаната печалба
        if(income >= profit) {
            console.log(`Target acquired.`);
            console.log(`Club income - ${income.toFixed(2)} leva.`); //- да се отпечатат приходите
        } 
    }

club//(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
