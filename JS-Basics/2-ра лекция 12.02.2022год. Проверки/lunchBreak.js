function lunchBreak(input) {
    let nameMovie = input[0];
    let timeMovie = Number(input[1]);
    let lunchBreak = Number(input[2]);

    let lunch = lunchBreak * 1/8;
    let relax = lunchBreak * 1/4;
    let time = lunchBreak - (lunch + relax);
    let necessaryTime = Math.ceil(Math.abs(time - timeMovie));
    
     if(time >= timeMovie) {
         console.log(`You have enough time to watch ${nameMovie} and left with ${necessaryTime} minutes free time.`);
     } else {
         console.log(`You don't have enough time to watch ${nameMovie}, you need ${necessaryTime} more minutes.`);
     }
}

lunchBreak(["Teen Wolf", "48", "60"]);


