function vacationBooksList(input) {
    let numberPages = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let numberDay = Number(input[2]);

    let numberHour = (numberPages / pagesForOneHour) / numberDay;

    console.log(numberHour);
}

vacationBooksList(["212", "20", "2"])