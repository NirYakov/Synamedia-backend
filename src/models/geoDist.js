const mongoose = require('mongoose');

const geoDistSchema = mongoose.Schema({
    placeA: {type : String, required : true},
    placeB: {type : String, required : true},
    distance:  {type : Number, required : true},
    hits:  {type : Number, required : true},

});

module.exports  =  mongoose.model('geoDist', geoDistSchema);