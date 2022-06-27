function maxNumber(input) {
    let index = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while (true) {
        let num = Number(input[index]);

        if (num > max) {
            max = num;
        }
        
        let data = input[index];
        if (data === "Stop") {
            break;
        }
        index++;
    }
    console.log(max);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
