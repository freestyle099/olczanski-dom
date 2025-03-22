const express = require('express');
const request = require('request');
const router = express.Router();

const weatherApi = process.env.OLCZANSKI_WEATHER_API;
const city = 'zakopane';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&appid=${weatherApi}`;

router.get('/', (req, res) => {
  request(url, function (err, response, body) {
    if (err) {
      console.error(err);
    } else {
      res.send(body);
    }
  });
});

module.exports = router;
