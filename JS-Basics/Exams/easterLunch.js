function easterLunch(input) {

    let numberOfEasterCakes = Number(input[0]);
    let numberOfEggShells = Number(input[1]);
    let kilogramsOfCookies = Number(input[2]);

    let sumEasterCakes = numberOfEasterCakes * 3.20; //цена за 3-те броя козунаци
    let sumCookies = kilogramsOfCookies * 5.40; //цена за 3-те килограма курабии
    let sumEggShells = numberOfEggShells * 4.35; //цена за 2-та картона с яйца
    let paintForEggs = (numberOfEggShells * 12) * 0.15; //цена на боята за яйца, за всички налични картони

    let totalSum = sumEasterCakes + sumCookies + sumEggShells + paintForEggs;
    console.log(totalSum.toFixed(2));
}

easterLunch(["4", "4", "3"]);
