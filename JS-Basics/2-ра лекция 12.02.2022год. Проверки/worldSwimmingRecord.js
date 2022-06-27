function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let distaceMeters = Number(input[1]);
    let timeForOneMeters = Number(input[2]);

    let time = distaceMeters * timeForOneMeters;
    let slowTime = Math.floor(distaceMeters / 15) * 12.5;
    let finishTime = (time + slowTime).toFixed(2);
    let diff = Math.abs(recordSeconds - finishTime).toFixed(2);
   
    if(finishTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${finishTime} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67","3017", "5.03"]);