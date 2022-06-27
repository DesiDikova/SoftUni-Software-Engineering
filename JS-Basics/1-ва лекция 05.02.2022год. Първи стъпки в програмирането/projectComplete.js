function projectComplete(input) {
    let name = input[0];
    let projects = Number(input[1]);
    
    let sumProjects = projects * 3;
    let projectComplete = `The architect ${name} will need ${sumProjects} hours to complete ${projects} project/s.` 
    
    console.log(projectComplete);
}

projectComplete(["Sanya", "9"])
