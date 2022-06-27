function oldBooks(input){
    let favoriteBook = input[0];
    let index = 1;
    let nextBook = input[index];
    let isFoundBook = false;
    

    while (nextBook !== "No More Books") {  
    if (nextBook === favoriteBook) {
        isFoundBook = true;
        console.log(`You checked ${index - 1} books and found it.`);
        break;
    } 

    index++;
    nextBook = input[index];

    } 

    if (isFoundBook === false) {
        console.log("The book you search is not here!");
        console.log (`You checked ${index - 1} books.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);


