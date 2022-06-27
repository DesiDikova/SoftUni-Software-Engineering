function fitnessCenter(input) {

    let index = 0;
    let numberPeople = input[index];
    index++;
    
    let numberBack = 0;
    let numberChest = 0;
    let numberLegs = 0;
    let numberAbs = 0;
    let numberProteinShake = 0;
    let numberProteinBar = 0;
    let percentageTtrainees = 0;
    let percentageBuyingProtein = 0;

   for(let i = 1; i <= numberPeople; i++) {
    let fitnessActivity = input[index];
    index++;

    switch(fitnessActivity){
        case "Back": numberBack ++; percentageTtrainees++; break;
        case "Chest": numberChest++; percentageTtrainees++; break;
        case "Legs": numberLegs++; percentageTtrainees++; break;
        case "Abs": numberAbs++; percentageTtrainees++; break;
        case "Protein shake": numberProteinShake++; percentageBuyingProtein++; break;
        case "Protein bar": numberProteinBar++; percentageBuyingProtein++; break
    }

   }
   
   console.log(`${numberBack} - back`);
   console.log(`${numberChest} - chest`);
   console.log(`${numberLegs} - legs`);
   console.log(`${numberAbs} - abs`);
   console.log(`${numberProteinShake} - protein shake`);
   console.log(`${numberProteinBar} - protein bar`);
   console.log(`${(percentageTtrainees / numberPeople * 100).toFixed(2)}% - work out`);
   console.log(`${(percentageBuyingProtein / numberPeople * 100).toFixed(2)}% - protein`);

}

fitnessCenter(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);

//(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"])
