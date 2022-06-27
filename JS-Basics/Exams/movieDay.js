function movieDay(input) {

    let timeForPicture = Number(input[0]); //време за снимки 
    let numberScenes = Number(input[1]); //брой сцени  
    let timeScenes = Number(input[2]); //времетраене на сцена 

    let timeForPreparationTerrain = timeForPicture * 0.15; //време, необходимо за подготовка на терена
    let totalTimeForPicture = numberScenes * timeScenes + timeForPreparationTerrain; //общо времетраене за снимане на всички сцени

    let diff = Math.abs(totalTimeForPicture - timeForPicture);
    if(timeForPicture >= totalTimeForPicture) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(diff)} minutes left!`); //ако времето за заснемане на филма стигне - да се отпечата останалото време
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.ceil(diff)} minutes.`); //ако времето не стигне - да се отпечата нужното време
    }
}

movieDay(["135", "5", "20"]);
