$('#search-button').on('click', function ()
 {

    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/',
        type: 'get',
        dataType: 'json',
        success: function (response) {
            console.log(response);
        }
    });

});