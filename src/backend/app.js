const express = require('express');
const app = express();
const TvShows = require('./listOfShows')
const path = require('path');
const port = process.env.PORT || 3001;

app.get('/rest/shows', (req, res) => {
    res.send(TvShows);
})

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, ()=>console.log("Server is listening!!!"));