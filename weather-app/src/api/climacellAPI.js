// Weather Service
const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.climacell.co/v3/weather/',
    params: {
        unit_system: 'si',
        fields: 'temp,humidity,sunrise,sunset,cloud_cover,moon_phase,precipitation_type,weather_code',
        apikey: 'CnHllSred30FHxOWBMXvQJUhg1KswOeq'
    }
})

module.exports = instance