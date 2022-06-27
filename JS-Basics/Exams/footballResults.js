function footballResults(input) {

    let resultFirstMatch = input[0];
    let resultSecondMatch = input[1];
    let resultThirdMatch = input[2];

    let resA = resultFirstMatch.charAt(0);
    let resB = resultFirstMatch.charAt(2);

    let resC = resultSecondMatch.charAt(0);
    let resD = resultSecondMatch.charAt(2);

    let resE = resultThirdMatch.charAt(0);
    let resF = resultThirdMatch.charAt(2);

    let victory = 0;
    let loss = 0; 
    let equality = 0;

    if (resA > resB) {
        victory++;
    } else if (resA < resB) {
        loss++;
    } else if (resA = resB) {
        equality++;
    }

    if (resC > resD) {
        victory++;
    } else if (resC < resD) {
        loss++;
    } else if (resC = resD) {
        equality++;
    }

    if (resE > resF) {
        victory++;
    } else if (resE < resF) {
        loss++;
    } else if (resE = resF) {
        equality++;
    }

    console.log(`Team won ${victory} games.`);
    console.log(`Team lost ${loss} games.`);
    console.log(`Drawn games: ${equality}`);

}

footballResults(["3:1", "0:2", "0:0"]);
