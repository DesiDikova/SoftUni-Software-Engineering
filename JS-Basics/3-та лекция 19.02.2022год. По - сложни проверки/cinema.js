function cinema(input) {
    let projection = input[0];
    let numberOfRows = Number(input[1]);
    let numberOfColumns = Number(input[2]);

    let numberOfPlaces = numberOfRows * numberOfColumns;
    let sumTicket = 0;

    switch (projection) {
        case "Premiere": sumTicket = numberOfPlaces * 12; break;
        case "Normal": sumTicket = numberOfPlaces * 7.5; break;
        case "Discount": sumTicket = numberOfPlaces * 5; break;
    } console.log(`${sumTicket.toFixed(2)} leva`); 
}

cinema(["Discount", "12", "30"]);
