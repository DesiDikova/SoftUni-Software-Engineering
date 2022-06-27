function foodForPets(input) {
    let index = 0;
    let day = Number(input[index]);
    index++;
    let food = Number(input[index]);
    index++;

    let totalDogFood = 0;
    let totalCatFood = 0;
    let biscuits = 0;
   
    for (let i = 1; i <= day; i++) {
        let dogFood = Number(input[index]);
        totalDogFood += dogFood;
        index++;
        let catFood = Number(input[index]);
        totalCatFood += catFood;
        index++;
        
        if (i % 3 === 0) {
            biscuits += (dogFood + catFood) * 0.10;
        }
    }
       
        let finishFood = totalDogFood + totalCatFood;

console.log(`Total eaten biscuits: ${Math.ceil(biscuits)}gr.`)
console.log(`${(finishFood / food * 100).toFixed(2)}% of the food has been eaten.`);
console.log(`${(totalDogFood / finishFood * 100).toFixed(2)}% eaten from the dog.`);
console.log(`${(totalCatFood / finishFood * 100).toFixed(2)}% eaten from the cat.`);

    }

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);

// function foodForPets(input) {
//     let index = 0;
//     let day = Number(input[index]);
//     index++;
//     let food = Number(input[index]);
//     index++;

//     let totalDogFood = 0;
//     let totalCatFood = 0;
//     let biscuits = 0;
//     let countDay = 1;
   
//     while(countDay <= day) {
//         let dogFood = Number(input[index]);
//         totalDogFood += dogFood;
//         index++;
//         let catFood = Number(input[index]);
//         totalCatFood += catFood;
//         index++;

//         if (countDay % 3 === 0) {
//             biscuits += (dogFood + catFood) * 0.10;
//         }
//         countDay++;
//     }
       
//         let finishFood = totalDogFood + totalCatFood;

// console.log(`Total eaten biscuits: ${Math.ceil(biscuits)}gr.`)
// console.log(`${(finishFood / food * 100).toFixed(2)}% of the food has been eaten.`);
// console.log(`${(totalDogFood / finishFood * 100).toFixed(2)}% eaten from the dog.`);
// console.log(`${(totalCatFood / finishFood * 100).toFixed(2)}% eaten from the cat.`);

//     }

// foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);



