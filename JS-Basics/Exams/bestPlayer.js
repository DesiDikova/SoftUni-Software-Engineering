function bestPlayer(input) {

    let index = 0;
    let command = input[index];
    let goal = 0;
    let maxGoal = 0;
    let theBestPlayer = "";

    while(command !== "END") {
        let name = command;
        index++;
        goal = Number(input[index]);

        if(goal > maxGoal) {
            maxGoal = goal;
            theBestPlayer = name;
        }

        if(maxGoal >= 10) {
            break;
        }

        command = input[++index];
    }
    if(maxGoal >= 3) {
        console.log(`${theBestPlayer} is the best player!`);
        console.log(`He has scored ${maxGoal} goals and made a hat-trick !!!`);
    } else {
        console.log(`${theBestPlayer} is the best player!`);
        console.log(`He has scored ${maxGoal} goals.`);
        }
    }

bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])



