function accountBalance(input) {
    let index = 0;
    let total = 0;

    while (true) {
        let data = input[index];
        if (data === "NoMoreMoney") {
            break;
        }
        
        let money = Number(input[index]);
        
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += money;
        console.log("Increase: " + money.toFixed(2));
        index++;
    }
    console.log("Total: " +  total.toFixed(2)); 
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
