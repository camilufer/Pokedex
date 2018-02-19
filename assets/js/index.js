//agragando evento al boton de buscar
$('#btn-search').click(function(){
  const pokeName = $('#pokeInput').val();
  const pokeNormal = pokeName.toLowerCase();
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokeNormal}`,
    type: 'GET',
    datatype: 'json',
    success: function(results){
      console.log(results);
    }
  })
  .done(response)
  .fail(error);
  function response(data) {
    $('#pokeInfo').empty();
    const pokeImg = data.sprites.front_default;
    const pokeType = data.types[0].type.name;
    const pokemonName = data.name;
    const pokeNumber = data.id;
    const pokeHeight = data.height;
    const pokeWeight = data.weight;
    const pokeBaseExperience = data.base_experience;
    const pokeAbilities = data.abilities[0].ability.name;
    $('#modalPokeInfo').empty();
    $('#pokeInfo').append(`<img class="poke-imagen poke-img-modal" src="${pokeImg}" data-toggle="modal" data-target="#modalPokeInfo"><h4><strong>${data.name}</strong></h4>`);
    $('#modalPokeInfo').append(`<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h3 class="modal-title">Información </h3></div><div class="modal-body"><p>Número de Pokedex: ${pokeNumber}</p><p>Tipo: ${pokeType}</p><p>Peso: ${pokeWeight}</p><p>Altura: ${pokeHeight}</p><p>Experiencia base: ${pokeBaseExperience}</p><p>Habilidades: ${pokeAbilities}</p></div></div></div>`)
  }

  function error(){
    alert('Ha ocurrido un error')
  }
})

/*$(document).ready(function(){
  var searchCard = function(data){
    //var url = "";
    var card = "";
    var array = [];
    for(var i = 0; i < data.length; i++){
      name[i].push(array);
    }
  };
  var armarContenedor = function(card) {
    var cardsPoke = "<div class='elements'><img src='" + card + "'/></div>"
    return cards;
  }
  var ajaxPokemon = function(card){
    $.ajax({
      url: 'https://api.pokemontcg.io/v1/cards',
      type: 'GET',
      datatype: 'json'
    })
    .done(function(response) {
      console.log(response);
      searchCard(response.data);
    })
    .fail(function(){
      console.log("error");
    })
  }
  $('#btnSearch').click(function(){
    console.log("Entro");
    $("#elements").empty();
    var carta = $("#pokeInput").val();
    ajaxPokemon(carta);
  });

});*/
