const https = require('https')
const weatherConfig = require('./weatherConfig')
const apiUrls = require('./apiUrls')

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
        let description = data.weather[0].description
        let mainDes = data.weather[0].main
        let sunrise = new Date(data.sys.sunrise*1000)
        let sunset = new Date(data.sys.sunset*1000)
        let location = data.name
        let timezone = data.timezone

        console.log(`Today's Forcast for ${location}\n`)        
        console.log(`Current Temp: ${currentTemp}\n
        High: ${maxTemp}\n
        Low: ${minTemp}\n`)
        console.log(`Description: ${description}\n`)
        console.log(`Main: ${mainDes}\n`)
        console.log(`Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()}\n`)
        console.log(`Sunset: ${sunset.getHours()}:${sunset.getMinutes()}\n`)
        console.log(`Location: ${location}\n`)
        console.log(`Timezone: ${timezone}\n`)
    }
}
