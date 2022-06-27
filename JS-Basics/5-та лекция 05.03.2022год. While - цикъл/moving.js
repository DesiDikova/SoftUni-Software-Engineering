function moving(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let size = w * l * h;

    let command = Number(input[index]);
    index++;

    // let isFuulSize = true;

    while (command !== "Done") {
        let numberBoxs = Number(command);
        
        size -= numberBoxs;

        if (size < 0) {    
            console.log(`No more free space! You need ${Math.abs(size)} Cubic meters more.`);
            // isFuulSize = false;
            break;
        }
        command = input[index];
        index++;
    }

    if (size >= 0) {
        console.log(`${size} Cubic meters left.`);
    }

    // if (isFuulSize) {
    //     console.log(`${size} Cubic meters left.`);
    // }
}
//moving(["10", "1", "2", "4", "6", "Done"]);
moving(["10", "10", "2", "20", "20", "20", "20", "122"]); 



