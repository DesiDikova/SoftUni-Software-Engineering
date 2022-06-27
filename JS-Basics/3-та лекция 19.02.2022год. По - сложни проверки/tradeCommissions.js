function tradeCommissions(input) {
    let nameCity = input[0];
    let countSale = Number(input[1]);

    let percentage = null;
   
    if(countSale < 0) {
        console.log(`error`);
        return;
    }
    
    switch (nameCity) {
        case "Sofia":
            if (countSale <= 500) {
                percentage = countSale * 0.05;
            }else if (countSale <= 1000) {
                percentage = countSale * 0.07;
            }else if (countSale <= 10000) {
                percentage = countSale * 0.08;
            }else if (countSale > 10000) {
                percentage = countSale * 0.12;
            }
            break;
        case "Varna":
            if (countSale <= 500) {
                percentage = countSale * 0.045;
            }else if (countSale <= 1000) {
                percentage = countSale * 0.075;
            }else if (countSale <= 10000) {
                percentage = countSale * 0.10;
            }else if (countSale > 10000) {
                percentage = countSale * 0.13;
            }
            break;
        case "Plovdiv":
            if (countSale <= 500) {
                percentage = countSale * 0.055;
            }else if (countSale <= 1000) {
                percentage = countSale * 0.08;
            }else if (countSale <= 10000) {
                percentage = countSale * 0.12;
            }else if (countSale > 10000) {
                percentage = countSale * 0.145;
            }
            break;    
    }
    if (percentage === null) {
        console.log(`error`);
    } else {
        console.log(percentage.toFixed(2));
    }
}

tradeCommissions(["Kaspichan",
"-50"])





