const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.nomics.com/v1/currencies/ticker"        // This is the base url for the api 
    }

    async getPriceData(coinOption, curOption) {
        try {
            // Formatter for currency
            const formatter = new Intl.NumberFormat('en-US' , {
                style: 'currency',
                currency: curOption
            });


            // This is the request to the server to get data
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}\n`);

            let output = '';

            // This is array of object and we are looping thorugh it 
            res.data.forEach(coin => {
                // The API have many things and from there we are taking symbol, price and name of the coin
                output += `Coin: ${coin.symbol.yellow} (${this.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}`;

            });

        } catch (err) {
            // We are handling error here
            handleAPIError(err);   
        }
    }
}

function handleAPIError(err) {
    if(err.responce.status === 401) {
        throw new Error('Your API key is invalid - Go to https://nomics.com');
    } else if(err.responce.status === 404) {
        throw new Error('Your API is not responding');
    }
    else {
        throw new Error('Something is not working');
    }
}

module.exports = CryptoAPI;