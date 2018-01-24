const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

let people = [{
        name: "Alex",
        age: "26"
    },
    {
        name: "Lee",
        age: "22"
    },
    {
        name: "Ajax",
        age: "20"
    }];

//Middleware
/*let logger = (req, res, next) => {
    console.log('logging....')
    next();
}
app.use(logger)*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body-parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'src')));

// Get Request, Sending Reponse to Browser
app.get('/', (req, res) => {

    res.render('index', {
        title: 'New Title',
        people: people
    })
})

app.listen(3000, (req, res) => {
    console.log("server started...")
});


