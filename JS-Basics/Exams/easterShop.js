function easterShop(input) {

    let index = 0;
    let countEggs = Number(input[index]); //количество яйца
    index++;
    let command = input[index];

    let counSoldEggs = 0; //количество продадени яйца

    while(command !== "Close") {
        let name = input[index]; //команда "Buy" или "Fill"
        index++;
        let numberEggs = Number(input[index]); // количество продадени или допълнени яйца
        switch(name) {
            case "Buy": 
                counSoldEggs = countEggs - numberEggs; //количество продадени яйца
            break;
            case "Fill": 
                counSoldEggs += numberEggs; //началното количество се променя, според броя на добавените яйца
            break;
        }
        // if(counSoldEggs < numberEggs) {
        //     console.log(`Store is closed!`);
        //     console.log(`${counSoldEggs} eggs sold.`);
        //     break;
        // } 
        
        command = input[++index];
    
        console.log(`Store is closed!`);
        console.log(`${counSoldEggs} eggs sold.`);
    } 
}

easterShop//(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"]);
