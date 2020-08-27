const process = require('process');

const mapbox = require('./api/mapboxAPI'),
climacell = require('./api/climacellAPI');

const place = encodeURIComponent(`${process.argv[2]}`);

const weather = async ()=> {
    try {
        const { data:dataMapbox } = await mapbox.get(`${place}.json`);

        try {
            if( dataMapbox.features.length === 0 ){
                throw new Error()
            }

            const [ lon, lat ] = dataMapbox.features[0].center;

            const { place_name } = dataMapbox.features[0];

            const { data:dataClimacell } = await climacell.get('realtime',{ params: { lon, lat } });

            if( dataClimacell.errorCode ){
                throw new Error()
            }

            dataClimacell.place_name = place_name;

            console.log(dataClimacell)

        } catch(e){
            console.log('Error: Invalid Location. Try a different search')
        }

    } catch(e) {
        console.log('Error: Connection may not be available')
    }
}

if( process.argv[2] ) weather();
else console.log('Enter a location');

module.exports = weather