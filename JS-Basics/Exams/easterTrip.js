function easterTrip(input) {

    let destination = input[0]; //дестинация
    let bookingDates = input[1]; //дати за резервация
    let numberNight = Number(input[2]); //брой нощувки

    let sumExcursion = 0; //сума, необходима за екскурзията

    switch(destination) { //сума на екскурзията, според дестинацията и датите за резервация
        case "France": 
            if(bookingDates === "21-23") {
                sumExcursion = numberNight * 30;
            } else if(bookingDates === "24-27") {
                sumExcursion = numberNight * 35;
            } else if(bookingDates === "28-31") {
                sumExcursion = numberNight * 40;
            }
        break;
        case "Italy": 
            if(bookingDates === "21-23") {
                sumExcursion = numberNight * 28;
            } else if(bookingDates === "24-27") {
                sumExcursion = numberNight * 32;
            } else if(bookingDates === "28-31") {
                sumExcursion = numberNight * 39;
            }
        break;
        case "Germany": 
            if(bookingDates === "21-23") {
                sumExcursion = numberNight * 32;
            } else if(bookingDates === "24-27") {
                sumExcursion = numberNight * 37;
            } else if(bookingDates === "28-31") {
                sumExcursion = numberNight * 43;
            }
        break;
    }
    console.log(`Easter trip to ${destination} : ${sumExcursion.toFixed(2)} leva.`);
}

easterTrip(["Germany", "24-27", "5"]);
