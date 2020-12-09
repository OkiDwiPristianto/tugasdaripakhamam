$('#search-button').on('click', function ()
{

    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/'+$('#search-place').val(),
        type: 'get',
        dataType: 'json',
        success: function (data) {
            let pokemon = data;
            console.log (pokemon);

        
            $.each(pokemon, function (i, data ){
                $('#daftarPokemon').append(`
                <div class="card">
                <img src="`+ data.sprites.front_default +`" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">`+ $('#search-place').val() +` </h5>
                </div>
                </div>
                `)


            })

        },
        error: function (xhr) {
                $('#daftarPokemon').html(`
                <div class="col">
                <h1 class="text-center"> Pokemon Not Found </h1>
                </div>
                `)
            }
    
    });

});





// $.getJSON('https://pokeapi.co/api/v2/pokemon-form', function (dataGambar){
//     let form = dataGambar.results;
//     console.log(form);
// });

// $('#search-button').on('click', $.getJSON ('https://pokeapi.co/api/v2/pokemon', function (data){
//     let allPokemon = data.results;

//     $.each(allPokemon, function (i, data){
//         $('daftarPokemon'.append('<div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>'))
//     })
// }) );

