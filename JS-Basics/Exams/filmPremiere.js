function filmPremiere(input) {

    let movie = input[0]; //филм
    let moviePackage = input[1]; //пакет за филм 
    let numberTickets = Number(input[2]); //брой билети

    let sumTickets = 0; //цена за билети

    if(movie === "John Wick") {
        switch(moviePackage) {
            case "Drink": sumTickets = numberTickets * 12; break;
            case "Popcorn": sumTickets = numberTickets * 15; break;
            case "Menu": sumTickets = numberTickets * 19; break;
        }
    }

    if(movie === "Star Wars") {
        switch(moviePackage) {
            case "Drink": sumTickets = numberTickets * 18; break;
            case "Popcorn": sumTickets = numberTickets * 25; break;
            case "Menu": sumTickets = numberTickets * 30; break;
        }
    }

    if(movie === "Jumanji") {
        switch(moviePackage) {
            case "Drink": sumTickets = numberTickets * 9; break;
            case "Popcorn": sumTickets = numberTickets * 11; break;
            case "Menu": sumTickets = numberTickets * 14; break;
        }
    }
        //При избран филм "Star Wars" и закупени поне четири билета, има 30% семейна отстъпка
    if(movie === "Star Wars" && numberTickets >= 4) {
        sumTickets *= 0.70;
    }
        //При избран филм "Jumanji" и закупени точно два билета, има 15% отстъпка за двама
    if(movie === "Jumanji" && numberTickets === 2) {
        sumTickets *= 0.85;
    }
    console.log(`Your bill is ${sumTickets.toFixed(2)} leva.`);
}

filmPremiere//(["John Wick", "Drink", "6"]);
(["Jumanji",
"Menu",
"2"])

