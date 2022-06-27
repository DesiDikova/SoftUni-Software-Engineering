function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;

    let sizeCake = w * l;
    let command = Number(input[index]);
    index++;

    let isHaveCake = true;
    while (command !== "STOP") {
        let pieces = Number(command);

        sizeCake -= pieces;

        if (sizeCake < 0) {
            isHaveCake = false;
            console.log(`No more cake left! You need ${Math.abs(sizeCake)} pieces more.`);
            break;
        }
        command = (input[index]); 
        index++;
    }

    if (isHaveCake) {
        console.log(`${sizeCake} pieces are left.`);
    }
}

cake(["10", "2", "2", "4", "6", "STOP"]);

