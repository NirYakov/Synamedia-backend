

const geoLocationService = require('../services/geoLocation.service');
const mongoose = require('mongoose');



class GeoLocationController {

   

    

    // Example: {"source": "jerusalem", "destination": "telaviv", "hits": 234}

    async helloFromServer(req, res) {
        return res.status(200).send({
            worldMap: '🗺',
            Alive: 'Alive :)'
        })
    }

    healthFromDB(req, res) {

        const dbStatus = geoLocationService.DbHealth();

        if (dbStatus.dbStatusText == "connected") {

            return res.status(200).send({});
        }


        return res.status(500).send({ error: `database state is : ${dbStatus.dbStatusText}` });

    }


    async getAll(req, res) {


    }

    async apiGetDist(req, res) {

        const p1 = req.query.source;
        const p2 = req.query.destination;

        console.log(req.query);
        console.log(p2);
        console.log(p1);

        //  const locationData = this.getLocationDataObj(p2, p1);
        // const locationData = this.getLocationDataObj('telaviv', 'jerusalem');


        // console.log(locationData);

        let locationdata = { distance: '', placeA: '', placeB: '' };

        locationdata.placeA = req.query.source;
        locationdata.placeB = req.query.destination;

        if (locationdata.placeA >= locationdata.placeB) {
            const holdString = locationdata.placeA;
            locationdata.placeA = locationdata.placeB;
            locationdata.placeB = holdString;
        }

        console.log(locationdata);

        const locationData = locationdata;

        // locationData.placeA = "jerusalem";
        // locationData.placeB = "telaviv";

        const geoObj = await geoLocationService.getDist(locationData.placeA, locationData.placeB);

        console.log("in the IFFF after geoObj : ", geoObj);


        const answer = geoObj === undefined;

        if (geoObj) {

            locationData.distance = geoObj.distance;


            //   return res.status(200).send({distance : locationdata.distance});
            return res.status(200).send(locationdata);
        }


        return res.status(400).send({ error: 'cant find the distance from source to destination , please check your input' });
       
        // return res.status(400).send({ error: $`cant find the distance from ${source} to ${destination} , please check your input` });
        // return res.status(400).send({});

    }

    getLocationDataObj(source, destination) {

        console.log(source);
        console.log(destination);


        // let locationdata = { distance: '', placeA: '', placeB: '' };

        // locationdata.placeA = source;
        // locationdata.placeB = destination;

        // if (locationdata.placeA >= locationdata.placeB) {
        //     const holdString = locationdata.placeA;
        //     locationdata.placeA = locationdata.placeB;
        //     locationdata.placeB = holdString;
        // }

        // console.log(locationdata);

        let locationdata = { distance: '', placeA: 'telaviv', placeB: 'jerusalem' };


        return locationdata;

        return { distance: '', placeA: 'telaviv', placeB: 'jerusalem' };
    }

    async addDistance(req, res) {
        // console.log("addDist Start");

        // const locationData = this.getLocationDataObj(req.body.source, req.body.destination);

        let locationdata = { distance: '', placeA: '', placeB: '' };

        locationdata.placeA = req.body.source;
        locationdata.placeB = req.body.destination;

        if (locationdata.placeA >= locationdata.placeB) {
            const holdString = locationdata.placeA;
            locationdata.placeA = locationdata.placeB;
            locationdata.placeB = holdString;
        }

        console.log(locationdata);

        const locationData = locationdata;


        locationData.distance = req.body.distance;
        const geoObj = await geoLocationService.addDistance(locationData);

        //          Response body: { "source": "theSource", "destination": "theDestination", "hits": totalNumberOfHits }
        //      Example: { "source": "jerusalem", "destination": "telaviv", "hits": 234 }



        return res.status(200).send(
            {
                source: req.body.source,
                destination: req.body.destination,
                hits: geoObj.hits,
            });
    }


    popularSearch() 
    {
        return "";
    }

}

const geoLocationController = new GeoLocationController();

module.exports = geoLocationController;