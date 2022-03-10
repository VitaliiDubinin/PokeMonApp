const getPokeData = async () => {
  for (let i = 1; i < 50; i++) {
    // TODO using async/await

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);

    //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/8/`);

    const data = await response.json();
    // console.log(data);
    // console.log(data.name);
    console.log(data.id + ":" + data.name);
  }
};

getPokeData();
