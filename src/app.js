


const express = require('express');
// import connect from './utills/connect';
const routes = require('./routes');
const config = require('../config/default');
const mongoose = require('mongoose');


// const port = 1337; // config.get("port");
const port =  config.port;
const app = express();

app.use(express.json());

const connectdb = async () => 
{
    try {
       // await mongoose.connect(config.dbUri, {
        await mongoose.connect(
            config.dbUri
            ,         
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        });

        console.log("DB connected");
    }
    catch (error) {
        console.log("Could not connet to db");
        console.error("");
        process.exit(1);
    }

    // mongoose.connect(config.dbUri, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     serverSelectionTimeoutMS: 5000
    // }).then(() => {
    //     console.log('Connected to database');
    // }).catch(err => console.log(err.reason));
    

};

app.listen(port, async () => {

    // await connect();

    connectdb() ;

    console.log(`\n\n App is running at http://localhost:${port} \n\n`);

    routes(app);

});


