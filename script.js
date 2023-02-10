function loadPokemon() {
    let pokemonName = document.querySelector("#pokemonName").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector("#nome").innerHTML = data['name'];
        document.querySelector("#numero").innerHTML = data['id'];

        let img = data['sprites']['front_default'];
        document.querySelector("#pic").setAttribute('src', img);
    })
    .them((erro) => {
        alert("Erro " + erro);
    });
}

document.querySelector("#btnCarregar").onclick = loadPokemon;