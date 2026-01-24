const leaderboard = document.getElementById("leaderboard");
const searchInput = document.getElementById("searchInput");

/* Region full names */
function getRegionName(code) {
  return {
    NA: "North America",
    EU: "Europe",
    AS: "Asia",
    AF: "Africa",
    SA: "South America",
    OC: "Oceania",
    AN: "Antarctica"
  }[code] || "Unknown";
}

/* Hard-coded leaderboard data */
const players = [
  { name: "Redstone_Master", tier: "S", region: "AS" },
  { name: "Warsky", tier: "S", skin: "Clownpierce", region: "NA" },
  { name: "Coolboy2121", tier: "S", region: "EU" },
  { name: "mcrrco", tier: "S", skin: "Straight", region: "EU" },
  { name: "ardoardo", tier: "S", region: "EU" },
  { name: "XFr4nB1kUp", tier: "S", region: "EU" },
  { name: "bakedHooligan931", tier: "S", region: "AS" },
  { name: "StormyMcYt", tier: "S", region: "EU" },
  { name: "BloodyA75L", tier: "S", region: "AF" },

  { name: "chrmozinx", tier: "A", region: "EU" },
  { name: "Bluuxy", tier: "A", region: "EU" },
  { name: "cabbycabbagehell", tier: "A", skin: "k0pusta", region: "AS" },
  { name: "Trial1", tier: "A", skin: "nov4z", region: "AF" },
  { name: "Eyatui", tier: "A", region: "AS" },

  { name: "ameliadihsucker", tier: "B", region: "AF" },

  { name: "antinity", tier: "D", region: "AS" },
];

/* Render leaderboard */
function renderLeaderboard() {
  const query = searchInput.value.toLowerCase();
  leaderboard.innerHTML = "";

  players
    .filter(p => p.name.toLowerCase().includes(query))
    .forEach((player, index) => {
      const avatar = player.skin
        ? `https://mc-heads.net/head/${player.skin}/40`
        : `https://mc-heads.net/head/${player.name}/40`;

      const row = document.createElement("div");
      row.className = "player-row";
      row.innerHTML = `
        <div class="rank">${index + 1}.</div>
        <img src="${avatar}" class="avatar">
        <div class="name">${player.name}</div>
        <div class="region ${player.region}" title="${getRegionName(player.region)}">
          ${player.region}
        </div>
        <div class="tiers">
          <div class="tier-badge ${player.tier}">${player.tier}</div>
        </div>
      `;
      leaderboard.appendChild(row);
    });
}

/* Live search */
searchInput.addEventListener("input", renderLeaderboard);

/* Initial render */
renderLeaderboard();




