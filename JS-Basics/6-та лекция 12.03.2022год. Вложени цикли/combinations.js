function combinations(input){

    let n = Number(input[0]);
    let count = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                let combinations = x1 + x2 + x3;
                if (combinations === n) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

combinations(["25"]);