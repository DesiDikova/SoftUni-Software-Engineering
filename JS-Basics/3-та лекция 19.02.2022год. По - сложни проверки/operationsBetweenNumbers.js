function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let rez = 0;

    switch (operator) {
        case "+": 
            rez = n1 + n2;
            if(rez % 2 == 0) {
                console.log(`${n1} ${operator} ${n2} = ${rez} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${rez} - odd`);
            }
        break;
        case "-": 
            rez = n1 - n2;
            if(rez % 2 == 0) {
                console.log(`${n1} ${operator} ${n2} = ${rez} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${rez} - odd`);
            } break;
        case "*": 
            rez = n1 * n2;
            if(rez % 2 == 0) {
                console.log(`${n1} ${operator} ${n2} = ${rez} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${rez} - odd`);
            }
        break;
        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                rez = (n1 / n2).toFixed(2);
                console.log(`${n1} ${operator} ${n2} = ${rez}`);
            }
        break; 
        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                rez = (n1 % n2);
                console.log(`${n1} ${operator} ${n2} = ${rez}`);
            }
        break;
    }
}

operationsBetweenNumbers(["10", "0", "%"]);