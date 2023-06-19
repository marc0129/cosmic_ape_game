const compression = require('compression')
const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const cors = require('cors');


const app = express();


const port = 8080;
const host = '0.0.0.0';
app.use(cors({
  origin: '*'
}));

app.use(compression())

app.use('/assets', express.static('assets'))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('tiny'))

// Routes
var routes = require('./routes/routes.js');
// var missions = require('./routes/missions.js');


// app.use('/mission', missions)
app.use('/', routes)


app.listen(port, host);
console.log(`Running on http://${host}:${port}`);

