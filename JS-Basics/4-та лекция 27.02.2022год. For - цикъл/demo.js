//     Zad.1 Numbers Ending in 7
// function demo(input) {

//     for (let i = 7; i < 1000; i += 10){
//         console.log(i);
//     }
// }

// demo ([]);

    // Zad.2 Multiplication Table

// function demo(input) {
//     let num = Number(input[0]);

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i} * ${num} = ${i*num}`);
//     }
// }

// demo (["5"]);

    // Zad.3 Histogram
// function demo(input) {
//     let num = Number(input[0]);

//     let p1 = 0;
//     let p2 = 0;
//     let p3 = 0;
//     let p4 = 0;
//     let p5 = 0;

//     for (let i = 1; i <= num; i++) {
//         let curentNum = Number(input[i]);
       
//         if (curentNum < 200) {
//             p1 ++;
//         } else if (curentNum <= 399) {
//             p2 ++;
//         } else if (curentNum <= 599) {
//             p3 ++;
//         } else if (curentNum <= 799) { 
//             p4 ++;
//         } else if (curentNum >= 800) {
//             p5 ++;
//         }
//     }
        // console.log(`${(p1 / num * 100).toFixed(2)}%`);
        // console.log(`${(p2 / num * 100).toFixed(2)}%`);
        // console.log(`${(p3 / num * 100).toFixed(2)}%`);
        // console.log(`${(p4 / num * 100).toFixed(2)}%`);
        // console.log(`${(p5 / num * 100).toFixed(2)}%`);
// }

// demo (["3", "1", "2", "999"]);

        // Zad.4 Clever Lily
// function demo(input) {
//     let ageLily = Number(input[0]);
//     let priceWoshingMashine = Number(input[1]);
//     let priceToy = Number(input[2]);

//     let sumForEvenBirthdays = 10;
//     let countToys = 0;
//     let sumBirhday = 0;

//     for (let i = 1; i <= ageLily; i++){
//         if (i % 2 === 0) {
//             sumBirhday += sumForEvenBirthdays;
//             sumForEvenBirthdays += 10;
//             sumBirhday --;
//         } else {
//             countToys ++;
//         }
//     } 
    
//     let sumToys = countToys * priceToy;
//     let totalSum = sumBirhday + sumToys;

//     if(totalSum >= priceWoshingMashine) {
//         console.log(`Yes! ${(totalSum - priceWoshingMashine).toFixed(2)}`);
//     } else {
//         console.log(`No! ${(priceWoshingMashine - totalSum).toFixed(2)}`);
//     }   
// }

// demo(["21","1570.98","3"]); 

    // Zad.5 / Salary
// function demo (input) {
//     let openTab = Number(input[0]);
//     let salary = Number(input[1]);
//     let inputL = input.length;

//     for (let i = 2; i < inputL; i++) {
//         let tab = input[i];
    
//         switch (tab) {
//             case "Facebook": salary -= 150; break;
//             case "Instagram": salary -= 100; break;
//             case "Reddit": salary -= 50; break;
//         }
//     }  
    // if (salary <= 0) {
    //     console.log(`You have lost your salary.`);
    // } else {
    //     console.log(`${salary}`);
    // }
// }    

// demo (["3","500","Github.com","Stackoverflow.com","softuni.bg"]);

        // Zad.6/Oscary
function demo(input) { 
    
    let nameActor = input[0];
    let startingPoints = Number(input[1]);
        
    let indexL = input.length;

    for (let index = 3; index < indexL; index++) {
        if (index % 2 !== 0) {
            let points = index +1;  
            let sum = input[index].length * Number(input[points]) / 2; 
            startingPoints += sum; 
        }
        if (startingPoints > 1250.5) {
            break;
        }
    }  
    
    if (startingPoints > 1250.5) {
        console.log (`Congratulations, ${nameActor} got a nominee for leading role with ${(startingPoints - 1250.5).toFixed(1)}!`);
    } else {
        console.log (`Sorry, ${nameActor} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }
}

demo (["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);

    // Zad.8 Tennis Ranklist

// function demo(input) {
//     let countTurnir = Number(input[0]);
//     let firstPoints = Number(input[1]);

//     let finishPoints = firstPoints;
//     let sumW = 0;

//     for (let index = 2; index < input.length; index++) {
//         let position = input[index];
        
//         switch (position) { 
//             case "W": finishPoints += 2000; sumW++; break;
//             case "F": finishPoints += 1200; break;
//             case "SF": finishPoints += 720; break;
//         } 
//     }  

//     let averagePoints = (finishPoints - firstPoints) / countTurnir;
//     console.log(`Final points: ${finishPoints}`); 
//     console.log(`Average points: ${Math.floor(averagePoints)}`);
//     console.log (`${((sumW / countTurnir) * 100).toFixed(2)}%`);
// }

// demo (["5",
// "1400",
// "F",
// "SF",
// "W",
// "W",
// "SF"]);


    // Zad.7/Trekking Mania

// function demo(input) {

//     let countGroop = Number(input[0]);

//     let sumPeopleInTheGroops = 0;
//     let a1 = 0;
//     let a2 = 0;
//     let a3 = 0;
//     let a4 = 0;
//     let a5 = 0;
    
//     for (let index = 1; index <= countGroop; index++) {
//         let peopleInTheGroop = Number(input[index]);
//         sumPeopleInTheGroops += peopleInTheGroop;
        
//         if (peopleInTheGroop <= 5) {
//             a1 += peopleInTheGroop;
//         } else if (peopleInTheGroop <= 12) {
//             a2 += peopleInTheGroop;
//         } else if (peopleInTheGroop <= 25) {
//             a3 += peopleInTheGroop;
//         } else if (peopleInTheGroop <= 40) {
//             a4 += peopleInTheGroop;
//         } else if (peopleInTheGroop >=41) {
//             a5 += peopleInTheGroop;
//         }
//     }     

//     console.log(`${((a1 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);
//     console.log(`${((a2 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);
//     console.log(`${((a3 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);
//     console.log(`${((a4 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);
//     console.log(`${((a5 / sumPeopleInTheGroops) * 100).toFixed(2)}%`);

// }

// demo (["10","10","5","1","100","12","26","17","37","40","78"]);



