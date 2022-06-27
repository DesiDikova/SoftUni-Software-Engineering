function vacation(input) {
    let index = 0;
    let moneyHoliday = Number(input[index]);
    index++;
    let moneyHave = Number(input[index]);
    index++;
    let spend = 0;
    let day = 0;
    let isPosibleSaveMoney = true;
   

    while (moneyHoliday > moneyHave) {
        let activity = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        day++;

        if (activity === "save") {
            moneyHave += money;
            spend = 0;
        } else {
            moneyHave -= money;
            spend++;
            if (moneyHave < 0) {
                moneyHave = 0;
            }
        } 

        if (spend === 5) {
            console.log("You can't save the money.");
            console.log(day);
            isPosibleSaveMoney = false;
            break;
            }
        }

        if (isPosibleSaveMoney) {
        console.log(`You saved the money for ${day} days.`);

        }
    }

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
