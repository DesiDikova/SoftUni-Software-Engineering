function fitnessCard (input) {

    let sum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let sumCard = null;
    let mGender = null;

    switch (gender) {
        case "m": mGender = true; break;
        case "f": mGender = false; break;
    }
    
    switch (sport) {
        case "Gym": sumCard = (mGender ? 42 : 35);break;
        case "Boxing": sumCard = (mGender ? 41 : 37);break;
        case "Yoga": sumCard = (mGender ? 45 : 42);break;
        case "Zumba": sumCard = (mGender ? 34 : 31);break;
        case "Dances": sumCard = (mGender ? 51 : 53);break;
        case "Pilates": sumCard = (mGender ? 39 : 37);break;
    }

    if (age <= 19) {
        sumCard *= 0.80;
    } 

    if (sum >= sumCard) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else if (sum < sumCard) {
        console.log(`You don't have enough money! You need $${(sumCard - sum).toFixed(2)} more.`);
    }

}

//fitnessCard(["50", "m", "23", "Gym"]);
fitnessCard(["10",
"m",
"50",
"Pilates"])

