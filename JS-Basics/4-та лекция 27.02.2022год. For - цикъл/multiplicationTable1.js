function multiplicationTable1(input) {
    let num = Number(input[0]);
    sum = 0;

    for(i = 1; i <= 10; i++) {
        sum = i * num;
        console.log(`${i} * ${num} = ${sum}`);
    }
}

multiplicationTable1(["5"]);