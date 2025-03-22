# Vaihe 1 – Määrittely ja suunnittelu

**Kurssi:** IT00AK35-3003 Web-kehittämisen jatkokurssi – Päivätoteutus  
**Tekijä:** Janne Raappana  
**Työskentelymuoto:** Yksilötyö  
**Projekti:** Pelilista – Luo ja jaa oma pelilista suosikkipeleistäsi  
**Päivämäärä:** 21.3.2025

---

## 🔖 Vaiheen ohjeiden lukeminen

✅ Olen lukenut ja ymmärtänyt vaiheen 1 ohjeet. 

---

## 🎯 Projektin kuvaus

"Pelilista" on yksinkertainen verkkosovellus, jossa käyttäjät voivat luoda listan suosikkipeleistään. Käyttäjä voi myös selata muiden tekemiä pelilistoja. Jokaisesta pelistä näkyy nimi, alusta (esim. PC, PlayStation, Xbox), julkaisuvuosi ja lyhyt kuvaus.

---

## 👤 Käyttäjäpersoonat

### Elias, 19 – Peliharrastaja
- Pelaa aktiivisesti ja haluaa jakaa suosikkipelejään kavereiden kanssa.
- Kiinnostunut erityisesti toimintapeleistä.
- Käyttää palvelua pääosin kännykällä.

### Samuli, 27 – Satunnaispelaaja
- Hakee uusia pelivinkkejä vapaa-ajalle.
- Haluaa helposti löytää uusia pelejä eri alustoille.
- Käyttää palvelua tietokoneella.

---

## 📋 Käyttötapaukset

1. Käyttäjä luo oman pelilistan suosikkipeleistä.
2. Käyttäjä selaa muiden käyttäjien pelilistoja.
3. Käyttäjä hakee pelejä hakutoiminnolla.
4. Käyttäjä klikkaa pelin nimeä nähdäkseen lisätietoja.
5. Ylläpitäjä poistaa epäasiallisia tai virheellisiä pelilistoja.

 

---

## 💾 Tietoarkkitehtuuri ja tekninen suunnittelu

- **Frontend:** HTML + CSS + JavaScript (myöhemmin React)
- **Backend:** Node.js + Express
- **Tietokanta:** JSON-tiedosto tai SQLite (alustavasti JSON)
- **REST API -endpoints:**
  - `GET /games` – kaikki pelit
  - `POST /games` – lisää uusi peli
  - `DELETE /games/:id` – poista peli
- Yksinkertainen ER-kaavio tehty:
  - `Game { id, name, platform, year, description }`

---

## 📅 Projektinhallinta ja käyttäjätestaus

- Käytetään GitHub Issues -työkaluja tehtävien seurantaan.
- Tuntikirjanpito tiedostossa `tuntikirjaus.md`.
- Käyttäjätestaus toteutetaan projektin myöhemmissä vaiheiss

---

## ⏱️ Tuntikirjaus

https://github.com/jannecentria/Projekti/blob/main/tuntikirjaus.md


