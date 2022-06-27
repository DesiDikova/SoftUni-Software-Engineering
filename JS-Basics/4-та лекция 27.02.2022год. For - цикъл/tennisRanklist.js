function tennisRanklist(input) {
        let countTurnir = Number(input[0]);
        let firstPoints = Number(input[1]); 
    
        let finishPoints = firstPoints;
        let sumW = 0;
    
        for (let index = 2; index < input.length; index++) {
            let position = input[index];
            
            switch (position) { 
                case "W": finishPoints += 2000; sumW++; break;
                case "F": finishPoints += 1200; break;
                case "SF": finishPoints += 720; break;
            } 
        }  
    
        let averagePoints = (finishPoints - firstPoints) / countTurnir;
        console.log(`Final points: ${finishPoints}`); 
        console.log(`Average points: ${Math.floor(averagePoints)}`);
        console.log (`${((sumW / countTurnir) * 100).toFixed(2)}%`);
    }
    
    tennisRanklist (["5","1400","F","SF","W","W","SF"]);
     