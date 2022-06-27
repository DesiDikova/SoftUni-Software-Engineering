function safari(input) {

    let budget = Number(input[0]);
    let litersOfFuel = Number(input[1]);
    let day = input[2];

    let totalLitersOfFuel = litersOfFuel * 2.10;
    let totalSum = totalLitersOfFuel + 100;

    switch(day) {
        case "Saturday": totalSum *= 0.90;break;
        case "Sunday": totalSum *= 0.80;break;
    }
    let diff = Math.abs(budget - totalSum);

    if(budget >= totalSum) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
}

safari(["1000", "10", "Sunday"]);


