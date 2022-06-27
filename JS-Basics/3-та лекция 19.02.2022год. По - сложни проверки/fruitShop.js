
// function fruitShop(input) {
//     let fruit = input[0];
//     let day = input[1];
//     let quantity = Number(input[2]);

//     let isWorkDay = null;

//     switch (day)
//     {
//         case "Monday":
//         case "Tuesday":
//         case "Wednesday":
//         case "Thursday":
//         case "Friday":
//             isWorkDay = true;
//         break;
    
//         case "Saturday":
//         case "Sunday":
//             isWorkDay = false;
//             break;
//     }
    
//     if (isWorkDay === null){
//         console.log(`error`);
//         return ;
//     }

//     let price = null;
    
//     switch (fruit) { 
//         case "banana": 
//                 price = (isWorkDay ? 2.50 : 2.70); 
//             break;
//         case "apple": 
//                 price = (isWorkDay ? 1.20 : 1.25);
//             break;
//         case "orange": 
//                 price = (isWorkDay ? 0.85 : 0.90);
//             break; 
//         case "grapefruit":
//                 price = (isWorkDay ? 1.45 : 1.60);
//             break; 
//         case "kiwi":
//                 price = (isWorkDay ? 2.70 : 3.00);
//             break;
//         case "pineapple": 
//                 price = (isWorkDay ? 5.50 : 5.60);
//             break;
//         case "grapes": 
//                 price = (isWorkDay ? 3.85 : 4.20);
//                 break;
//         default: console.log(`error`); break;
//     } 

//     if (price != null){
//         price *= quantity;

//         console.log(price.toFixed(2));  
//     }
// }
  
// fruitShop (["orange",
// "Sunday",
// "3"])


function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let isWorkDay = null;
    let price = null;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            isWorkDay = true;
        break;
        case "Saturday":
        case "Sunday":
            isWorkDay = false;
        break;
    }

    if (isWorkDay === null) {
        console.log(`error`);
        return;
    }
    switch (fruit) {
        case "banana": price = (isWorkDay ? 2.50 : 2.70);break;
        case "apple": price = (isWorkDay ? 1.20 : 1.25);break;
        case "orange": price = (isWorkDay ? 0.85 : 0.90);break;
        case "grapefruit": price = (isWorkDay ? 1.45 : 1.60);break;
        case "kiwi": price = (isWorkDay ? 2.70 : 3.00);break;
        case "pineapple": price = (isWorkDay ? 5.50 : 5.60);break;
        case "grapes": price = (isWorkDay ? 3.85 : 4.20);break;
    }
    if (price === null) {
        console.log(`error`);
    } else {
        price *= quantity;
        console.log(price.toFixed(2));
    }
}

fruitShop (["apple",
"Tuesday",
"2"])





