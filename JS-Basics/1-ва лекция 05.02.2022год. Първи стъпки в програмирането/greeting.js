// Напишете функция, която получава име на човек и отпечатва "Hello, <name>!", където <name> е
// въведеното име от конзолата.

    // Конкатенация
function greeting(input) {
    let name = input[0];
    let greeting = "Hello, " + name + "!"; 
    
    console.log(greeting);
}

greeting(["Desislava"]) 

    // Интерполация  
function greeting(input) {
    let name = input[0];
    let greeting = `Hello, ${name}!`
    
    console.log(greeting);
}

greeting(["Desislava"]) 