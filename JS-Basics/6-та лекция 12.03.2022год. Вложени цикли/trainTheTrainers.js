function trainTheTrainers(input) {

    let numPeople = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sumGrades = 0; 
    let couner = 0;

    while(command !== "Finish") {
        let name = command;
        couner++;
        let sumGradePresentation = 0; 
        for(let i = 0; i < numPeople; i++) {
            index++;
            let grade = Number(input[index]);
            sumGradePresentation += grade;
        }

        let averageGrade = sumGradePresentation / numPeople;
        sumGrades += averageGrade;

        console.log(`${name} - ${averageGrade.toFixed(2)}.`);

        index++;
        command = input[index];
    }
    
    let average = sumGrades / couner;

    console.log(`Student's final assessment is ${average.toFixed(2)}.`)
    
}

trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

