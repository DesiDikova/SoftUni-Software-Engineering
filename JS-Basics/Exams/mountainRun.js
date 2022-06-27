function mountainRun(input) {

    let recordInSecond = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondForOneMeters = Number(input[2]);

    let time = distanceInMeters * timeInSecondForOneMeters;
    let delay = Math.floor(distanceInMeters / 50) * 30;
    let totalTime = time + delay;
    let difference = totalTime - recordInSecond;

    if (totalTime < recordInSecond) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log (`No! He was ${difference.toFixed(2)} seconds slower.`)
    }
}

mountainRun(["1377",
"389",
"3"])


