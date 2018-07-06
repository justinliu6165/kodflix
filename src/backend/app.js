const express = require('express');
const app = express();
const TvShows = require('./listOfShows')

app.get('/', (req, res) => {
    console.log('Hello World')
})

app.get('/rest/shows', (req, res) => {
    res.send(TvShows);
})


app.listen(3000, ()=>console.log("Server is listening to port 3000!!!"));