const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const connect = require('./db');

connect().then(dbo => {
    app.get('/rest/shows', (req, res) => {
        dbo.collection('shows').find({}).toArray(function (err, result) {
            if (err) throw (err);
            res.send(result)
        })
    }) 

    app.get('/:id', (req,res) => {
        const iD = req.params.id;
        dbo.collection('shows').findOne({id: iD},{},function (err, result) {
            if (err) throw (err);
            console.log(result)
            res.send(result)
        })
    })

    app.use(express.static(path.join(__dirname, '../../build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });
})

app.listen(port, () => console.log(`Server is listening to Port:${port}`));