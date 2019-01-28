const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const player = require('./routes/player.route');
const app = express();

// setting up db connection
let dev_db_url = "mongodb://localhost:27017/mydb";
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// adding to the app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/players', player);

let port = 8080;

app.listen(port, () => {
	console.log('Highscore server is up and runnig on port ' + port);
})


