

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

let people = [{
        name: "adam",
        surname: "sergi"
    },
    {
        name: "lee",
        surname: "sergi"
    }]

app.listen(3000, (req, res) => {
    console.log('listening')
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.render('index', {
                title: "title",
                people: people
    });
});

app.post('/users/add', (req, res) => {
    res.send(`${req.body.first_name} ${req.body.last_name}`)
});