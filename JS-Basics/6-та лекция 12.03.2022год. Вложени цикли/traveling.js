function traveling(input) {
    let index = 0;
    let comand = input[index];
    index++;

    while (comand !== "End") {
        let destination = comand;
        let budget = Number(input[index]);
        index++;
        let money = 0;

        while (budget > money) {
            let tempMoney = Number(input[index]);
            index++;

            money += tempMoney;
        } 
        console.log(`Going to ${destination}!`);
        comand = input[index];
        index++;
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

