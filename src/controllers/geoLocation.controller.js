

class GeoLocationController {

    async helloFromServer(req, res) 
    {
       return res.status(200).send({
            worldMap: '🗺',
            Alive: 'Alive :)'
            })
    }
    
    async getAll(req, res) {
    
        
    }
    
}

const geoLocationController = new GeoLocationController(); 

module.exports =  geoLocationController;