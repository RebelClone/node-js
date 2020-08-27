// GeoLocation
const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    params: {
        limit: 1,
        access_token: 'pk.eyJ1IjoicmViZWxjbG9uZSIsImEiOiJja2UxajRwZGEwYnNhMnJwNDZzaXRmd2p5In0.ldt_6A28DzMGTycIdw7pmg'
    }
})

module.exports = instance