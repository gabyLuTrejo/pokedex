function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;
  // Métodos:
  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  };
}


var pokemones = [];

function crearPokemon(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var ataquePokemon = document.getElementById("ataquePokemon");
  // Sólo se crea un Pokemon si existen los datos necesarios
  if (nombrePokemon.value =="" || ataquePokemon.value =="") {
    alert("Para crear un pokemon agrega un NOMBRE y PUNTOS DE ATAQUE");
  } else{
    var pokemon = new Pokemon(nombrePokemon.value,
                              colorPokemon.value,
                              parseInt(ataquePokemon.value));
    pokemones.push(pokemon);
    mostrarPokemones();
    nombrePokemon.value = "";
    colorPokemon.value = "";
    ataquePokemon.value = "";
  }
}

// Id de los selectores
var idSelect = ["pokemon1", "pokemon2"];

function agregarSelects(){
  // Sólo se crean selectores si existen Pokemones
  var nombrePokemon = document.getElementById("nombrePokemon");
  if(nombrePokemon != ""){
    idSelect.forEach(function(select){
      var opcion = document.createElement("option");
      var pokemonesCreados = document.createTextNode(nombrePokemon.value);
      opcion.appendChild(pokemonesCreados);
      document.getElementById(select).appendChild(opcion);
    });
  }
}

function pelea(){
  var indicePokemon1 = document.getElementById("pokemon1").selectedIndex - 1;
  var indicePokemon2 = document.getElementById("pokemon2").selectedIndex - 1;
  // NO se puede autoatacarse
  if (indicePokemon1 == indicePokemon2){
    alert("Debes seleccionar 2 pokemones diferentes"
        +"\n ¡NO PUEDES AUTOATACAR!")
  } else{
    pokemones[indicePokemon1].pelear(pokemones[indicePokemon2]);
    var resultado = document.getElementById("resultadoPelea");
    resultado.innerText = pokemones[indicePokemon1].nombre + " atacó a "
                        + pokemones[indicePokemon2].nombre + " y "
                        + pokemones[indicePokemon2].nombre + " tiene "
                        + pokemones[indicePokemon2].vida + " pts de vida restante.";
  }

}

//Corregir: refactorizar!!
function mostrarPokemones(){
  var listaPokemones = document.getElementById("listaPokemones");
  while (listaPokemones.hasChildNodes()) {
        listaPokemones.removeChild(listaPokemones.firstChild);
    }
  var lista = document.createElement("ul");
  pokemones.forEach(function(pokemon){
    var elemento = document.createElement("li");
    elemento.innerText = "POKEMON: " + pokemon.nombre + " COLOR: " + pokemon.color
                       + " ATAQUE: " + pokemon.puntosAtaque;
    lista.appendChild(elemento);
  });
  listaPokemones.appendChild(lista);
}
