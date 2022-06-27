function examPreparation(input) {
    let index = 0;
    let countNegativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let negativGrade = 0;
    let sumGrade = 0;
    let countProblems = 0;
    let lastProblem = ""; 
    let isNeedBreak = false; 

    while (command !== "Enough") {
        let nameProblem = command;
        let grade = Number(input[index]);
        index++;
        lastProblem = nameProblem;  
        countProblems++;
        sumGrade += grade;
    
        if (grade <= 4) {
            negativGrade++;
        } 
        
        if (negativGrade === countNegativeGrade) {
            console.log(`You need a break, ${negativGrade} poor grades.`); 
            isNeedBreak = true;
            break;
        }
        
        command = input[index];
        index++;
        } 

        if (!isNeedBreak) {
            let averageGrade = (sumGrade / countProblems).toFixed(2);
            console.log(`Average score: ${averageGrade}`);
            console.log(`Number of problems: ${countProblems}`);
            console.log(`Last problem: ${lastProblem}`);        
        }   
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
