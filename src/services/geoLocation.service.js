// geoLocation

const axios = require('axios');
const GeoDist = require('../models/geoDist');
const mongoose = require('mongoose');
const config = require('../../config/default');


// const popularsearch = await GeoDist.collection.find().sort({age:-1}).limit(1);

class GeoLocationService {
     
    initUrlRoute = `http://www.mapquestapi.com/directions/v2/route?key=${config.apiKey}&`

    getThePopularSearch() 
    {

    }

     constructor()
    {
     // this.initClass();
    }

    ;

     initClass() {

        // geoLocationService.getThePopularSearch();
       

    }


    async getDist(placeA, placeB) {

        const dataSearch = { placeA, placeB };
        const findInDb = await GeoDist.find(dataSearch);
        let dist = 0.0;

        console.log("findInDb : " , findInDb);



        if (findInDb.length > 0) {
            dist = findInDb[0].distance;
            
            const hits = findInDb[0].hits;
            
            const update = { hits: hits+1 };
            const findInDbUpdate = await GeoDist.findOneAndUpdate(dataSearch, update, {
                new: true
            });

            return findInDb[0];
        }
        else {

            console.log("URLLL : ", `${this.initUrlRoute}from=${placeA}&to=${placeB}`)

            await axios.get(
                `${this.initUrlRoute}from=${placeA}&to=${placeB}`)
                .then(function (response) {
                    
                    console.log("response : " , response.data);

                    if(response.data.info.statuscode === 402)
                    {
                        return null;
                    }

                    dist = response.data.route.distance;

                    const geoDist = new GeoDist(
                        {
                            placeA: placeA,
                            placeB: placeB,
                            distance: dist,
                            hits: 1
                        }
                    );

                    geoDist.save().then(createdGeoLocation => {
                        console.log(createdGeoLocation);

                    });


                   return response;
                })
                .catch(function (error) {
                    // handle error
                     console.log("Error" , error);
                    return error;
                    //  return res.status(400).send(error);
                })
                .then(function () {
                    // always executed
                });


        }

    }


    DbHealth() {


        const dbStatus = mongoose.connection.readyState;
        const dbStates = {
            0: "disconnected",
            1: "connected",
            2: "connecting",
            3: "disconnecting",
        }

        console.log(dbStates[dbStatus]);

        return { dbStatusNumber: dbStatus, dbStatusText: dbStates[dbStatus] };


    }


    async addDistance(locationData) {

        const dataSearch = { placeA: locationData.placeA, placeB: locationData.placeB };
        console.log(dataSearch);

        const update = { distance: locationData.distance };


        const findInDb = await GeoDist.findOneAndUpdate(dataSearch, update, {
            new: true
        });

        if (findInDb) {
            console.log("findInDb : ", findInDb);

            return findInDb;

        } else {
            const geoDist = new GeoDist(
                {
                    placeA: locationData.placeA,
                    placeB: locationData.placeB,
                    distance: locationData.distance,
                    hits: 0
                }
            );

            geoDist.save().then(createdGeoLocation => {
                console.log(createdGeoLocation);

            });

            console.log("Not in the database , new : ", geoDist);

            return geoDist;
        }
    }


}

const geoLocationService = new GeoLocationService();

module.exports = geoLocationService;