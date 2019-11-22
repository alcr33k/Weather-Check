// standard hello world in NodeJs.
const express = require('express');
const fetch = require('node-fetch');
const axios = require('axios');
const config_data = require('./config.json');
const app = express();
const port = 1337;

// rest paths
app.get('/api/weather/:country/:city', (req, res) => {
    // get the weather in :city in :country
    axios.get(`https://api.weatherbit.io/v2.0/current?city=${req.params.city}&country=${req.params.country}&key=${config_data.weatherApiKey}`)
        .then(function (response) {
            // handle success
            res.send(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});

app.get('/api/image', (req, res) => {
    // get a random new image about nature, city, beach or mountain
    const keyword = ['nature', 'city', 'tropical', 'mountain'];
    const randomNum = Math.floor(Math.random() * 3); // random number between 0 and 3
    const url = 'https://source.unsplash.com/featured/?' +  keyword[randomNum]; 
    axios.get(url)
    .then(function (response) {
        const url = 'https://images.unsplash.com' + response.request.path;
        let jsonObj = {
            imagePath: url
        }
        res.send(jsonObj);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

});


app.listen(port, () => console.log('Server started on port ' + port));

// uppdatera variabel med axios
