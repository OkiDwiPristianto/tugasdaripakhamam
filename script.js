$.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/',
    type: 'get',
    dataType: 'json',
    success: function (data) {
        let pokemon = data.results;

        $.each (pokemon, function (i,data) {
            $('#daftarPokemon').append(`
            <div class="col-md-3 mb-3 text-center">
            <div class="card" >
            <div class="card-body">
            <h5 class="card-title">`+ data.name +` </h5>
            <a href=" `+ data.url +` ">sini dong</a>
            </div>
            </div>
            </div>

            `);
        });
    }});


    