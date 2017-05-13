var progress = setInterval(function () {
    var $bar = $("#bar");

    if ($bar.width() >= 600) {
        clearInterval(progress);
    } else {
        $bar.width($bar.width() + 60);
    }
    $bar.text($bar.width() / 6 + "%");
    if ($bar.width() / 6 == 100){
      $bar.text("Still working ... " + $bar.width() / 6 + "%");
    }
}, 800);

$(window).load(function() {
  $("#bar").width(600);
  $(".loader").fadeOut(3000);
});

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
