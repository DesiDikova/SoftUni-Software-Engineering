function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    index++;

    let sumPrimeNumbers = 0;
    let sumPrimeNonNumbers = 0;

    while(command !== "stop") {
        let number = Number(command);

        if(number < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }

        if(number === 1) {
            sumPrimeNumbers += number;
            command = input[index];
            index++;
            continue;
        }
        let isNonPrime = false; 
        for(let i = 2; i < number; i++) {
            if(number % i === 0) {
                isNonPrime = true;
                break;
            }
        }
        if(isNonPrime) {
            sumPrimeNonNumbers += number;
        } else {
            sumPrimeNumbers += number;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumPrimeNonNumbers}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
