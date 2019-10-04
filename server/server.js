const express = require('express')
const api = require('./api')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/api', api)
app.listen(port, () => console.log('App is listening to port ' + port))