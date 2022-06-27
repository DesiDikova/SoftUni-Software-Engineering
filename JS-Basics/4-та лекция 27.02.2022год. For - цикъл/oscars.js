function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let pointsFinish = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;


    for(let i = 0; i < n; i++) {
        let nameOfTheEvaluator = input[index];
        index++;
        let points = Number(input[index]);
        index++;

        let totalPoints = nameOfTheEvaluator.length * points / 2
        pointsFinish += totalPoints;

        if(pointsFinish > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${pointsFinish.toFixed(1)}!`);
            break;
        }
    }
    if(pointsFinish <= 1250.5) {
        let diff = Math.abs(pointsFinish - 1250.5);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
