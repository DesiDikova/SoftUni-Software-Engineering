function tournamentOfChristmas(input) {

    let index = 0;
    let numberDay = Number(input[index]);
    index++;

    let count = 0;
    let finishMoney = 0; 
    let winDay = 0;
    let loseDay = 0;

    for(let day = 0; day < numberDay; day++) {
        count++;
        let command = input[index];
        index++;

        let win = 0;
        let lose = 0;
        let money = 0;

        while(command !== "Finish") {
            let namePlay = command;
            let rez = input[index]; 
            index++;

            if(rez === "win") {
                win++;
                money += 20;
            } else {
                lose++;
            }

            command = input[index];
            index++;
        }

        if(win > lose) {
            money *= 1.10;
            winDay++;
        } else {
            loseDay++;
        }

        finishMoney += money;
        
    }

    if(winDay > loseDay) { 
        finishMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${finishMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${finishMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])
