const https = require('https')
const weatherConfig = require('./weatherConfig')
const apiUrls = require('./apiUrls')
const getWeatherSymbol = require('./getWeatherSymbol')

module.exports = {
    getDailyForcast() {
        apiUrl = this.buildApiUrl()
        https.get(apiUrl, (res) => {
            let data = ''

            res.on('data', (chunk) => {
                data += chunk
            })
            res.on('end', () => {
                let parseJson = JSON.parse(data)
                this.displayTemp(parseJson)
            })

        }).on("error", (err) => {
            console.log("Error: " + err.message)
        })
    },

    buildApiUrl() {
        const apiKey = weatherConfig.getApiKey()
        const zip = weatherConfig.getZipCode()
        const apiName = weatherConfig.getApiName()
        
        let stuff = apiUrls.buildApiUrl(apiKey, zip, apiName)
        return stuff
    },

    displayTemp(data) {
        let currentTemp = data.main.temp
        let maxTemp = data.main.temp_max
        let minTemp = data.main.temp_min
        let desId = data.weather[0].id
        let description = data.weather[0].description
        let mainDes = data.weather[0].main
        let sunrise = new Date(data.sys.sunrise*1000)
        let sunset = new Date(data.sys.sunset*1000)
        let location = data.name
        let timezone = data.timezone
        let symbol = getWeatherSymbol.getSymbol(desId)

        console.log(`   Today's Forcast for ${location}\n`) 
        console.log(symbol)
        console.log(`
        Current Temp: ${Math.round(currentTemp)}\n
        High: ${Math.round(maxTemp)}\n
        Low: ${Math.round(minTemp)}\n
        Des Id: ${desId}\n
        Main: ${mainDes}\n
        Description: ${description}\n
        Sunrise: ${sunrise.toLocaleTimeString()}\n
        Sunset: ${sunset.toLocaleTimeString()}\n`)
    }
}
