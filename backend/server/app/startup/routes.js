const express = require('express');
const cors =require('cors');
const longTours = require('../routes/long_tours');
const shortTours = require('../routes/short_tours');
const users = require('../routes/users');

require('../../')
module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api/longTours', longTours);
     app.use('/api/shortTours', shortTours);
    // app.use('/api/users', users);

   
    app.post('*', (req, res) => {
        res.status(400).send('Invalid Url');
    });

    app.put('*', (req, res) => {
        res.status(400).send('Invalid Url');
    });

    app.use(function(err,req,res,next){
        if (err.code === 11000) {
            return res.json('Duplicate ' + err.errmsg.split("index:")[1].split("dup key")[0].split("_")[0]);
        }
        console.log('err',err)
        return res.json(err);
      })
};