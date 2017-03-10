$(document).ready(function() {
    // DOM inicializado
    console.log("DOM inicializado")

    $("#button_submit").on("click", function(event) {
        var name = $("#name").val(),
            email = $("#email").val(),
            message = $("#message").val(),
            empty = false;
        console.log("hola")

        if (isEmpty(name)) {
            empty = true;
            alert("enter a name");
            event.preventDefault();
        }
    });

});

function isEmpty(string) {
    return string.length === 0 || !string.trim()
}
