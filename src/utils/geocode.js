const request = require('request')


const geocode = (address, callback) => {
    //console.log(address)
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2xhdmFzYXBpciIsImEiOiJjazMxdnVwY2wwZGZrM2hwYTV4emxhamphIn0.7WjkXcn_vV8eFS8WIV-N-A&limit=1'
                                                                                                                
    request({ url, json: true }, (error, { body }) => {
        if (error) {
             callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
               //console.log(body.features[0].center[1])
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode