const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const emails = [
    {'from': 'Alex Trebek', 'subject': '*NEW WEBSITE!*', 'message': 'Hello Mr. Gruber,\n\nWe got the new site up and running! You should have a link for EvilSite on your desktop. Try logging in there and let me know if it to your pleasure... sexual please', 'date': 'Sep 9' },
    {'from': 'Rogers Comm.', 'subject': 'Your phone plan update', 'message': 'Greetings exalted leader,\n\nWe finally figured out what\'s wrong with your phone. I\'ve reset it and can access your voice mail with PIN: 666' , 'date': 'Sep 9' },
    {'from': 'Fake 1', 'subject': 'subject', 'message': 'message' , 'date': 'Sep 9' },
    {'from': 'Fake 2', 'subject': 'subject', 'message': 'message' , 'date': 'Sep 9' },
    {'from': 'Fake 3', 'subject': 'subject', 'message': 'message' , 'date': 'Sep 9' },
];

app.use(cors());
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
