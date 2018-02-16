`use strict`

$(document).ready(function(){
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

});

