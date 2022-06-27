function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if(gender === "m") {
        if(age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }   
    } else {
        if(age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}

personalTitles(["12", "f"]);


// ЗАЩО КОДА ТАКА НЕ РАБОТИ!!!!!!!

// function personalTitles(input) {
//     let gender = input[0];
//     let age = Number(input[1]);

//     if(gender === "m") {
//         if(age >= 16) {
//             console.log("Mr.");
//         } else {
//             console.log("Master");
//         }   
//     } else {
//         if(age >= 16) {
//             console.log("Ms.");
//         } else {
//             console.log("Miss");
//         }
//     }
// }

// personalTitles(["f", "12"]);
