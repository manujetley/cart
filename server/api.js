const express = require('express')
const router = express.Router()

router.get('/',(req, resp) => {
    resp.send('This is the API route!!')
})
module.exports = router