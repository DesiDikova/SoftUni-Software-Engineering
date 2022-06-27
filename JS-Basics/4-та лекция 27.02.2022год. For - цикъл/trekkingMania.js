function trekkingMania(input) {

    let countGroop = Number(input[0]);

    let sumPeopleInTheGroops = 0;
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    let a4 = 0;
    let a5 = 0;
    
    for (let index = 1; index <= countGroop; index++) {
        let peopleInTheGroop = Number(input[index]);
        sumPeopleInTheGroops += peopleInTheGroop;
        
        if (peopleInTheGroop <= 5) {
            a1 += peopleInTheGroop;
        } else if (peopleInTheGroop <= 12) {
            a2 += peopleInTheGroop;
        } else if (peopleInTheGroop <= 25) {
            a3 += peopleInTheGroop;
        } else if (peopleInTheGroop <= 40) {
            a4 += peopleInTheGroop;
        } else if (peopleInTheGroop >=41) {
            a5 += peopleInTheGroop;
        }
    }     

    console.log(`${((a1 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);
    console.log(`${((a2 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);
    console.log(`${((a3 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);
    console.log(`${((a4 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);
    console.log(`${((a5 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);

}

trekkingMania (["10","10","5","1","100","12","26","17","37","40","78"]);



 