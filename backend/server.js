var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')
var app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(5000, () => console.log('listening on port 5000'))

app.post('/', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var phone = req.body.phone
    var subject = req.body.subject
    var message = req.body.message

   transporter.sendMail({
       from: email,
       to: '8c6ab58c11-21667c@inbox.mailtrap.io',
       subject: subject,
       text: message
   }, (err, info) => {
       console.log(info.envelope);
       console.log(info.messageId)
   })
})

let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: "0303836166269d",
        pass: "41813a52956c9d"
    }
})

transporter.verify(function(error, success) {
    if (error) {
        console.log('error')
    }
    else {
        console.log('server is ready to take our messages')
    }
})