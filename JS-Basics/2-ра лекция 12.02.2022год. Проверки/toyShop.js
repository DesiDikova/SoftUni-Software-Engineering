function toyShop(input) {
    let priceHoliday = Number(input[0]);
    let puzzles = Number(input[1]);
    let dools = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let priceToys = puzzles * 2.60 + dools * 3 + bear * 4.10 + minion * 8.20 + truck * 2;
    let numberToy = puzzles + dools + bear + minion + truck;
    
    if(numberToy >= 50) {
        priceToys = priceToys - (priceToys * 0.25);
    }
    
    priceToys = priceToys - (priceToys * 0.10);
    
    let diff = Math.abs(priceToys - priceHoliday).toFixed(2);

    if(priceToys >= priceHoliday) {
        console.log(`Yes! ${diff} lv left.`); 
    } else {
        console.log(`Not enough money! ${diff} lv needed.`);
    }  
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);