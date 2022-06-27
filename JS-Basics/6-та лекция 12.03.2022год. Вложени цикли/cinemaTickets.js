function cinemaTickets(input) {

    let index = 0;
    let comand = input[index];
    let countStudentTickets = 0;
    let countStandardTickets = 0;
    let countKidTickets = 0;
    let countTickets = 0;

    while (comand !== "Finish") {
        let name = comand;
        index++;
        let free = Number(input[index]);
        index++;
        let typeTickets = input[index];
        let count = 0; 
        
        while(typeTickets !== "End") {
            count++;
            switch(typeTickets) {
                case "student": countStudentTickets++; break;
                case "standard": countStandardTickets++; break;
                case "kid": countKidTickets++; break;
            }
            if(count >= free) {
                break;
            }

            typeTickets = input[++index];

        }
        countTickets += count;
        console.log(`${name} - ${(count / free * 100).toFixed(2)}% full.`)

        comand = input[++index];
    }
    console.log(`Total tickets: ${countTickets}`);
    console.log(`${(countStudentTickets / countTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandardTickets / countTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKidTickets / countTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
