const leaderboard = document.getElementById("leaderboard");
const searchInput = document.getElementById("searchInput");

/* =========================
   REGION NAMES
========================= */
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

/* =========================
   GAMEMODES
========================= */
const gamemodes = [
    { id:"sword", name:"Sword", icon:"https://mctiers.com/tier_icons/sword.svg" },
    { id:"crystal", name:"Crystal", icon:"https://mctiers.com/tier_icons/vanilla.svg" },
    { id:"axe", name:"Axe", icon:"https://mctiers.com/tier_icons/axe.svg" },
    { id:"uhc", name:"UHC", icon:"https://mctiers.com/tier_icons/uhc.svg" },
    { id:"smp", name:"SMP", icon:"https://mctiers.com/tier_icons/smp.svg" },
    { id:"nethpot", name:"NethPot", icon:"https://mctiers.com/tier_icons/nethop.svg" },
    { id:"diapot", name:"DiaPot", icon:"https://mctiers.com/tier_icons/pot.svg" },
    { id:"mace", name:"Mace", icon:"https://mctiers.com/tier_icons/mace.svg" }
];

/* =========================
   PLAYERS
   Why are you looking at the code btw?
========================= */
const players = [

{
    name: "Galactus7",
    overall: "S",
    region: "AS",

    subtiers:{
        sword:"S",
        crystal:"A",
        axe:"S",
        uhc:"S",
        smp:"S",
        nethpot:"A",
        diapot:"S",
        mace:"S"
    }
},

{
    name: "SxyroX_",
    overall:"S",
    region:"AS",

    subtiers:{
        sword:"S",
        crystal:"A",
        axe:"S",
        uhc:"A",
        smp:"S",
        nethpot:"A",
        diapot:"A",
        mace:"S"
    }
},

{
    name:"Mazes__",
    overall:"S",
    region:"AS",

    subtiers:{
        sword:"S",
        crystal:"S",
        axe:"A",
        uhc:"S",
        smp:"A",
        nethpot:"A",
        diapot:"S",
        mace:"S"
    }
},

{
    name:"bakedHooligan931",
    overall:"S",
    region:"AS",

    subtiers:{
        sword:"A",
        crystal:"S",
        axe:"A",
        uhc:"S",
        smp:"A",
        nethpot:"A",
        diapot:"A",
        mace:"S"
    }
},

{
    name:"Qwixy_",
    overall:"S",
    region:"EU",

    subtiers:{
        sword:"S",
        crystal:"S",
        axe:"S",
        uhc:"S",
        smp:"A",
        nethpot:"A",
        diapot:"A",
        mace:"A"
    }
},

{
    name:"StormyMcYt",
    overall:"S",
    region:"EU",

    subtiers:{
        sword:"S",
        crystal:"S",
        axe:"A",
        uhc:"A",
        smp:"A",
        nethpot:"A",
        diapot:"A",
        mace:"S"
    }
},

{
    name:"lvCraft_",
    overall:"S",
    region:"AS",

    subtiers:{
        sword:"S",
        crystal:"S",
        axe:"S",
        uhc:"A",
        smp:"A",
        nethpot:"A",
        diapot:"A",
        mace:"S"
    }
},


{
    name:"BloodyA75L",
    overall:"S",
    region:"AF",

    subtiers:{
        sword:"S",
        crystal:"A",
        axe:"S",
        uhc:"A",
        smp:"A",
        nethpot:"A",
        diapot:"A",
        mace:"A"
    }
},

{
    name:"Warsky",
    overall:"A",
    skin:"Clownpierce",
    region:"NA",

    subtiers:{
        sword:"A",
        crystal:"A",
        axe:"A",
        uhc:"A",
        smp:"A",
        nethpot:"A",
        diapot:"A",
        mace:"S"
    }
},

{
    name:"Estoniavillager",
    overall:"A",
    region:"EU",

    subtiers:{
        sword:"D",
        crystal:"A",
        axe:"B",
        uhc:"C",
        smp:"B",
        nethpot:"B",
        diapot:"B",
        mace:"A"
    }
},   

{
    name:"chrmozinx",
    overall:"A",
    region:"EU",

    subtiers:{
        sword:"B",
        crystal:"B",
        axe:"A",
        uhc:"B",
        smp:"B",
        nethpot:"A",
        diapot:"A",
        mace:"B"
    }
},

{
    name:"Bluuxy",
    overall:"A",
    region:"EU",

    subtiers:{
        sword:"A",
        crystal:"B",
        axe:"A",
        uhc:"C",
        smp:"A",
        nethpot:"B",
        diapot:"A",
        mace:"B"
    }
},

{
    name:"cabbycabbagehell",
    overall:"A",
    skin:"k0pusta",
    region:"AS",

    subtiers:{
        sword:"A",
        crystal:"A",
        axe:"A",
        uhc:"A",
        smp:"B",
        nethpot:"A",
        diapot:"B",
        mace:"B"
    }
},

{
    name:"Trial1",
    overall:"A",
    skin:"nov4z",
    region:"AF",

    subtiers:{
        sword:"A",
        crystal:"B",
        axe:"B",
        uhc:"A",
        smp:"A",
        nethpot:"B",
        diapot:"A",
        mace:"C"
    }
},

{
    name:"Eyatui",
    overall:"A",
    region:"AS",

    subtiers:{
        sword:"B",
        crystal:"D",
        axe:"S",
        uhc:"D",
        smp:"B",
        nethpot:"A",
        diapot:"B",
        mace:"C"
    }
},

{
    name:"ameliadihsucker",
    overall:"B",
    region:"AF",

    subtiers:{
        sword:"B",
        crystal:"A",
        axe:"B",
        uhc:"B",
        smp:"B",
        nethpot:"B",
        diapot:"B",
        mace:"B"
    }
},
{
    name:"pvpwithrudra",
    overall:"B",
    region:"AS",

    subtiers:{
        sword:"A",
        crystal:"C",
        axe:"B",
        uhc:"B",
        smp:"C",
        nethpot:"B",
        diapot:"C",
        mace:"D"
    }
},

{
    name:"antinity",
    overall:"D",
    region:"AS",

    subtiers:{
        sword:"D",
        crystal:"F",
        axe:"D",
        uhc:"D",
        smp:"D",
        nethpot:"D",
        diapot:"D",
        mace:"F"
    }
},

{
    name:"dilahK",
    overall:"F",
    region:"AS",

    subtiers:{
        sword:"F",
        crystal:"F",
        axe:"F",
        uhc:"F",
        smp:"F",
        nethpot:"F",
        diapot:"F",
        mace:"F"
    }
},

{
    name:"ItzArdoks",
    overall:"F",
    region:"EU",

    subtiers:{
        sword:"F",
        crystal:"F",
        axe:"F",
        uhc:"F",
        smp:"F",
        nethpot:"F",
        diapot:"F",
        mace:"F"
    }
}

];

