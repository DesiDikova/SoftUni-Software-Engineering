function pcGameShop(input) {

    let index = 0;
    let numberSoldGames = Number(input[index]); //брой продадени игри
    index++;

    let numHearthstone = 0; //брой продадени игри Hearthstone
    let numFornite = 0; //брой продадени игри Fornite
    let numOverwatch = 0; //брой продадени игри Overwatch
    let numOthers = 0; //брой продадени игри Others

    for(let i = 0; i < numberSoldGames; i++) {
       let nameGames = input[index];
       index++;
        if(nameGames === "Hearthstone") {
            numHearthstone++;
        } else if(nameGames === "Fornite") {
            numFornite++;
        } else if(nameGames === "Overwatch") {
            numOverwatch++;
        } else {
            numOthers++;
        }
    }
   
    console.log(`Hearthstone - ${(100 / numberSoldGames * numHearthstone).toFixed(2)}%`); //процент продажби на Hearthstone
    console.log(`Fornite - ${(100 / numberSoldGames * numFornite).toFixed(2)}%`); //процент продажби на Fornite
    console.log(`Overwatch - ${(100 / numberSoldGames * numOverwatch).toFixed(2)}%`); //процент продажби на Overwatch
    console.log(`Others - ${(100 / numberSoldGames * numOthers).toFixed(2)}%`); //процент продажби на всички останали игри
}

pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);




