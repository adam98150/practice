const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('../routes/index');
const hbs = require('express-handlebars');

const app = express();
app.set('port', 8080);

// View engine
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/views' }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src')));

app.use('/', routes);

app.listen(8080, (req, res) => {
    console.log(`Server started at ${app.get('port')}`)
});
