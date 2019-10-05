const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors())
app.use('/api', api)

app.listen(port, () => console.log('App is listening to port ' + port))

app.get('/', (req, res) => {
    res.send('Hello World')
})