/* =========================
   OPEN PROFILE MODAL
========================= */
function openProfile(player, rank) {

    const modal = document.getElementById("playerModal");
    if (!modal) return;

    modal.classList.remove("hidden");

    document.getElementById("modalName").textContent = player.name;
    document.getElementById("modalRank").textContent = "#" + rank;
    document.getElementById("modalOverall").textContent = player.overall;

    document.getElementById("modalAvatar").src =
        `https://mc-heads.net/head/${player.skin || player.name}`;

    const container = document.getElementById("modalSubtiers");
    container.innerHTML = "";

    gamemodes.forEach(mode => {

        const tier = player.subtiers?.[mode.id] || "-";

        container.innerHTML += `
            <div class="mode">

                <img src="${mode.icon}" class="mode-icon">

                <div class="mode-tooltip">
                    <div class="tooltip-title">${mode.name}</div>
                    <div class="tooltip-tier tier-${tier}">
                        ${tier}
                    </div>
                </div>

            </div>
        `;
    });
}

/* =========================
   RENDER LEADERBOARD
========================= */
function renderLeaderboard() {

    if (!leaderboard) return;

    const query = (searchInput?.value || "").toLowerCase();

    leaderboard.innerHTML = "";

    players.forEach((player, index) => {

        if (!player?.name) return;
        if (!player.name.toLowerCase().includes(query)) return;

        const rank = index + 1;

        const avatar =
            `https://mc-heads.net/head/${player.skin || player.name}`;

        const row = document.createElement("div");
        row.className = "player-row";

        row.innerHTML = `
            <div class="rank">${rank}.</div>

            <img class="avatar" src="${avatar}">

            <div class="name">${player.name}</div>

            <div class="region ${player.region || ""}">
                ${player.region || "??"}
            </div>

            <div class="tier-badge ${player.overall}">
                ${player.overall}
            </div>
        `;

        row.onclick = () => openProfile(player, rank);

        leaderboard.appendChild(row);
    });
}

/* =========================
   CLOSE MODAL
========================= */
document.getElementById("closeModal")?.addEventListener("click", () => {
    document.getElementById("playerModal")?.classList.add("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target.id === "playerModal") {
        e.target.classList.add("hidden");
    }
});

/* =========================
   SEARCH
========================= */
searchInput?.addEventListener("input", renderLeaderboard);

/* =========================
   INIT
========================= */
renderLeaderboard();
