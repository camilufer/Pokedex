yeq/*var buscar = document.getElementById('btn-search');
buscar.addEventListener('click', function(){
  var param = document.getElementById('pokeInput').value;
  var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;

  $.ajax(pokeURL, function(data){
    //console.log(data);
    //console.log(JSON.stringift(data, null, " "));
  })
})*/
function callEndpoint() {
    $.getJSON('https://api.pokemontcg.io/v1',
    console.log(data) /*function(data) {
        $('#output').append(data.rows[0].user_id);
    }*/
    );
}

const pokemon = require(callEndpoint());

// Get all cards
pokemon.card.all()
.on('data', function (card) {
  console.log(card.name)
});

// Filter Cards
pokemon.card.all({ supertype: 'pokemon', types: 'dragon|fire|flying', hp: 'gt100' })
.on('data', function (card) {
    console.log(card.name)
});

// Get cards on a specific page / pageSize
pokemon.card.where({ page: 50, pageSize: 500})
.then(cards => {
    console.log(cards[0].name)
})