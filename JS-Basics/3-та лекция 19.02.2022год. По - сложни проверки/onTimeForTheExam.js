function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour  = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let timeExamMinutes = (examHour * 60) + examMinutes;
    let timeArrivalMinutes = (arrivalHour * 60) + arrivalMinutes;
    let difference = Math.abs(timeExamMinutes - timeArrivalMinutes);

    let h = Math.floor(difference / 60);
    let m = difference % 60;

    if (timeExamMinutes < timeArrivalMinutes) {
        console.log(`Late`);
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }        
    } else if (timeExamMinutes === timeArrivalMinutes || difference <= 30) {
        console.log(`On time`);
        if (difference > 0) {
            console.log(`${difference} minutes before the start`);
        } else {
            console.log(`${difference} minutes before the start`);
        }
    } else {
        console.log(`Early`);
        if (h > 0) {
            if (m < 10) { 
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else {
            console.log(`${m} minutes before the start`);
        }  
    }
}

onTimeForTheExam (["11","30","10","55"]);




