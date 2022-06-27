function seriesCalculator(input) {

    let nameSeries = input[0]; //Име на сериал 
    let numberSeasons = Number(input[1]); //Брой сезони
    let numberEpisodes = Number(input[2]); //Брой епизоди
    let timeWithoutAdvertising = Number(input[3]); //Времетраене на епизод без рекламите 

    let timeWithAdvertising = timeWithoutAdvertising * 1.20; //Времетраене на епизод с рекламите 
    let extraTime = numberSeasons * 10; //Допълнително време от специалните епизоди
    let finishTime = timeWithAdvertising * numberEpisodes * numberSeasons + extraTime; //време необходимо за изгледане всички епизоди на един сериал 
    console.log(`Total time needed to watch the ${nameSeries} series is ${Math.floor(finishTime)} minutes.`);
}

seriesCalculator//(["Lucifer", "3", "18", "55"]);
(["Riverdale",
"3",
"21",
"45"])


