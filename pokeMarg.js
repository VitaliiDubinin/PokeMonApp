const pokedex = document.querySelector(".card");

// fetch("https://pokeapi.co/api/v2/pokemon?offset=300&limit=100")

const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=300")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      poceCards(data.results);
    });
};
const poceCards = (data) => {
  console.log("pokecards data coming", data);

  const cards = data
    .map((card) => {
      return `<div>
<img src="" alt"" />
<h2>${card.name}</h2>
</div>`;
    })
    .join("");

  pokedex.innerHTML = cards;
};

fetchData();
