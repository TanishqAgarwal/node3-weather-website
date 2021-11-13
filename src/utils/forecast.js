const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=f4de041a911e90438642995f3cbdd6b7'

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather services.', undefined)
        } else if(response.body.cod === '400') {
            callback('Wrong latitude or longitude. Please try again.', undefined)
        } else {
            const main = response.body.main
            callback(undefined, 'The temperature outside is '+main.temp+' deg Celsius, but it feels like '+main.feels_like+' deg Celsius')
        }
    })
}


module.exports = forecast