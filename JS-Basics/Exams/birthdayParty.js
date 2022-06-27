function birthdayParty(input) {
    
    let rent = Number(input);
    let cake = rent * 0.20;
    let drinks = cake - (cake * 0.45);
    let animator = rent / 3;
    let totalSum = (rent + cake + drinks + animator);
    console.log(totalSum);
    
}
birthdayParty(["2250"]);