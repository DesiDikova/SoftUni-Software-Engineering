function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    let countSteps = 0;
    let difference = 0;
    let isCollectedTheSteps = true;

    while (command !== "Going home") {
        let steps = Number(command);
        countSteps += steps; 

        if (countSteps >= 10000){
            isCollectedTheSteps = false;
            difference = countSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(difference)} steps over the goal!`);   
            break;
        }

        command = input[index];
        index++;

    }
    if (isCollectedTheSteps) {
        command = input[index];
        let steps = Number(command);
        countSteps += steps; 
        difference = countSteps - 10000;
        if (countSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(difference)} steps over the goal!`);
        } else {
            console.log(`${Math.abs(difference)} more steps to reach goal.`);
        }
    }    
}

    walking(["1000", "1500", "2000", "6500"]);
    
    
    

    
    