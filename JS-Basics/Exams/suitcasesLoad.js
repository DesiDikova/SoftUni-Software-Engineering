function suitcasesLoad(input) {

    let sizeTrunk = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sumSuitcase = 0;
    let couner = 0;

    while(command !== "End") {

        let volumeSuitcase = Number(command);

        if (index % 3 == 0) {
            volumeSuitcase += volumeSuitcase * 0.10;
        }

        sumSuitcase += volumeSuitcase;

        if (sumSuitcase > sizeTrunk) {
            console.log(`No more space!`);
            console.log(`Statistic: ${couner} suitcases loaded.`);
            break;
        } 

        couner++;
        command = input[++index];

    }   
    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`); 
        console.log(`Statistic: ${couner} suitcases loaded.`); 
    }
}

suitcasesLoad(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])
