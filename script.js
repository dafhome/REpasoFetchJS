const options = {
    method: 'GET',
    headers: {
    }
};

const URL = "https://pokeapi.co/api/v2/pokemon-species/ditto";

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const pokemon = data;
        let index = 1;
        let id = "r" + index;
        let elemento = document.getElementById(id);

        // 1- "platinum"  en flavor_text_entries (13)

        // document.getElementById("r1").innerHTML = pokemon.flavor_text_entries[13].flavor_text;
        elemento.innerHTML = pokemon.flavor_text_entries[13].flavor_text;

        // 2- la url del color
        index++;
        elemento = incrementar(index, id, elemento);
        elemento.innerHTML = pokemon.color.url;

        // 3- "kanto", en pokedex_numbers(1)
        index++;
        elemento = incrementar(index, id, elemento);
        elemento.innerHTML = pokemon.pokedex_numbers[1].pokedex.name;

        // 4- valor de "entry_number" en pokedex_numbers (10)
        index++;
        elemento = incrementar(index, id, elemento);

        elemento.innerHTML = pokemon.pokedex_numbers[10].entry_number;

        // 5- Nombre del shape

        index++;
        elemento = incrementar(index, id, elemento);

        elemento.innerHTML = pokemon.shape.name;

        // 6- "ditto" como nombre del pokemon en "varieties"

        index++;
        elemento = incrementar(index, id, elemento);

        elemento.innerHTML = pokemon.varieties[0].pokemon.name;

        // 7- is_baby? true or false?

        index++;
        elemento = incrementar(index, id, elemento);

        elemento.innerHTML = pokemon.is_baby;


        // 8- tamaño del growth_rate?

        index++;
        elemento = incrementar(index, id, elemento);

        elemento.innerHTML = pokemon.growth_rate.name;

        // 9- “Pokémon transformación" en "genera" (4)

        index++;
        elemento = incrementar(index, id, elemento);

        elemento.innerHTML = pokemon.genera[5].genus;

        // 10- flavor_text en flavor_text_entries

        index++;
        elemento = incrementar(index, id, elemento);

        elemento.innerHTML = pokemon.flavor_text_entries[10].flavor_text;

    })
    .catch(err => console.error(err));

function incrementar(i, inc, elemento) {
    inc = "r" + i;
    elemento = document.getElementById(inc);
    return elemento;
}



fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 2,
        title: 'prueba',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.text())
    .then((data) => {
        const typicode = data;
        document.getElementById("t1").innerHTML = typicode;
    })
    .catch(err => console.error(err));


    
