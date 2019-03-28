const synoWords = {
    ændringen: ["tænke", ""],
    predefineret: ["fastlagt", "forbestemt"],
    synonymer: ["ens", "samme", "lignende", "ensbetydende"]
};

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

function updateParagraphs() {
    // get all text (use textfield id and value)
    // count words or end of sentences.
    // get slider value

}

function updateFont() {
    var font = $("#p2").val();
    var fontType = ['opendyslexic', 'Times New Roman', 'Arial']

    $("#text_area").css("font-family", fontType[font]);
}

function updateDifficulty() {
    // Here should call the algorithm which will return some information
    // for now we will use synoWords which is a hardcoded variable.

}

function pageLayout() {
    // Here we should make some premade page layouts that fit dyslexics. 

}

function updateFontSize() {
    var size = $("#p5").val();
    $("#text_area").css("font-size", 2 + (size / 4) + 'vw')
}
