


const express = require('express');
// import connect from './utills/connect';
const routes = require('./routes');
const config = require('../config/default');


// const port = 1337; // config.get("port");
const port =  config.port;
const app = express();

app.use(express.json());

app.listen(port, async () => {



    console.log(`\n\n App is running at http://localhost:${port} \n\n`);

    routes(app);

});


