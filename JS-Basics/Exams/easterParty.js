function easterParty(input) {

    let numberOfGuests = Number(input[0]); //брой гости
    let pricePerEnvelopeForOnePerson = Number(input[1]); //цена на куверт за един човек
    let budget = Number(input[2]); //бюджет

    let priceCake = budget - budget * 0.90; //цена на тортата;

    if(numberOfGuests >= 10 && numberOfGuests <= 15) {
        pricePerEnvelopeForOnePerson *= 0.85; //отстъпка - при гости над между 10вкл. и 15вкл.
    } else if(numberOfGuests > 16 && numberOfGuests <= 20) {
        pricePerEnvelopeForOnePerson *= 0.80; //отстъпка - при гости между 15 и 20вкл. 
    } else if(numberOfGuests > 20){
        pricePerEnvelopeForOnePerson *= 0.75; //отстъпка при гости над 20
    }

    let sumPerEnvelope = numberOfGuests * pricePerEnvelopeForOnePerson; //разход за необходимите куверти
    let totalSum = priceCake + sumPerEnvelope; //разходи за партито

    let diff = Math.abs(budget - totalSum); //остатък

    if(budget >= totalSum) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`)
    }
}

easterParty(["24", "35", "550"]);
 