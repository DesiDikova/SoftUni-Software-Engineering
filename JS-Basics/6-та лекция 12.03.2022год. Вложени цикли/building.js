function building(input) {

    let numberFloors = Number(input[0]);
    let numberRooms = Number(input[1]);

    for (let i = numberFloors; i > 0; i--) { 
        let buff = ""; 
        for (let j = 0; j < numberRooms; j++) {
            if (i === numberFloors) {
               //buff += "L" + i + j + " ";
                buff += `L${i}${j} `
            } else if (i % 2 === 0) {
                buff += `O${i}${j} `;
            } else {
                buff += `A${i}${j} `; 
            }
        } 
        console.log(buff);
    } 
}

building (["6", "4"]);