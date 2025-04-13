// Tuodaan tarvittavat kirjastot
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000; // Paikallinen portti

// Palvellaan public-kansiosta staattiset tiedostot (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Otetaan käyttöön CORS ja JSON-käsittely
app.use(cors());
app.use(express.json());

// Reititetään API-kutsut /api/games -polkuun
app.use('/api/games', require('./routes/games'));

// Kaikki muut pyynnöt palauttavat index.html:n (single page app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Käynnistetään palvelin
app.listen(port, () => {
  console.log(`Palvelin käynnissä http://localhost:${port}`);
});
