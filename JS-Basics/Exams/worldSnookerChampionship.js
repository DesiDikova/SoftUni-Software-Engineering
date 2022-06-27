function worldSnookerChampionship(input) {
    
    let etap = input[0];
    let typeOfTicket = input[1];
    let numberOfTickets = Number(input[2]);
    let pic = input[3];

    let price = 0;
    
    if (etap === `Quarter final`) {
        switch(typeOfTicket) {
            case "Standard": price = numberOfTickets * 55.50; break;
            case "Premium": price = numberOfTickets * 105.20; break;
            case "VIP": price = numberOfTickets * 118.90; break;
        }
    } else if (etap === `Semi final`) {
        switch(typeOfTicket) {
            case "Standard": price = numberOfTickets * 75.88; break;
            case "Premium": price = numberOfTickets * 125.22; break;
            case "VIP": price = numberOfTickets * 300.40; break;
        }
    } else if (etap === `Final`) {
        switch(typeOfTicket) {
            case "Standard": price = numberOfTickets * 110.10; break;
            case "Premium": price = numberOfTickets * 160.66; break;
            case "VIP": price = numberOfTickets * 400; break;
        }
    } 

    if (price > 4000) {
        if (pic === "Y") {
            price *= 0.75;
        }
    } else if (price > 2500) {
        price *= 0.90; {
            if (pic === "Y") {
                price += numberOfTickets * 40;
            }
        }
    } else if (pic === "Y") {
        price += numberOfTickets * 40;
    }

    console.log(price.toFixed(2));

}

worldSnookerChampionship(["Final",
"Premium",
"25",
"Y"])





