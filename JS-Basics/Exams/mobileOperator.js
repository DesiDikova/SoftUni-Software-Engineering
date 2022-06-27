function mobileOperator(input) {

    let termOfTheContract = (input[0]);
    let typeOfContract = input[1];
    let internet = input[2];
    let numberOfMonthsToPay = Number(input[3]);

    let tax = null;
    let isOneContract = null;
    let totalSum = 0;

    switch(termOfTheContract) { 
        case "one": isOneContract = true; break;
        case "two": isOneContract = false; break;
    }

    switch(typeOfContract) { 
        case "Small": tax = (isOneContract ? 9.98 : 8.58); break;
        case "Middle": tax = (isOneContract ? 18.99 : 17.09); break;
        case "Large": tax = (isOneContract ? 25.98 : 23.59); break;
        case "ExtraLarge": tax = (isOneContract ? 35.99 : 31.79); break;
    }

    if(internet === "yes") {
        if(tax <= 10) {
            tax += 5.50;
        } else if(tax <= 30) {
            tax += 4.35;
        } else {
            tax += 3.85;
        }
    }

    totalSum = tax * numberOfMonthsToPay;

    if(termOfTheContract === "two") {
        totalSum *= 0.9625;
    }

    console.log(`${totalSum.toFixed(2)} lv.`)

}

mobileOperator(["one",
"Small",
"yes",
"10"])
