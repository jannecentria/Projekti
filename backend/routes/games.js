// Express-reititysmoduuli
const express = require('express');
const router = express.Router();
const db = require('../db/database'); // Haetaan tietokanta

// Hae kaikki pelit (tai hae nimellä, jos käytetään ?search=)
router.get('/', (req, res) => {
  const search = req.query.search;
  let sql = "SELECT * FROM games";
  let params = [];
  if (search) {
    sql += " WHERE name LIKE ?";
    params.push(`%${search}%`);
  }
  db.all(sql, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows); // Palautetaan kaikki pelit
  });
});

// Lisää uusi peli
router.post('/', (req, res) => {
  const { name, platform, release, description } = req.body;
  const sql = "INSERT INTO games (name, platform, release, description) VALUES (?, ?, ?, ?)";
  db.run(sql, [name, platform, release, description], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID }); // Palautetaan uuden pelin ID
  });
});

// Poista peli ID:n perusteella
router.delete('/:id', (req, res) => {
  const sql = "DELETE FROM games WHERE id = ?";
  db.run(sql, req.params.id, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deletedID: req.params.id }); // Palautetaan poistettu ID
  });
});

module.exports = router; // Viedään reitit käyttöön
