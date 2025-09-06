async function getPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const data = await response.json();

  //htmlに表示する
  const container = document.getElementById("pokemon-container");
  container.innerHTML = `
  <h2>${data.name}</h2>
  <img src="${data.sprites.front_default}" alt="${data.name}">
  <p>高さ: ${data.height}</p>
  <p>重さ:${data.weight}</p>
  `;
}

//関数を呼び出して表示してみる
getPokemonData("ditto");