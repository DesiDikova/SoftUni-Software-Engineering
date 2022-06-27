function gameNumberWars(input) {

    let index = 0;
    let nameFirstPlayer = input[index];
    index++;
    let nameSecondPlayer = input[index];
    index++;

    let command = input[index];
    let pointsFirstPlayer = 0;
    let pointsSecondPlayer = 0;

    while(command !== "End of game") {
        let cardFirstPlayer = Number(input[index]);
        index++;
        let cardSecondPlayer = Number(input[index]);

        if(cardFirstPlayer > cardSecondPlayer) {
            pointsFirstPlayer += cardFirstPlayer - cardSecondPlayer;
        } 
        if(cardFirstPlayer < cardSecondPlayer) {
            pointsSecondPlayer += cardSecondPlayer - cardFirstPlayer;
        }
        if(cardFirstPlayer === cardSecondPlayer) {
            console.log(`Number wars!`);
            let cardFirstPlayer = Number(input[++index]);
            let cardSecondPlayer = Number(input[++index]);
           
            if(cardFirstPlayer > cardSecondPlayer) {
                console.log(`${nameFirstPlayer} is winner with ${pointsFirstPlayer} points`);
                return;
            } else {
                console.log(`${nameSecondPlayer} is winner with ${pointsSecondPlayer} points`);
                return;
            }  
        }

        command = input[++index];
        
    }

    console.log(`${nameFirstPlayer} has ${pointsFirstPlayer} points`);
    console.log(`${nameSecondPlayer} has ${pointsSecondPlayer} points`);
      
}

gameNumberWars//(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);
//(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]);

