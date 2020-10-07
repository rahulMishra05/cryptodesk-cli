const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');


const check = {
    // This is async because we are getting back a promise from the API method
    async price(cmd) {
        try {
            keyManager = new KeyManager();
            const key = keyManager.getKey();

            // initializing the api library
            const api = new CryptoAPI(key);
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);       // This function getPriceData takes two arguments coinOption and curOption

            console.log(priceOutputData);

        } catch (err) {
            console.error(err.message.red);
        }
    }
};

module.exports = check;