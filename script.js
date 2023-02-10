window.onload = function() {
    document.querySelector("#pokemonName").focus();
};

// Apagar o nome que esta no input
document.querySelector("#pokemonName").addEventListener('click', function() {
    document.querySelector("#pokemonName").value = '';
})

function loadPokemon() {
    let pokemonName = document.querySelector("#pokemonName").value;

    if (!pokemonName) {
        alert("Por favor, insira um nome de Pokémon.");
    }

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        document.querySelector("#nome").innerHTML = "O nome do pokemon é: " + data['name'];
        document.querySelector("#numero").innerHTML = "Pokémon de número: " + data['id'];

        let img = data['sprites']['front_default'];
        document.querySelector("#pic").setAttribute('src', img);
    })

    .then((erro) => {
        console.log("Erro " + erro);
    });
    
}

document.querySelector("#btnCarregar").onclick = loadPokemon;