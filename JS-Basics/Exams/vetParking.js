function vetParking(input) {

    let numberDays = Number(input[0]);
    let numberHours = Number(input[1]);

    let finishSumForAllDay = 0;
    numDay = 0;
    numHour = 0;

    for(let day = 1; day <= numberDays; day++) {
        numDay++;
        let sumForDay = 0;
        for(let hour = 1; hour <= numberHours; hour++) {
           
            if(numDay % 2 === 0 && hour % 2 !== 0) {
                sumForDay += 2.50;
            } else if(numDay % 2 !== 0 && hour % 2 === 0) {
                sumForDay += 1.25;
            } else {
                sumForDay += 1.00; 
            }
        }
        console.log(`Day: ${numDay} - ${sumForDay.toFixed(2)} leva`); 

        finishSumForAllDay += sumForDay
    }   
        
        console.log(`Total: ${finishSumForAllDay.toFixed(2)} leva`);
}

vetParking(["5", "2"]);