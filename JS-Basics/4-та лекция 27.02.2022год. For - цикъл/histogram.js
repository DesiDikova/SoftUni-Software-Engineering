function histogram(input) {
    let index = 0;

    let n = Number(input[index]);
    index++;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 0; i < n; i++) {
        let num = Number(input[index]);
        index++;
        if (num < 200) {
            p1 ++;
        } else if (num >= 200 && num <= 399) {
            p2 ++;
        } else if (num >= 400 && num <= 599) {
            p3 ++;
        } else if (num >= 600 && num <= 799) {
            p4 ++;
        } else {
            p5 ++;
        }
    }
    let p1sum = p1 / n * 100;
    let p2sum = p2 / n * 100; 
    let p3sum = p3 / n * 100; 
    let p4sum = p4 / n * 100; 
    let p5sum = p5 / n * 100; 

    console.log(p1sum.toFixed(2) + "%");
    console.log(p2sum.toFixed(2) + "%");
    console.log(p3sum.toFixed(2) + "%");
    console.log(p4sum.toFixed(2) + "%");
    console.log(p5sum.toFixed(2) + "%"); 
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);

