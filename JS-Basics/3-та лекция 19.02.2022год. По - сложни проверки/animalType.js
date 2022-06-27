function animalType(input) {
    let vid = input[0];

    switch (vid) {
        case "dog": console.log("mammal"); break;
        case "crocodile": 
        case "tortoise":
        case "snake": 
            console.log("reptile"); break;
        default: console.log("unknown"); break
    }
}

animalType(["crocodile"]);