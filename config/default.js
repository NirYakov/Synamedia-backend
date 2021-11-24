
const dataKeys = require('../../../dataKeys/Keys');





const config = {
    port : 1337 ,
    dbUri: dataKeys.dbUri,
    apiKey : dataKeys.apiKey,
}

// console.log(config)



module.exports = config;














// amm +- it's but dont show the key when needed!

// // read a File
// const fs = require('fs')


// function GetConfig() 
// {
    
// }

// let MyData = '';

//  fs.readFile( 'C:\\temp\\keys api\\mapquest api 231121.txt' , 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return;
//   }
  
//   console.log(data);
//   MyData = data;

//   return ;

// });

// let dbKey = '';

// fs.readFile( 'C:\\temp\\keys api\\Geo Locations db key.txt' , 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return;
//     }
     
//     dbKey = data;
//     console.log(dbKey);
//     return dbKey;
//   });

// const apiKey =  MyData;
// const databaseKey = dbKey; 

// const config = {
//     port : 1337 ,
//     dbUri: databaseKey,
//     apiKey : apiKey,
// }

// console.log(config)



// module.exports = config;




// end of END























/* 

// read a File
const fs = require('fs')

const GetConfig = async () => 
{
    let MyData = '';
    
    await fs.readFileSync( 'C:\\temp\\keys api\\mapquest api 231121.txt' , 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return;
      }
      
      console.log(data);
      MyData = data;
    
      return ;
    
    });
    
    let dbKey = '';
    
    dbKey = await fs.readFileSync( 'C:\\temp\\keys api\\Geo Locations db key.txt' , 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return;
        }
         
        dbKey = data;
        console.log(dbKey);
        return dbKey;
      });
    
    const apiKey =  MyData;
    const databaseKey = dbKey; 

    return {
        port : 1337 ,
        dbUri: databaseKey,
        apiKey : apiKey,
    }
}

let config = '';
GetConfig().then( data => config = data);


console.log("config : ", config);



module.exports = config;







*/