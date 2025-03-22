require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const contact = require('./routes/contact');
const weather = require('./routes/weather');

const PORT = 8000;

app.use(cors());
app.use('/contact', contact);
app.use('/weather', weather);

app.get('/', (req, res) => {
  return res.json({ status: 200, message: 'OK' });
});

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
