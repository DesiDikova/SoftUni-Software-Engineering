function minNumber(input) {
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;

    while (true) {
        let num = Number(input[index]);

        if (num < min) {
            min = num;
        }

        let data = input[index];

        if (data === "Stop") {
            break;
        }
        index++;
    }
    console.log(min);
}

minNumber(["100", "99", "80", "70", "Stop"]);
