function movieProfit(input) {

    let nameMovie = input[0]; //име на филма
    let numDays = Number(input[1]); //брой дни
    let numTickets = Number(input[2]); //брой билети
    let priceForOneTicket = Number(input[3]); //цена за един билет
    let percentageOfCinema = Number(input[4]); //процент за киното
    let priceAllTickets = numTickets * priceForOneTicket; //цена за всички билети
    let priceTicketsForAllDays = priceAllTickets * numDays; //цена на билетите за всички дни
    let income = priceTicketsForAllDays - priceTicketsForAllDays * percentageOfCinema / 100; //приходи

    console.log(`The profit from the movie ${nameMovie} is ${income.toFixed(2)} lv.`);
}

movieProfit//(["The Programmer", "20", "500", "7.50", "7"]);
(["The Jungle",
"22",
"20500",
"9.37",
"30"])
