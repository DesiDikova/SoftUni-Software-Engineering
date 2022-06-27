function cleverLily1(input) {
    let index = 0;
    let age = Number(input[index]);
    index++;
    let priceWoshMashine = Number(input[index]);
    index++;
    let priceToy = Number(input[index]);
    index++;

    let money = 0;
    let sumbirhday = 10;
    let toy = 0;
    let sumFinish = 0;
    let sumToy = 0;

    for(let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += sumbirhday;
            sumbirhday += 10;
            money --;
        } else {
            toy ++;
            
        }
    }

    money += toy * priceToy;

    let diff = 0;
    diff = Math.abs(money - priceWoshMashine);
    
    if (money >= priceWoshMashine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`); 
    }    
}  

cleverLily1(["21", "1570.98", "3"]);