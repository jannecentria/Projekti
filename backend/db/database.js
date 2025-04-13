// Tuodaan SQLite ja path-moduuli
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Luodaan yhteys tietokantatiedostoon (luodaan automaattisesti)
const db = new sqlite3.Database(path.join(__dirname, 'games.db'));

// Luodaan taulu 'games', jos sitä ei vielä ole
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    platform TEXT,
    release TEXT,
    description TEXT
  )`);
});

module.exports = db; // Viedään db-muuttuja muiden käyttöön
