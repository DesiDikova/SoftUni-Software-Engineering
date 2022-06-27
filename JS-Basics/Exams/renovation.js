function renovation(input) {

    let index = 0;
    let height = Number(input[index]); //височина на стената
    index++;
    let width = Number(input[index]); //ширина на стената
    index++;
    let percentageNotPainted = Number(input[index]); //процент от общата площ на стените, който няма да бъде боядисан
    index++;

    let command = input[index];
    let totalArea = 4 * (height * width); //обща площ
    let sizeForPainted = Math.ceil(totalArea - totalArea * percentageNotPainted / 100); //чиста площ за боядисване (без стените)
    let liters = 0;

    while(index < input.length) {
        let litersPaint = Number(input[index]);
    
        command = input[++index];
        liters += litersPaint;

        if(command === "Tired!") { //при получаване на командата "Tired!"
            console.log(`${Math.abs(sizeForPainted - liters)} quadratic m left.`); //повърхнината, която остава да се боядиса
            return;
        }    
    }

        if(liters > sizeForPainted) {
            console.log(`All walls are painted and you have ${Math.abs(sizeForPainted - liters)} l paint left!`); //ако е останала боя в излишък
        } else {
            console.log(`All walls are painted! Great job, Pesho!`); //ако след боядисването на всички стени, не е останала боя
        }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);