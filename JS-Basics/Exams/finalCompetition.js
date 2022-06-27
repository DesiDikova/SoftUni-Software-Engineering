function finalCompetition(input) {

    let numberDancers = Number(input[0]);
    let numberPoints = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let cashPrize = 0;
    let charity = 0;
    let finishMoney = 0;
    let moneyPerDancer = 0;

    switch(place) { 
        case "Bulgaria": 
        cashPrize = numberPoints * numberDancers; 
        break;
        case "Abroad": 
        cashPrize = numberPoints * numberDancers;
        cashPrize += cashPrize * 0.50; 
        break;
    }

    switch(season) {
        case "summer": 
            if(place === "Bulgaria") {
                cashPrize *= 0.95;
            } 
            if(place === "Abroad") {
                cashPrize *= 0.90;
            }
        break;
        case "winter": 
        if(place === "Bulgaria") {
            cashPrize *= 0.92;
        } 
        if (place === "Abroad") {
            cashPrize *= 0.85;
        }
        break;
    }

    charity = cashPrize * 0.75;
    finishMoney = cashPrize - charity;
    moneyPerDancer = finishMoney / numberDancers;
     
    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`)
    
}

finalCompetition
// (["1",
// "89.5",
// "summer",
// "Abroad"])

(["25",
"98",
"winter",
"Bulgaria"])
