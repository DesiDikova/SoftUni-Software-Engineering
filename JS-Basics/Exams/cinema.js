function cinema(input) {

    let index = 0;
    let sizeHall = Number(input[index]); //капацитет на залата
    index++;
    let command = input[index];
    let sumTickets = 0; //сума за билети
    let totalTickets = 0;
    let numPlaces = 0; //брой места

    while(index < input.length) {
        if(command !== "Movie time!") {
            let numPeople = Number(input[index]);
            sumTickets = numPeople * 5;
            numPlaces += numPeople;
            if(numPeople % 3 === 0) {
                sumTickets -= 5; //Ако текущия брой хора се дели на 3 без остатък, се прави отстъпка 5лв от общата им сметка
            }
        }

        if(command === "Movie time!") { //При получена команда "Movie time!"
            console.log(`There are ${sizeHall - numPlaces} seats left in the cinema.`);
            console.log(`Cinema income - ${totalTickets} lv.`);
            break;
        }  
    
        if(sizeHall < numPlaces) { //При изчерпване на местата в залата
            console.log(`The cinema is full.`);
            console.log(`Cinema income - ${totalTickets} lv.`);
            break;
        }

        totalTickets += sumTickets
        command = input[++index];
    }
}

cinema//(["60", "10", "6", "3", "20", "15", "Movie time!"]);
// (["50",
// "15",
// "10",
// "10",
// "15",
// "5"])

(["100",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"Movie time!"])


