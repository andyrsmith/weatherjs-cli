#!/usr/bin/env node
const configure = require("./configure")
const weather = require("./weather")
const args = process.argv[2]

if(args === 'config') {
    configure.setup()
} else if(args !== undefined) {
    console.log(`${args} unknown command`)
} else {
    weather.getDailyForcast()
}
