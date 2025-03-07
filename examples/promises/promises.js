// Promises.then()

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((data) => {
    return data.json();
  })
  .then((pokemon) => {
    console.log(pokemon);
  })
  .catch((err) => {
    console.error("ha habido un error: " + err);
  });

// async/await

async function main() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const pokemon = await response.json();
    console.log(pokemon);
    return pokemon;
  } catch (ex) {
    console.error("ha habido un error: " + ex);
  }
}

main();
