const fetch = require('node-fetch');

exports.networkId = '';
exports.networkToken = '';

exports.getOffers = () => {
    fetch(`https://${exports.networkId}.api.hasoffers.com/Apiv3/json?NetworkToken=${exports.networkToken}&Target=Offer&Method=findAll&fields[]=id`)
    .then(res => res.json())
    .then(json => {
        console.log(json);
    })
}

