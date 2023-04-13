require('dotenv').config();
const express = require('express');

//*DATA
const Flight = require('./models/Flight');

const app = express();
const PORT = 3000;

//*CONFIG
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
const connectedtoDB = require('./config/database');


//*MIDDLEWARE
app.use(express.urlencoded({extended: false}));

//*ROUTES

//home
app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to the Flight App.</h1>
    <a href='/flights'>Let's get started...</a>
    `)
})

//index
app.get('/flights', (req, res) => {
    // res.render('Index')
    Flight.find({}, (error, allFlights) => {
        res.render('Index', {flights: allFlights})
    })
})

//post
app.post('/flights', (req, res) => {
    console.log(req.body);
    Flight.create(req.body, (error, createdFlight) => {
        res.redirect('/flights')
    })
})

//new (the form)
app.get('/flights/new', (req, res) => {
    res.render('New')
})

//wildcard
app.get('*', (req, res) => {
    res.render('404')
})

//*LISTEN
app.listen(PORT, () => {
    console.log(`Server live at port:${PORT}...`)
    connectedtoDB()
})
