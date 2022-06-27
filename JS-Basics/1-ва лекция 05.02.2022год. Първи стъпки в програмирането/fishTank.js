function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentage = Number(input[3]);

    let sizeOfTheAquarium = length * width * hight;
    let water = sizeOfTheAquarium * 0.001;
    let litersOfWater = water - water * percentage / 100;
    
    console.log(litersOfWater);
}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "])
