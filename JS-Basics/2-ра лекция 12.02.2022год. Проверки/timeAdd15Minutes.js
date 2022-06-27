function timeAdd15Minutes(input){
    let h = Number(input[0]);
    let m = Number(input[1]);

    let time = h * 60 + m;
    time = time + 15;

    let hours = Math.floor(time / 60);
    let minutes = time % 60;

    if(hours === 24){
        hours = 0;
    }
    
    if(minutes<10) {
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }
}

timeAdd15Minutes(["12", "49"]);