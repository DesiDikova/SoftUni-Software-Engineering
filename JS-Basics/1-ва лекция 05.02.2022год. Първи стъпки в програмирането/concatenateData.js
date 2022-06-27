// Напишете функция, която получава: име, фамилия, възраст и град

function concatenateData(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    
    let concatenateData = "You are" + " " + firstName + " " + lastName + ", a " + age + "-years old person from" + " " + town + ".";
    
    console.log(concatenateData);
}

concatenateData(["Desislava", "Dikova", "36", "General Toshevo" ])