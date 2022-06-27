function numberPyramid(input) {

    let n = Number(input[0]);
    let sum = 1;
    let full = false;

    for (let a = 1; a <= n; a++) {
        let buff = "";
        for (let b = 1; b <= a; b++) {
            buff += sum + " ";
            sum++;
            if (sum > n) {
                full = true;
                break;
            }
        }
        console.log(buff);
        
        if (full) {
            break;
        }
    }
}

numberPyramid(["15"]);