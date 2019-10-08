const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('./models/user')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true)
const db = 'mongodb+srv://manu:manu@cluster0-vtdzw.mongodb.net/eventdb?retryWrites=true&w=majority'


mongoose.connect(db, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Server Connected to mlabs')
    }
})

const tempArr = [{ name: 'manu', password: 'manu' }]
router.get('/', (req, resp) => {
    resp.format({ 'application/json': () => { resp.send(tempArr) } })
})

//mongodb+srv://<username>:<password>@cluster0-vtdzw.mongodb.net/admin?retryWrites=true&w=majority

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData)
    console.log('register User: ', user)
    user.save((error, registeredUser) => {
        console.log('registered User: ', registeredUser)
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser.id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({ token })
}
    })

})

router.post('/login', (req, res) => {
    let userData = req.body;
    console.log("request output : ", userData)
    console.log("request output email:", userData.email)
    User.findOne({ 'email': userData.email }, (error, user) => {
        console.log("userrrrrrrrrr: ", user)
        console.log("res.passworddddd: ", res.password)
        console.log("user.password: ", user.password)
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email!!')
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid password!!')
            } else  {
                let payload = { subject: user.id};
                const token = jwt.sign(payload, 'secretkey');
                res.status(200).send({token})
            }
        }
    })
})
module.exports = router