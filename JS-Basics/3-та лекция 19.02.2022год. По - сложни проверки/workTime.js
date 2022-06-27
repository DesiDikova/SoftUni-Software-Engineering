function workTime(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >=10 && hour <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open"); break;  
        } 
    }
    if (hour < 10 || hour > 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("closed"); break;  
        } 
    }
        switch (day) {
            case "Sunday":console.log("closed"); break; 
    }  
}

workTime(["11", "Sunday"]);
