/// 
console.log($)

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
var data2; 
  $.ajax({
    url: 'http://localhost:4567/quotes',
    type: 'GET',
    // This is the important part
    xhrFields: {
        withCredentials: true
    },
    // This is the important part
    data: {
        format: 'json'
     },
     dataType: 'json',
    success: function (data) {
        // handle the response
        console.log(data[1])
        data2 = data[1]

        for(var j in data2) { 
            $("#quotes").append( "<div class=\"whoWrap\">"+data2[j]  +"</div>" );
           
            $("#quotes").append("</div>");
       }
        debugger;
    },
    error: function (xhr, status) {
        // handle errors
    }
    });
    
});