$(document).ready(function() {
    $("#btn-submit").click(function(){
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            $("#error").css("display", "block");
            $("#icono-error").css("display", "block");
            return false;
        }
            $("#error").css("display", "none");
            $("#icono-error").css("display", "none");
            return false;
    });
});