const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
    next();
});

router.get('/test', (req, res) => {
    res.render('index', {title: "this is a title"})
});

router.post('/test/send', (req, res) => {
    console.log(req.body.first_name)
    res.send('Success');
});

module.exports = router;
