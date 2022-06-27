function changeBureau(input) {
    let quantityBitcoin = Number(input[0]);
    let quantityYuan = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinInLeva = quantityBitcoin * 1168;
    let yuanInDolar = quantityYuan * 0.15;
    let yaunInLeva = yuanInDolar * 1.76;
    let sumEuros = (bitcoinInLeva + yaunInLeva) / 1.95;
    let sumComission = (commission / 100) * sumEuros;
    let totalEuros = sumEuros - sumComission;
    console.log(totalEuros.toFixed(2));
}
changeBureau(["7", "50200.12", "3"])

