const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.github.com/users/',
    params: {
        client_id: 'd1b36acf984f11956a56',
        client_secret: 'c55895796b536eeae3871236ef77e9c4b0638b21',
    }
})

module.exports = instance