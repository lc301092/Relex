$(document).ready(function () {

    $("[type=range]").change(function () {
        var newValue = $(this).val();
        $(this).next().text(newValue);
    });
});


function updateSpacing() {
    var spacing = $("#p1").val();
    $("#text_area").css("word-spacing", 5 * spacing)
};
