function sumSeconds(input) {
    let secondOne = Number(input[0]);
    let secondTwo = Number(input[1]);
    let secondThree = Number(input[2]);

    let sumSecond = secondOne + secondTwo + secondThree;
    let min = Math.floor(sumSecond / 60);
    let seconds = sumSecond % 60;

    if(seconds < 10) {
        console.log(`${min}:0${seconds}`);
    } else {
        console.log(`${min}:${seconds}`);
    }
}

sumSeconds(["14", "12", "10"])