function travelAgency(input) {

    let nameCity = input[0]; //име на града
    let typePackage = input[1]; //вид на пакета
    let discountVIP = input[2]; //VIP отстъпка
    let daysToStay = Number(input[3]); //дни за престой
    let sum = 0; //дължима сума

    let isTrueCity = null;

    switch(nameCity) {
        case "Bansko":
        case "Borovets":
        case "Varna":
        case "Burgas":
            isTrueCity = true;
        break;
    }

    let isTrueTypePackage = null;

    switch(typePackage) {
        case "noEquipment":
        case "withEquipment":
        case "noBreakfast":
        case "withBreakfast":
            isTrueTypePackage = true;
        break;
    }

    if(daysToStay < 1) { //ако потребителят е въвел по-малко от 1 ден за престой
        console.log(`Days must be positive number!`);
        return;
    } 

    if(isTrueCity !== true ||  isTrueTypePackage !== true) { //при въвеждането на града или вида на пакета се въвеждат невалидни данни
        console.log(`Invalid input!`);
        return;
    }

    if(daysToStay > 7) { //aко клиентът е заявил престой повече от 7 дни, получава единия ден безплатно
        daysToStay--; 
    } 
    
    if(daysToStay > 0) {
        if(nameCity === "Bansko" || nameCity ==="Borovets") {
            switch(typePackage) { 
                case "noEquipment": sum = daysToStay * (discountVIP === "yes" ? 80 * 0.95 : 80); break; //if(discountVIP === "yes" - има отстъпка от 5%)
                case "withEquipment": sum = daysToStay * (discountVIP === "yes" ? 100 * 0.90 : 100); break; //if(discountVIP === "yes" - има отстъпка от 10%)
            }  
        } 
        if(nameCity === "Varna" || nameCity ==="Burgas") {
            switch(typePackage) {
                case "noBreakfast": sum = daysToStay * (discountVIP === "yes" ? 100 * 0.93 : 100); break; //if(discountVIP === "yes" - има отстъпка от 7%)
                case "withBreakfast": sum = daysToStay * (discountVIP === "yes" ? 130 * 0.88 : 130); break; //if(discountVIP === "yes" - има отстъпка от 12%)
            }
        }
    }
    console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);   
}

travelAgency//(["Borovets", "noEquipment", "yes", "6"]);
// (["Varna",
// "withBreakfast",
// "no",
// "0"])

(["Gabrovo",
"noBreakfast",
"no",
"3"])

