function grandpaStavri(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;

    let liter = 0;
    let degrees = 0;
    let countDay = 0;

    for(let i = 0; i < n; i++) {
        countDay++;
        let countLiters = Number(input[index]);
        index++;
        let countDegrees = Number(input[index]);
        index++;

        liter += countLiters;
        degrees += countDegrees * countLiters;        
    }

    let allDegrees = degrees / liter;

    console.log(`Liter: ${liter.toFixed(2)}`);
    console.log(`Degrees: ${allDegrees.toFixed(2)}`);

    if(allDegrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if (allDegrees <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }
}

grandpaStavri(["2",
"200",
"43",
"200",
"40"])

