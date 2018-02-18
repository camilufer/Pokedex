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
    const pokeLocation = data.location_area_encounters;
    $('#modalPokeInfo').empty();
    $('#pokeInfo').append(`<img class="pakimon-imagen pakimon-img-modal" src="${pokeImg}" data-toggle="modal" data-target="#modalPokeInfo"><h4><strong>${data.name}</strong></h4>`);
    $('#modalPokeInfo').append(`<p>Número de Pokedex: ${pokeNumber}</p><p>Tipo: ${pokeType}</p><p>Peso: ${pokeWeight}</p><p>Altura: ${pokeHeight}</p><p>Experiencia base: ${pokeBaseExperience}</p><p>Habilidades: ${pokeAbilities}</p>`)
  }

  function error(){
    alert('Ha ocurrido un error')
  }
})