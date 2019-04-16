

function updateSpacing() {
    var spacing = $("#p1").val();
    $("#text_area").css("word-spacing", 5 * spacing)
};




function updateDifficulty() {
    // Here should call the algorithm which will return some information
    // for now we will use synoWords which is a hardcoded variable.
    // this is either 0,1,2
    var difficulty = $('#p4').val();
    var $synonyms = $('#text_area .synonym');
    console.log('synonyms should be changed to difficulty: ' + difficulty + ", there are " + $synonyms.length + " words to change");
    console.log($synonyms);
    //	console.log($synonyms[0].getAttribute('class'));

    for (i = 0; i < $synonyms.length; i++) {
        var fl = 'type_';
        // get class into variable 
        // cut off type_ maybe find better solution then pop sometime?
        var type = $synonyms[i].getAttribute('class').split(fl).pop();
        console.log(type);
        $synonyms[i].innerHTML = synoWords[type][difficulty];
        console.log($synonyms[i]);
        // use [other part of type_][index]
        // text(with 2d aboveindex)	
    }

}

function getFonts() {
	// named incorrectly it also updates fonts
	// should be split into two functions or renamed
    var $menu = $("#p2");
    for (i = 0; i < fontTypes.length; i++) {
        var $option = $('<option/>');
        $option.val = i;
        $option.text(fontTypes[i]);
        $menu.append($option);
    }

}

function updateFont() {
    var font = $("#p2").val();
    $("#text_area").css("font-family", fontTypes[fontTypes.indexOf(font)]);

}

/**
 * Index of Multidimensional Array
 * @param arr {?Array} - the input array
 * @param k {object} - the value to search
 * @return {Array} 
 */
function getIndexOfWord(arr, k) {
    if (!arr) {
        return [];
    }
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i].indexOf(k);
        if (index > -1) {
            return [i, index];
        }
    }

    return [];
}

function updateFontSize() {
    var size = $("#p5").val();
    $("#text_area").css("font-size", 2 + (size / 10) + 'vw')
}

function pageLayout() {
    // Here we should make some premade page layouts that fit dyslexics. 

}
function updateParagraphs() {

    // get all text (use textfield id and value)
    // count words or end of sentences.
    // get slider value

}

