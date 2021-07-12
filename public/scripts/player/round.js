function setTrading(canTrade) {
    document.getElementById(`btnPostOffer`).disabled = !canTrade;
    document.getElementById(`btnPostOffer`).value = canTrade ? `Postar Oferta` : `Negociado &agrave; $${state.tradePrice}`;
}

function setCard(value, isSeller) {
    document.getElementById(`cardValue`).innerText = '$' + String(value);
    document.getElementById(`cardIsSeller`).innerText = isSeller === null ? `Espectador` : isSeller ? `Vendendo` : `Comprando`;

    let input = document.getElementById(`btnPostOffer`);
	input.disabled = false;
	input.style.backgroundColor = 'turquoise';
}