function basketballEquipment(input) {
    let yearTax = input[0];
    let sneakers = yearTax - (yearTax * 0.40);
    let team = sneakers - (sneakers * 0.20);
    let ball = team * 0.25;
    let acsesoary = ball * 0.20;

    let costs = yearTax + sneakers + team + ball + acsesoary;

    console.log(costs);
}

basketballEquipment(["550"])