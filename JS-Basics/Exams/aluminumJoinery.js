function aluminumJoinery(input) {

    let numberOfWindows = Number(input[0]);
    let modelWindows = input[1];
    let delivery = input[2];

    let sum = 0;

    if (numberOfWindows <= 10) {
        console.log(`Invalid order`);
        return;
    }

    switch (modelWindows) {
        case "90X130": 
            sum = numberOfWindows * 110;

            if (numberOfWindows <= 30) {
                sum = numberOfWindows * 110; 
            }else if (numberOfWindows <= 60) {
                sum -= sum * 0.05;
            } else if (numberOfWindows > 60) {
                sum -= sum * 0.08;
            } 
            break;
        case "100X150": sum = numberOfWindows * 140;
            if(numberOfWindows <= 40) {
                sum = numberOfWindows * 140;
            } else if (numberOfWindows <= 80) {
                sum -= sum * 0.06;
            } else if (numberOfWindows > 80) {
                sum -= sum * 0.10; 
            } 
            break;
        case "130X180": sum = numberOfWindows * 190;
            if (numberOfWindows <= 20) {
                sum = numberOfWindows * 190;
            } else if (numberOfWindows <= 50) {
                sum -= sum * 0.07;
            } else if (numberOfWindows > 50) {
                sum -= sum * 0.12;
            } 
            break;
        case "200X300": sum = numberOfWindows * 250;
            if (numberOfWindows <= 25) {
                sum = numberOfWindows * 250;
            } else if (numberOfWindows <= 50) {
                sum -= sum * 0.09;
            } else if (numberOfWindows > 50) {
                sum -= sum * 0.14;
            } 
            break;
    }
    
    if (delivery === "With delivery") {
        sum += 60;
    }

    if (numberOfWindows > 99) {
        sum -= sum * 0.04;
    }
    
console.log(`${sum.toFixed(2)} BGN`);

}

//aluminumJoinery(["11", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
//aluminumJoinery(["2", "130X180", "With delivery"]);
//aluminumJoinery(["40", "90X130", "With delivery"]);





