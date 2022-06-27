function barcodeGenerator(input) {
    let start = input[0];
    let finish = input[1];
    
    //let combinations = 0;

    for (let a = 0; a <= finish; a++) {
        for (let b = start; b <= finish; b++) {
            for (let c = start; c <= finish; c++) {
                for (let d = start; d <= finish; d++) {
                    //combinations++;
                    if (a % 2 !== 0) {
                        
                    }
                }
            }
        }
    }
    console.log(buff);
}

barcodeGenerator(["2345", "6789"]);
