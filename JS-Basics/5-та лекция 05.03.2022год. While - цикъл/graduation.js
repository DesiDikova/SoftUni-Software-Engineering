function graduation(input) {
    let index = 0;
    let nameStudent = input[index];
    index++;
    let grade = 1;
    let fails = 0;
    let total = 0;
    let sumTotal = 0;

    while (true) {
        if (fails > 1) {
            console.log (`${nameStudent} has been excluded at ${grade} grade`);
            break;
        }
       let annualGrade = Number(input[index]);
        if (annualGrade < 4) {
            fails++;
            index++;
            continue;
        }
        total += annualGrade;

        if (grade >= 12) {
            sumTotal = total / grade;
            console.log (`${nameStudent} graduated. Average grade: ${sumTotal.toFixed(2)}`);  
            break;  
        }
        grade++;
        index++;
    }
}

graduation (["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
