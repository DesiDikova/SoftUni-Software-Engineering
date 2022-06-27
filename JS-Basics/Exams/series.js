function series(input) {

    let index = 0;
    let budget = Number(input[index]); //бюджет
    index++;
    let numSeries = Number(input[index]); //брой сериали 
    index++;

    let totalPriceSeries = 0; //крайна цена на сериалите

    for(let i = 0; i < numSeries; i++) {
        let nameSeries = input[index]; //име на сериал 
        index++;
        let priceSeries = Number(input[index]); //цена за сериал 
        index++;
            //Някои от сериалите имат намаление:
        if(nameSeries === "Thrones") {
            priceSeries *= 0.50;
        } else if (nameSeries === "Lucifer") {
            priceSeries *= 0.60;
        } else if (nameSeries === "Protector") {
            priceSeries *= 0.70;
        } else if (nameSeries === "TotalDrama") {
            priceSeries *= 0.80;
        } else if (nameSeries === "Area") {
            priceSeries *= 0.90;
        }

        totalPriceSeries += priceSeries;
        
    }

    let diff = Math.abs(budget - totalPriceSeries);
    
    if(budget >= totalPriceSeries) { //ако бюджетът е по-голям или равен на цената на сериалите
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`); //останали пари
    } else { //ако бюджетът е по-малък от цената на сериалите
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`); //нужни пари
    }
}

series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
