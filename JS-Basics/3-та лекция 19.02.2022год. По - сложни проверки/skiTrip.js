function skiTrip(input) {
    let day = Number(input[0]);
    let room = input[1];
    let evaluation = input[2];

    let night = day - 1;
    let sumNight = 0;

    switch (room) {
        case "room for one person": sumNight = night * 18.00; break;
        case "apartment": sumNight = night * 25.00; 
            if (night < 10) {
                sumNight = sumNight * 0.70;
            } else if (night <= 15) {
                sumNight = sumNight * 0.65;
            } else {
                sumNight = sumNight * 0.50;
            }
        break;
        case "president apartment": sumNight = night * 35.00; 
            if (night < 10) {
                sumNight = sumNight * 0.90;
            } else if (night <= 15) {
                sumNight = sumNight * 0.85;
            } else {
                sumNight = sumNight * 0.80;
            }
        break;
    } 

    switch (evaluation) {
        case "positive": sumNight = sumNight + (sumNight * 0.25); break;
        case "negative": sumNight = sumNight - (sumNight * 0.10); break;
    }
    
    console.log(sumNight.toFixed(2));

}

skiTrip (["12", "room for one person", "positive"]);