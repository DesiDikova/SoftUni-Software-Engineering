function footballTournament(input) {

    let index = 0;
    let name = input[index]; //име на футболния отбор
    index++;
    let num = Number(input[index]); //брой изиграни срещи през настоящия сезон 
    index++;

    let pointsW = 0; //точки за спечелени игри
    let pointsD = 0; //точки за игри, завършили наравно
    let pointsL = 0; //точки за загубени игри

    let numW = 0; //брой спечелени игри}"
    let numD = 0; //брой игри, завършили наравно
    let numL = 0; //брой загубени игри

    if(num === 0) {
        console.log(`${name} hasn't played any games during this season.`); //ако отборът не е изиграл нито един мач 
        return;
    }
    
    for(let rez = 0; rez < num; rez++) {
        let rez = input[index]; //резултат от изиграната среща 
        index++;

        if(rez === "W") {
            pointsW +=3; //отборът е победител и получава 3 точки
            numW++;
        } else if(rez === "D") {
            pointsD +=1; //срещата е завършила без победител и отборът получава 1 точка
            numD++;
        } else  if(rez === "L") {
            pointsL ++; //отборът е загубил срещата и не получава точки
            numL++;
        }   
    }
    let numberWonPoints = pointsW + pointsD; //брой спечелени точки

    console.log(`${name} has won ${numberWonPoints} points during this season.`);
	console.log(`Total stats:`);
	console.log(`## W: ${numW}`);
	console.log(`## D: ${numD}`);
	console.log(`## L: ${numL}`); 
	console.log(`Win rate: ${(100 / num * numW).toFixed(2)}%`);
}

footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
// (["Chelsea",
// "0"]);

