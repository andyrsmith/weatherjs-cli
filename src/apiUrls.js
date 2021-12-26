
    const apiUrls = {
        openWeatherApi: 'https://api.openweathermap.org/data/2.5/weather?'
    }

module.exports = {
    buildApiUrl: (apiKey, zip, apiName) => {
        console.log(zip)
        let url = `${apiUrls[apiName]}zip=${zip},us&appid=${apiKey}&units=imperial`
        return url
    }
    
}

//export {
//    apiUrls
//};
