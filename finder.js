let price = require('crypto-price')
price.getCryptoPrice(base, crypto).then(obj => { // Base for ex - USD, Crypto for ex - ETH 
	console.log(obj.price)
}).catch(err => {
	console.log(err)
})
