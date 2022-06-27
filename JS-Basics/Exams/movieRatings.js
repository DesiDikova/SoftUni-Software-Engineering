function movieRatings(input) {

    let index = 0;
    let numberMovie = Number(input[index]);
    index++;

    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxRatingName = "";
    let minRating = Number.MAX_SAFE_INTEGER;
    let minRatingName = "";
    let sumRating = 0;

    for(let i = 0; i < numberMovie; i++) {
        let name = input[index];
        index++;
        let rating = Number(input[index]);
        index++;

        sumRating += rating

        if(rating > maxRating) {
            maxRating = rating;
            maxRatingName = name;
        }

        if(rating < minRating) {
            minRating = rating;
            minRatingName = name;
        }
    }

    console.log(`${maxRatingName} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingName} is with lowest rating: ${minRating.toFixed(1)}`);

    let average = sumRating / numberMovie;
    console.log(`Average rating: ${average.toFixed(1)}`);

}

movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])
