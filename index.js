document.addEventListener("DOMContentLoaded",function() {
    fetch(`http://api.currencylayer.com/live?access_key=da4f2e7a0cfc92d0c9b26273348d43d7`)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        const BTCprice = document.querySelector("#BTCprice");
        const EUROprice = document.querySelector("#EUROprice");
        const KESprice = document.querySelector("#KESprice");
        const GBPprice = document.querySelector("#GBPprice");
        const USDprice = document.querySelector("#USDprice");
        const ETBprice = document.querySelector("#ETBprice");
        const HKDprice = document.querySelector("#HKDprice");
        const JPYprice = document.querySelector("#JPYprice");
        const UGXprice = document.querySelector("#UGXprice");

        BTCprice.innerHTML = `1 USD  = BTC ${data.quotes.USDBTC.toFixed(5)}`;
        EUROprice.innerHTML = `1 USD = EURO ${data.quotes.USDEUR.toFixed(2)}`;
        KESprice.innerHTML = `1 USD = KES ${data.quotes.USDKES.toFixed(2)}`;
        GBPprice.innerHTML = `1 USD = GBP ${data.quotes.USDGBP.toFixed(2)}`;
        USDprice.innerHTML = `1 USD = USD ${data.quotes.USDUSD.toFixed(2)}`;
        ETBprice.innerHTML = `1 USD = ETB ${data.quotes.USDETB.toFixed(2)}`;
        HKDprice.innerHTML = `1 USD = HKD ${data.quotes.USDHKD.toFixed(2)}`;
        JPYprice.innerHTML = `1 USD = JPY ${data.quotes.USDJPY.toFixed(2)}`;
        UGXprice.innerHTML = `1 USD = UGX ${data.quotes.USDUGX.toFixed(2)}`;

        // price.innerHTML = data.quotes.USDKES;
    })
    .catch(error=>{
        console.log(error);
    })
});