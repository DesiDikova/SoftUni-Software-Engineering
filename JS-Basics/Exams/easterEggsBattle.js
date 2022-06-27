function easterEggsBattle(input) {

    let index = 0;
    let numberEggTtheFirstPlayer = Number(input[index]); //брой яйца на първия играч
    index++;
    let numberEggTtheSecondPlayer = Number(input[index]); //брой яйца на втория играч
    index++;
    let command = input[index];

    while(command !== "End") {
        let winner = input[index];
        if(numberEggTtheFirstPlayer === 0 || numberEggTtheSecondPlayer === 0) { //Играта приключва, ако някой от играчите остане без яйца 
            break;
        }
        if(winner === "one") {
            numberEggTtheSecondPlayer--; //яйцата на втория намаляват с едно 
        } else if (winner === "two"){
            numberEggTtheFirstPlayer--; //яйцата на първия намаляват с едно
        }
        command = input[index];
        index++;
        if(command === "End") { //При команда "End" да се отпечата това:
            console.log(`Player one has ${numberEggTtheFirstPlayer} eggs left.`);
            console.log(`Player two has ${numberEggTtheSecondPlayer} eggs left.`);
            return; 
        }
    } 
    
    if(numberEggTtheFirstPlayer <= 0) {
        console.log(`Player one is out of eggs. Player two has ${numberEggTtheSecondPlayer} eggs left.`);
    } else {
        console.log(`Player two is out of eggs. Player one has ${numberEggTtheFirstPlayer} eggs left.`);
    }
    
}

easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End"]);