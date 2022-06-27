function godzillaVsKong(input) {
    let movie = Number(input[0]);
    let extras = Number(input[1]);
    let clothing = Number(input[2]);

    let decor = movie * 0.10;

    let sumCloting = extras * clothing;

    if(extras > 150){
        sumCloting = sumCloting - (sumCloting * 0.10);
    }

    let sumDecorCloting = decor + sumCloting;
    let diff = Math.abs(movie - sumDecorCloting).toFixed(2);

    if(sumDecorCloting > movie){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff} leva left.`);
    }
}

godzillaVsKong(["9587.88", "222", "55.68"]);

