function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let finish = Number(input[1]);

    let sum = "";

    for (let a = start; a <= finish; a++) {
       let num = " " + a;
       let add = 0;
       let even = 0;
       for (let y = 0; y <= num.length; y++) {
           let currentNum = Number(num.charAt(y));
           if (y % 2 === 0) { 
               even += currentNum;
           } else {
               add += currentNum;
           }
       }
       if (even === add) {
           sum += `${a} `;
       }
    }
    console.log(sum);
}

equalSumsEvenOddPosition(["100000", "100050"]);
