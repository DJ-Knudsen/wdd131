const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",
  attacked() {
    if (this.health <= 0) {
      alert(`${this.name} has already died.`);
      return;
    }
    this.health = Math.max(this.health - 20, 0);
    displayStats();
    if (this.health === 0) {
      setTimeout(() => alert(`${this.name} has died.`), 50);
    }
  },
  levelUp() {
    this.level += 1;
    displayStats();
  }
};

const card = document.querySelector(".card");

card.innerHTML = `
  <img class="image" src="${character.image}" alt="${character.name}, the ${character.class}">
  <h1 class="name">${character.name}</h1>
  <div class="stats">
    <p><strong>Class:</strong> ${character.class}</p>
    <p><strong>Level:</strong> <span id="level"></span></p>
    <p><strong>Health:</strong> <span id="health"></span></p>
  </div>
  <div class="buttons">
    <button type="button" id="attacked">Attacked</button>
    <button type="button" id="levelup">Level Up</button>
  </div>
`;

function displayStats() {
  document.querySelector("#level").textContent = character.level;
  document.querySelector("#health").textContent = character.health;
}

displayStats();

document.querySelector("#attacked").addEventListener("click", () => character.attacked());
document.querySelector("#levelup").addEventListener("click", () => character.levelUp());