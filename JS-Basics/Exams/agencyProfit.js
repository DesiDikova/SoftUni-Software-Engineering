function agencyProfit(input) {

    let name = (input[0]);
    let numberTicketsAdult = Number(input[1]);
    let numberTicketsKids = Number(input[2]);
    let priceOneTicketsAdult = Number(input[3]);
    let priceService = Number(input[4]);

    let priceOneTicketsKids = priceOneTicketsAdult * 0.30; 
    let priceOneTicketsKidsWithService = priceOneTicketsKids + priceService;
    let priceOneTicketsAdultWithService = priceOneTicketsAdult + priceService;
    let sumTickets = (numberTicketsAdult * priceOneTicketsAdultWithService) + (numberTicketsKids * priceOneTicketsKidsWithService);
    let profit = sumTickets * 0.20;
    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
    
}

agencyProfit (["Ryanair", "60", "23", "158.96", "39.12"]);