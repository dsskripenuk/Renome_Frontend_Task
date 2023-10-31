const apiKey = 'ea48005c4f10e74859300b4cc543ed87';

function getExchangeRates() {
    fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.rates) {
                const exchangeRates = data.rates;

                const usdInUAH = exchangeRates.UAH / exchangeRates.USD;
                const chfinUAH = exchangeRates.UAH / exchangeRates.CHF;

                document.getElementById('USD').textContent = `${usdInUAH.toFixed(2)}`;
                document.getElementById('EUR').textContent = `${(exchangeRates.UAH).toFixed(2)}`;
                document.getElementById('CHF').textContent = `${chfinUAH.toFixed(2)}`;
            }
            else {
                console.error('Exchange rate data was not found in the API response.');
            }

            setTimeout(getExchangeRates, 60000);
        })
        .catch(error => {
            console.error('Error in receiving exchange rates: ', error);
        });
}

getExchangeRates();