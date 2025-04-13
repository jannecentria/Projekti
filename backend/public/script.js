// REST API:n osoite (muuta jos julkaiset pilveen)
const API_URL = 'http://localhost:3000/api/games';

// Pelit tallennetaan tänne
let games = [];

// Hakee pelit palvelimelta (valinnainen hakusana)
async function fetchGames(search = '') {
  const res = await fetch(API_URL + '?search=' + encodeURIComponent(search));
  games = await res.json();
  renderList();
}

// Näyttää pelit listana
function renderList() {
  const list = document.getElementById("game-list");
  list.innerHTML = "";
  games.forEach((game) => {
    const item = document.createElement("div");

    const title = document.createElement("span");
    title.textContent = `${game.name} (${game.platform})`;
    title.style.flex = "1";
    title.onclick = () => showDetails(game);

    const del = document.createElement("button");
    del.textContent = "Poista";
    del.onclick = (e) => {
      e.stopPropagation();
      deleteGame(game.id);
    };

    item.appendChild(title);
    item.appendChild(del);
    list.appendChild(item);
  });
}

// Näyttää lisäyslomakkeen
function toggleForm() {
  document.getElementById("game-form").style.display = "block";
}

// Piilottaa lisäyslomakkeen
function cancelForm() {
  document.getElementById("game-form").style.display = "none";
}

// Tallentaa uuden pelin
async function saveGame() {
  console.log("Tallenna-nappia painettu!");

  const name = document.getElementById("name").value;
  const platform = document.getElementById("platform").value;
  const release = document.getElementById("release").value;
  const desc = document.getElementById("desc").value;

  if (!name || !platform || !release || !desc) {
    alert("Täytä kaikki kentät!");
    return;
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, platform, release, description: desc })
  });

  if (res.ok) {
    cancelForm();
    fetchGames(); // Päivitä lista
    document.getElementById("name").value = "";
    document.getElementById("platform").value = "";
    document.getElementById("release").value = "";
    document.getElementById("desc").value = "";
  } else {
    alert("Virhe pelin tallennuksessa.");
  }
}

// Näyttää valitun pelin tiedot
function showDetails(game) {
  document.getElementById("detail-name").textContent = game.name;
  document.getElementById("detail-platform").textContent = game.platform;
  document.getElementById("detail-release").textContent = game.release;
  document.getElementById("detail-desc").textContent = game.description;
  document.getElementById("game-details").style.display = "block";
}

// Sulkee pelin tietonäkymän
function closeDetails() {
  document.getElementById("game-details").style.display = "none";
}

// Poistaa pelin
async function deleteGame(id) {
  if (confirm("Haluatko varmasti poistaa pelin?")) {
    await fetch(API_URL + '/' + id, { method: 'DELETE' });
    fetchGames();
  }
}

// Hakee hakusanoilla
document.getElementById("search").addEventListener("input", (e) => {
  fetchGames(e.target.value);
});

// Haetaan pelit kun sivu ladataan
fetchGames();
