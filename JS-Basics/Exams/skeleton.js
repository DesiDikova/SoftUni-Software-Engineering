function skeleton(input) {

    let minutesControl = Number(input[0]);
    let secondsControl = Number(input[1]);
    let length = Number(input[2]);
    let secondsFor100Meters = Number(input[3]);

    let totalSecondsControl = minutesControl * 60 + secondsControl;
    let delay = (length / 120) * 2.5;
    let lengthInSeconds = length / 100 * secondsFor100Meters;
    let timeInSeconds = (lengthInSeconds - delay).toFixed(3);

    if (timeInSeconds <= totalSecondsControl) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeInSeconds}.`);
    } else {
        console.log(`No, Marin failed! He was ${Math.abs(timeInSeconds - totalSecondsControl).toFixed(3)} second slower.`)
    }

}

skeleton(["1", "20", "1546", "12"]);
