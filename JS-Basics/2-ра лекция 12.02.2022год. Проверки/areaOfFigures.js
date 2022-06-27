function areaOfFigures(input) {
    let geometricShape = input[0];
    let a = Number(input[1]);
   
    if(geometricShape === "square") {
        let face = (a * a).toFixed(3);
        console.log(face);
    } else if(geometricShape === "rectangle") {
        let b = Number(input[2]);
        let face = (a * b).toFixed(3);
        console.log(face);
    } else if(geometricShape === "circle") {
        let face = (Math.PI * a * a).toFixed(3);
        console.log(face);
    }
    else if(geometricShape === "triangle") {
        let b = Number(input[2]);
        let face = ((a * b) / 2).toFixed(3);
        console.log(face);
    }
}

areaOfFigures(["triangle", "4.5", "20"]);