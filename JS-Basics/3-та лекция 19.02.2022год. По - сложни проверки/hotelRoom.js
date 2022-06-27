function hotelRoom (input){
    let month = input[0];
    let countNight = Number(input[1]);

    let sumApartment = 0;
    let sumStudio = 0;
 
    switch (month) { 
        case "May":
        case "October": 
            sumStudio = countNight * 50;
            sumApartment = countNight * 65;
            if (countNight > 7 && countNight <= 14) {
                sumStudio = sumStudio * 0.95; 
            } else if (countNight > 14) {
                sumStudio = sumStudio * 0.70;
                sumApartment = sumApartment * 0.90;
            }    
            break; 
        case "June": 
        case "September":
            sumStudio = countNight * 75.20;
            sumApartment = countNight * 68.70;   
            if (countNight > 14) {
                sumStudio = sumStudio * 0.80; 
                sumApartment = sumApartment * 0.90;
            }    
            break;
        case "July":
        case "August": 
            sumStudio = countNight * 76;   
            sumApartment = countNight * 77; 
            if (countNight > 14) {
                sumApartment = sumApartment * 0.90;
            break;
            }
        } 

        console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);  

        }

hotelRoom (["May", "1"]);  