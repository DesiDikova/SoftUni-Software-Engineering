function basketballEquipment(input) {

    let yearTax = Number(input[0]);

    let priceSneakers = yearTax * 0.60;
    let priceTeam = priceSneakers * 0.80;
    let priceBall = priceTeam / 4;
    let accessories = priceBall / 5;

    let costs = yearTax + priceSneakers + priceTeam + priceBall + accessories;

    console.log(costs.toFixed(2));
    
}

basketballEquipment(["230"]);