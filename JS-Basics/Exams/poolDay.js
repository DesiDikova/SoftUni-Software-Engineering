function poolDay(input) {

    let numberPeople = Number(input[0]); //брой на хората
    let tax = Number(input[1]); //такса вход
    let priceOneDeckChair = Number(input[2]); //цена за един шезлонг
    let priceOneUmbrella = Number(input[3]); //цена за един чадър

    let totalTax = tax * numberPeople; //обща - такса вход за всеки човек
    let numberDeckChair = Math.ceil(numberPeople * 0.75); //брой използвани шезлонги
    let priceDeckChair = numberDeckChair * priceOneDeckChair; //цена за използвани шезлонги
    let numberUmbrella = Math.ceil(numberPeople / 2); //брой използвани чадъри
    let priceUmbrella = numberUmbrella * priceOneUmbrella; //цена за използвани чадъри
    let totalSum = totalTax + priceDeckChair + priceUmbrella; //сума, която трябва да се заплати
    console.log(`${totalSum.toFixed(2)} lv.`)

}

poolDay(["50", "6", "8", "4"]);
