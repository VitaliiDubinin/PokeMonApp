const pokedex = document.querySelector(".grid");

// fetch("https://pokeapi.co/api/v2/pokemon?offset=300&limit=100")

const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=300")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      //   poceCards(data.results);
      const fetches = data.results.map((p) => {
        return fetch(p.url).then((res) => res.json());
      });
      //   Promise.all(fetches).then((res) => console.log("promisesreq res", res));
      Promise.all(fetches).then((res) => {
        poceCards(res);
      });
    });
};
const poceCards = (data) => {
  //   console.log("pokecards data coming", data);

  const cards = data
    .map((card) => {
      return `<div class="card">
<img src="${card.sprites.other.dream_world.front_default}" alt"" />
<h2>${card.name}</h2>
</div>`;
    })
    .join("");

  pokedex.innerHTML = cards;
};

fetchData();
