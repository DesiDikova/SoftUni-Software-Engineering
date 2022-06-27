function darts(input) {

    let index = 0;
    let namePlayer = input[index];
    index++;

    let command = input[index];
    let startPoints = 301; //начални точки
    let numberSuccessfulShots = 0; //брой успешни изстрели
    let numberUnsuccessfulShots = 0; //брой неуспешни изстрели

    while(command !== "Retire") {
        let fieldDarts = input[index];
        index++;
        let points = Number(input[index]);

        if(points > startPoints) { //когато точките от полето са по - големи от наличните начални точки - броят на неуспешните изстртели се увеличава
            numberUnsuccessfulShots++;
        }

        if(points <= startPoints) {
            switch(fieldDarts) {
                case "Single": startPoints -= points; numberSuccessfulShots++; break; //при "Single" началните точки се намалят с точките от полето; броят успешни изстрели се увеличава
                case "Double" : startPoints -= 2 * points; numberSuccessfulShots++; break; //при "Double" началните точки се намалят с удвоениет точките от полето; броят успешни изстрели се увеличава
                case "Triple": startPoints -= 3 * points; numberSuccessfulShots++; break; //при "Triple" началните точки се намалят с точките от полето умножени по 3; броят успешни изстрели се увеличава
            }
        }

        //когато началните точки се изравнят към 0 - се отпечатва победителят и броя изстрели, и програмата приключва
        if(startPoints === 0) {
            console.log(`${namePlayer} won the leg with ${numberSuccessfulShots} shots.`);
            return;
        }

        command = input[++index];

    }
    //При command === "Retire" - да се отпечата броя на неуспешните изстрели
    console.log(`${namePlayer} retired after ${numberUnsuccessfulShots} unsuccessful shots.`);
}

darts(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]);
//(["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"])


//(["Stephen Bunting", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "7", "Single", "12", "Double", "1", "Single", "1"]);
