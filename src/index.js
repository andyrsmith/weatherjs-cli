#!/usr/bin/env node
const weatherConfig = require("./weatherConfig")
const configure = require("./configure")
const weather = require("./weather")
const args = process.argv[2]

if(args === 'config') {
    configure.setup()
} else if(args !== undefined) {
    console.log(`${args} unknown command`)
} else {
    weather.getDailyForcast()
    console.log('get weather')
    let name = weatherConfig.getApiName()
    console.log(name)
    let apiKey = weatherConfig.getApiKey()
    console.log(apiKey)
    let zip = weatherConfig.getZipCode()
    console.log(zip)
}
