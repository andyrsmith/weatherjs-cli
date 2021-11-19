const Conf = require('conf')

const config = new Conf()
module.exports = {

    setUpConfig(data) {
        config.set('apiName', data.apiName)
        config.set('apiKey', data.apiKey)
        config.set('zipCode', data.zipCode)
        console.log('Data set')
    },

    getApiName() {
        return config.get('apiName')
    },

    getApiKey() {
        return config.get('apiKey')
    },

    getZipCode() {
        return config.get('zipCode')
    }

}

