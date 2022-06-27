function gymnastics(input) {

    let country = input[0];
    let gymnasticTool = input[1];

    let grades = 0;



    if (country === "Russia") {
        switch (gymnasticTool) {
            case "ribbon": grades = 9.100 + 9.400;break;
            case "hoop": grades = 9.300 + 9.800;break;
            case "rope": grades = 9.600 + 9.000;break;
        }
    } else if (country === "Bulgaria") {
        switch (gymnasticTool) {
            case "ribbon": grades = 9.600 + 9.400;break;
            case "hoop": grades = 9.550 + 9.750;break;
            case "rope": grades = 9.500 + 9.400;break;
        }
    } else if (country === "Italy") {
        switch (gymnasticTool) {
            case "ribbon": grades = 9.200 + 9.500;break;
            case "hoop": grades = 9.450 + 9.350;break;
            case "rope": grades = 9.700 + 9.150;break;
        }
    }

    let percentage = (20 - grades) / 20 * 100;  
     
   console.log(`The team of ${country} get ${grades.toFixed(3)} on ${gymnasticTool}.`);
   console.log(`${percentage.toFixed(2)}%`);
}

gymnastics(["Russia", "rope"]);

