// import { Express, Request, Response } from "express";

const express = require('express');

const geoLocationController = require('./controllers/geoLocation.controller');




module.exports =  async function routes(app) {


    // helloFromServer
    app.get('/hello' , geoLocationController.helloFromServer);


    // app.get('/', (req, res) => {
    //     return res.send({ "hello": 'Hey' });
    // });


    app.get('/api' ,geoLocationController.apiGetDist);

    app.get('/health', geoLocationController.healthFromDB);

    app.get('/popularsearch', geoLocationController.popularSearch);
    
    app.post('/distance', geoLocationController.addDistance);

}

