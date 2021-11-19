const weatherConfig = require("./weatherConfig")

module.exports = {
    setup() {
        let config = {}
        const question1 = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        console.log("Weather Cli only works for OpenWeatherApi")
        config.apiName = 'openWeatherApi'
        config.zipCode = 15234
        question1.question("Enter Api Key: ", apiKey => {
            config.apiKey = apiKey    

            weatherConfig.setUpConfig(config)

            question1.close()
        })
    }
}
