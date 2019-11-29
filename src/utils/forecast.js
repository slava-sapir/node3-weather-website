const request = require('request')

const forecast = (latitude, longitude, callback) => {
   // console.log(latitude)
   // console.log(longitude)
    const url = 'https://api.darksky.net/forecast/1cc3a06c993437415b55129c6cdc7db7/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?' + 'units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
              //console.log(body.daily.data[0].summary)
            callback( undefined, body.daily.data[0].summary + ' It is currently ' 
            + body.currently.temperature + 
            ' degress out. The highest temperature today was ' 
            + body.daily.data[0].temperatureHigh + ' and lowest '
            + body.daily.data[0].temperatureLow + '. There is a ' 
            + body.currently.precipProbability + '% chance of rain.'
            )
        }
    })
}

module.exports = forecast