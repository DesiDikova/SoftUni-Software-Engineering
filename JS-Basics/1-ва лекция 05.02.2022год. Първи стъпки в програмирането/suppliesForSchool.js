function suppliesForSchool(input) {
    let numberPens = Number(input[0]);
    let numberMarker = Number(input[1]);
    let litersOfDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let price = numberPens * 5.80 + numberMarker * 7.20 + litersOfDetergent * 1.20;
    let totalPrice = price - (price * discount / 100);

    console.log(totalPrice);
}

suppliesForSchool(["4", "2", "5", "13"])