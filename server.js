const express = require("express");

const app = express();
app.use(express.static('src'));
let nunjucks = require('nunjucks');


const homeRoute = require('./routes/home');
const languagePartnersRoute = require('./routes/languagepartners');
const resourcesRoute = require('./routes/resources');

const port = 5000;

app.set('view engine', 'html');

nunjucks.configure('views/', {
    autoscape: false,
    express: app
})

app.use('/', homeRoute);
app.use('/languagepartners', languagePartnersRoute);
app.use('/resources', resourcesRoute);


app.listen(port, () => {
    console.log('App is listening...')
})

module.exports = app;