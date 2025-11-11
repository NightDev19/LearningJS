// Example: Fetching and displaying key Pokémon details from PokeAPI

const API_URL = "https://pokeapi.co/api/v2/";

async function fetchPokemonData(pokemonName) {
  try {
    // Fetch data for a given Pokémon name
    const response = await fetch(`${API_URL}pokemon/${pokemonName}`);
    if (!response.ok)
      throw new Error(`Request failed with status: ${response.status}`);

    // Convert the response to JSON format
    const data = await response.json();

    // Pick only the important information we need
    const pokemon = {
      name: data.name,
      species: data.species.name,
      about: data.types.map((t) => t.type.name).join(", "),
      stats: data.stats.map((s) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
    };

    return pokemon;
  } catch (error) {
    // Handle any errors that occur during fetch
    console.error("Error fetching Pokémon data:", error);
  }
}

// Test the function with Pikachu
fetchPokemonData("pikachu")
  .then((pokemon) => console.log(pokemon))
  .catch((error) => console.error(error));
