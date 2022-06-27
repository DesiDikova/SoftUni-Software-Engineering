function password(input) {
    let userName = input[0];
    let pass = input[1];
    let index = 2;

    while(true) {
        let corectPass = input[index];
        index++;

        if(corectPass === pass) {
            break;
        }
    }
    console.log(`Welcome ${userName}!`);
}

password(["Gosho", "secret", "secret"]); 