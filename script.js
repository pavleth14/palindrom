$(document).ready(function() {
    $.ajax({
        success: function() {            
            $('#results').load('mycar.html');
        }
    })
})

// $( "#result" ).load( "ajax/test.html", function() {
//     alert( "Load was performed." );
//   });

// $(selector).load(URL,data,callback);

// const obj = JSON. parse('{"name":"John", "age":30, "city":"New York"}');