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
        question1.question("Enter Api Key: ", apiKey => {
            config.apiKey = apiKey    

            question1.question("Enter a zip code: ", zipCode => {
                config.zipCode = zipCode
                weatherConfig.setUpConfig(config)
                question1.close()
            })
        })
    }
}
