const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const emails = [
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'This is a password reset sdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'sdfnlasdf jalkdf jajdsf jadf kaldjf adssdfnlasdf jalkdf jajdsf jadf kaldjf adssdfnlasdf jalkdf jajdsf jadf kaldjf adssdfnlasdf jalkdf jajdsf jadf kaldjf adssdfnlasdf jalkdf jajdsf jadf kaldjf adssdfnlasdf jalkdf jajdsf jadf kaldjf adssdfnlasdf jalkdf jajdsf jadf kaldjf adssdfnlasdf jalkdf jajdsf jadf kaldjf adssdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'This is a password reset sdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'This is a password reset sdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'This is a password reset sdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'This is a password reset sdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'This is a password reset sdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'This is a password reset sdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
    {'from': 'alec a', 'subject': 'This is a password reset', 'message': 'This is a password reset sdfnlasdf jalkdf jajdsf jadf kaldjf ads', 'date': 'Sep 9' },
];

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/email', (req, res) => {
    res.send(emails);
})

app.post('/email', (req, res) => {
    const email = JSON.parse(req.body.body);
    emails.unshift(email);
    res.send(emails);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
