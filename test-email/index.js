const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const emails = [
    {'from': 'Alex Trebek', 'subject': '*NEW WEBSITE!*', 'message': 'Hello Mr. Gruber,\n\nWe got the new site up and running! You should have a link for EvilSite on your desktop. Try logging in there and let me know if it is to your pleasure... sexual pleasure ;) (please don\'t fire me)', 'date': 'Sep 10' },
    {'from': 'Rogers Comm.', 'subject': 'Your phone plan update', 'message': 'Greetings exalted leader,\n\nWe finally figured out what\'s wrong with your phone. I\'ve reset it and you can access your voice mail with the PIN: 666 on your normal phone number.' , 'date': 'Sep 6' },
    {'from': 'Jordee Stiles', 'subject': 'Request for Interview', 'message': 'Hello Mr. Gruber,\n\nMy name is Jordee Stiles and I work at the Daily Dish. I would love to sit down with you and discuss some matters if you have any time available. Mostly fluff stuff, definitely not anything about silly oil spills, or running an evil corporation. Just a nice friendly chat.\n\nLet me know!', 'date': 'Sep 9' },
    {'from': 'Simon Gruber', 'subject': 'So about John Mcclane', 'message': 'Dearest brother,\n\nSimons says, it is about fricken time that we do something about John Mcclane. Nobody, and I mean NOBODY, throws a Gruber off of a 100 story building and gets away with it.\n\nI\'m thinking we could either a) Just shoot him or b) stage an ellaborate scheme to break into the federal reserve and send John on a wild goose chase that ends in him being sniped at the baseball stadium. Which one you think is better? I\'m leaning towards option \#2', 'date': 'Aug 30' },
    {'from': 'FluffyCo.', 'subject': 'Subscription is about to expire', 'message': 'Hello evil_ceo@hell.com, We\'ve noticed that your subscription to our, "Fluffiest/Cutest Animals of the Year" calendar is about to expire. If you do not what to miss out on this year\'s calendar, please send a post dated check to: 837 Flightless BirdWway, Origon.', 'date': 'Aug 29'},
    {'from': 'Security Pro', 'subject': 'Website Vulnerabilities', 'message': 'I have finished my security analysis of EvilSite and... wow! Who wrote this? It is REALLY insecure. For instance, if I paste the following into the search: "GRANT ACCESS ALL" I gain access to your secret functions. To fix all this with be $2,000,000 CAD.', 'date': 'Aug 25' },
    {'from': 'Mr. Burns', 'subject': 'Might want to delete that chat', 'message': 'You know that chat we had today in 2020? You might want to delete that. Just saying/', 'date': 'Nov 21'}
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
