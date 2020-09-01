const path = require('path'),
express = require('express');

const github = require('./github/github');

const publicPath = path.join(__dirname, '../public');

const server = express()

server.set('view engine', 'hbs')

server.use(express.static(publicPath))

server.get('/', (req, res)=>{
    res.render('index')
})

server.get('/finduser', async(req, res)=>{
    await github(req.query.username, (err, data)=>{
        if(err) res.send(err);
        else res.send(data);
    })
})

server.listen(3000, (req, res)=>{
    console.log('Development server started')
})