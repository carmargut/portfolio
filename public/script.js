$(document).ready(function() {
    // DOM inicializado
    console.log("DOM inicializado")
/*
    $("#button_cv").on("click", function(event) {
      $.ajax({
        method: "GET",
        url: "/cv",
        success: funtion(data,textStaus,jqXHR)
      });
    });
*/
});

function isEmpty(string) {
    return string.length === 0 || !string.trim()
}
