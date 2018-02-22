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
    const pokeShiny = data.sprites.front_shiny;
    const pokeType = data.types[0].type.name;
    const pokemonName = data.name;
    const pokeNumber = data.id;
    const pokeHeight = data.height;
    const pokeWeight = data.weight;
    const pokeBaseExperience = data.base_experience;
    const pokeAbilities = data.abilities[0].ability.name;
    $('#modalPokeInfo').empty();
    $('#pokeInfo').append(`<div class="col-md-6 col-lg-6"><div class="panel panel-default"><img class="poke-imagen poke-img-modal" src="${pokeImg}" data-toggle="modal" data-target="#modalPokeInfo"></div><h4><strong>${data.name}</strong></h4><div class="panel panel-default"><img class=poke-imagen poke-img-modal src="${pokeShiny}"></div><h4>Shiny version</h4></div>`);
    $('#modalPokeInfo').append(`<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h3 class="modal-title">Información </h3></div><div class="modal-body"><p>Número de Pokedex: ${pokeNumber}</p><p>Tipo: ${pokeType}</p><p>Peso: ${pokeWeight}</p><p>Altura: ${pokeHeight}</p><p>Experiencia base: ${pokeBaseExperience}</p><p>Habilidades: ${pokeAbilities}</p></div></div></div>`);
    
    /*agregando color segun tipo*/
    if(pokeType === 'normal') {
      $('.panel').addClass('colorNormal')
    } if(pokeType === 'water') {
      $('.panel').addClass('colorWater')
    } if(pokeType === 'fire') {
      $('.panel').addClass('colorFire')
    } if(pokeType === 'grass') {
      $('.panel').addClass('colorGrass')
    } if(pokeType === 'poison') {
      $('.panel').addClass('colorPoison')
    } if(pokeType === 'fairy') {
      $('.panel').addClass('colorFairy')
    } if(pokeType === 'flying') {
      $('.panel').addClass('colorFlying')
    } if(pokeType === 'electric') {
      $('.panel').addClass('colorElectric')
    } if(pokeType === 'ground') {
      $('.panel').addClass('colorGround')
    } if(pokeType === 'rock') {
      $('.panel').addClass('colorRock')
    } if(pokeType === 'steel') {
      $('.panel').addClass('colorSteel')
    } if(pokeType === 'fighting') {
      $('.panel').addClass('colorFighting')
    } if(pokeType === 'psychic') {
      $('.panel').addClass('colorPsychic')
    } if(pokeType === 'bug') {
      $('.panel').addClass('colorBug')
    } if(pokeType === 'dragon') {
      $('.panel').addClass('colorDragon')
    } if(pokeType === 'ghost') {
      $('.panel').addClass('colorGhost')
    } if(pokeType === 'ice') {
      $('.panel').addClass('colorIce')
    } if(pokeType === 'dark') {
      $('.panel').addClass('colorDark')
    }
  }
  $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon-species/${pokeNormal}`,
      method: 'GET',
      datatype: 'json'
    })
    .done(data)
    .fail(error);
    function data(data) {
      console.log(data);
      const description = data.flavor_text_entries[4].flavor_text;
      $('.descripcion').empty();
      $('.descripcion').append(`<p class="description">${description}</p>`);
      $('#pokeInfo').append(`<div class="col-md-6 col-lg-6 hidden-xs hidden-sm"><p class="description">${description}</p></div>`);
    }

  function error(){
    alert('El nombre ingresado no corresponde a un Pokémon')
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
