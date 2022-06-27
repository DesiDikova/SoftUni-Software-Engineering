function sequence2k1(input) {
    let n = Number(input[0]);
    let counter = 0;

    while (true) {
        counter = (counter * 2) + 1;
        
    if (counter > n) {
        break;
        }
        console.log(counter);
    }
}

sequence2k1([31]);