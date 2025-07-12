// ===  Destination Cards ===
const destinationData = [
  "CARD-Sports 1.png",
  "CARD-Sports 2.png",
  "CARD-Sports 3.png",
  "CARD-Sports 4.png",
];

const destinationCardsContainer = document.getElementById("destinationCards");

destinationData.forEach((img) => {
  const card = document.createElement("div");
  card.className = "destination-card";
  card.innerHTML = `
    <img src="./assets/${img}" alt="Game Card" />
    <button class="go-now">go now</button>
  `;
  destinationCardsContainer.appendChild(card);
});

// ===  Features Section ===
const features = [
  {
    img: "secure 1.png",
    title: "variety of Games",
    text: "Praesent facilisis massa vitae sapien rutrum, a posuere. Etiam sollicitudin neque ac malesuada.",
  },
  {
    img: "Feature 2 3.png",
    title: "safe & secure gaming",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper vulputate magna.",
  },
  {
    img: "Feature 3 3.png",
    title: "fast & better experience",
    text: "Nullam porta at orci non molestie. Aenean vel diam erat. Nullam dignissim lorem pulvinar dui finibus.",
  },
  {
    img: "Feature 4 2.png",
    title: "improved look & feel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper vulputate magna.",
  },
];

const featuresContainer = document.getElementById("featuresList");

features.forEach((feature) => {
  const div = document.createElement("div");
  div.className = "featurediv";
  div.innerHTML = `
    <img src="./assets/${feature.img}" alt="${feature.title}" />
    <p class="feature-title">${feature.title}</p>
    <p class="feature-text">${feature.text}</p>
  `;
  featuresContainer.appendChild(div);
});

// ===  Footer Teams ===
const teams = [
  {
    img: "Vector.png",
    name: "AFC Bournemouth",
    years: "2016 - 2020",
  },
  {
    img: "Group 453.png",
    name: "Crystal Palace",
    years: "2015 - 2017",
  },
  {
    img: "Group 451.png",
    name: "Manchester City",
    years: "2011 - 2012",
  },
  {
    img: "Group 449.png",
    name: "Tottenham Hotspur",
    years: "2006 - 2010",
  },
];

const footerTeamsContainer = document.getElementById("footerTeams");

teams.forEach((team) => {
  const div = document.createElement("div");
  div.className = "team-logo";
  div.innerHTML = `
    <img src="./assets/${team.img}" alt="${team.name}" />
    <p class="team-name">${team.name}</p>
    <div class="team-years">${team.years}</div>
  `;
  footerTeamsContainer.appendChild(div);
});
