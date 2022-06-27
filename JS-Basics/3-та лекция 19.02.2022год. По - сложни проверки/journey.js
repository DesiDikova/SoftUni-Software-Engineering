function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;

    if (budget <= 100) {
        if(season === "summer") {
            price = (budget * 0.30).toFixed(2);
            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${price}`); 
        } else {
            price = (budget * 0.70).toFixed(2);
            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${price}`);
        }
    }
    else if (budget > 100 && budget <= 1000) {
        if(season === "summer") {
            price = (budget * 0.40).toFixed(2);
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${price}`); 
        } else {
            price = (budget * 0.80).toFixed(2);
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${price}`);
        }
    } else {
        price = (budget * 0.90).toFixed(2);
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${price}`);
    }
}

journey (["1500", "summer"]);