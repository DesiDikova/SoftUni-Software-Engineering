


// function balls(input) {

//     let numBalls = Number(input[0]);

//     let countRedBalls = 0;
//     let countOrangeBalls = 0;
//     let countYellowBalls = 0;
//     let countWhiteBalls = 0;
//     let countBlackBalls = 0;
//     let countDiferent = 0;
    
//     let countTotalBalls = 0;

//     for (let i = 1; i <= numBalls; i++) {
//         let color = input[i];
//         if (color === "red") {
//             countRedBalls ++;
//             countTotalBalls += 5;
//         } else if (color === "orange") {
//             countOrangeBalls++;
//             countTotalBalls += 10;
//         } else if (color === "yellow") {
//             countYellowBalls++;
//             countTotalBalls += 15;
//         } else if (color === "white") {
//             countWhiteBalls++;
//             countTotalBalls += 20;
//         } else if (color === "black") {
//             countBlackBalls++;
//             countTotalBalls = Math.floor(countTotalBalls / 2);
//         } else if (color !== "red" && color !== "orange" && color !== "yellow" && color !== "white" && color !== "black"){
//             countDiferent++;
//         }
//     } 
//     console.log(`Total points: ${countTotalBalls}`);
//     console.log(`Red balls: ${countRedBalls}`);
//     console.log(`Orange balls: ${countOrangeBalls}`);
//     console.log(`Yellow balls: ${countYellowBalls}`);
//     console.log(`White balls: ${countWhiteBalls}`);
//     console.log(`Other colors picked: ${countDiferent}`); 
//     console.log(`Divides from black balls: ${countBlackBalls}`);
// }
        
// balls (["5", "red", "red", "ddd", "ddd", "ddd"]);


