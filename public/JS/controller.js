const synoWords = [
    ["tænke over", "overveje", "fundere over"],
    ["fastlagt", "predefineret", "forudbestemt"],
    ["ens", "samme", "ensbetydende"],
	["tjekket.","checket.","undersøgt."],
	["dårligt.","slemt.","værst."],
	["vigtigt","nødvendigt","essentielt"],
	["præcis", "eksakt", "nøjagtig"],
	["stiller", "læner", "hviler"],
	["travle","travle","hektiske"]
];

const fontTypes = ['opendyslexic', 'Times New Roman', 'Arial', 'Verdana'];

$(document).ready(function () {

    $("[type=range]").change(function () {
        var newValue = $(this).val();
        $(this).next().text(newValue);
    });

    getFonts();

    // look for words that we know has synonym and wrap a span element around it
    // arrayOfText is the content

    var $text = $('#text_area');
    var textVal = $text.text();
    var arrayOfText = textVal.split(" ");
    var $word;
    // emtpy the text since we want span elements
    $text.text("");
    console.log('processing content: ' + textVal);

    for (i = 0; i < arrayOfText.length; i++) {
        var test = [];
        $word = $('<span></span>').text(arrayOfText[i]);
        test = getIndexOfWord(synoWords, arrayOfText[i]);
        if (test.length > 0) {
            $word.addClass('synonym');
            $word.addClass('type_' + test[0]);

            // maybe for id: 'type_' + test[0], 'index_' + test[1]
        }
        $text.append($word, " ");
    }
});


//function updateSpacing() {
//    var spacing = $("#p1").val();
//    $("#text_area").css("word-spacing", 5 * spacing)
//};
//
//function updateParagraphs() {
//
//    // get all text (use textfield id and value)
//    // count words or end of sentences.
//    // get slider value
//
//}
//
//
//
//function updateDifficulty() {
//    // Here should call the algorithm which will return some information
//    // for now we will use synoWords which is a hardcoded variable.
//    // this is either 0,1,2
//    var difficulty = $('#p4').val();
//    var $synonyms = $('.synonym');
//    console.log('synonyms should be ' + difficulty);
//    //	console.log($synonyms[0].getAttribute('class'));
//
//    for (i = 0; i < $synonyms.length; i++) {
//        var fl = 'type_';
//        // get class into variable 
//        // cut off type_ maybe find better solution then pop sometime?
//        var type = $synonyms[i].getAttribute('class').split(fl).pop();
//        console.log(type);
//        $synonyms[i].innerHTML = synoWords[type][difficulty];
//        console.log($synonyms[i]);
//        // use [other part of type_][index]
//        // text(with 2d aboveindex)	
//    }
//
//}
//
//function getFonts() {
//    var $menu = $("#p2");
//    for (i = 0; i < fontTypes.length; i++) {
//        var $option = $('<option/>');
//        $option.val = i;
//        $option.text(fontTypes[i]);
//        $menu.append($option);
//    }
//
//}
//
//function updateFont() {
//    var font = $("#p2").val();
//    $("#text_area").css("font-family", fontTypes[fontTypes.indexOf(font)]);
//
//}
//
///**
// * Index of Multidimensional Array
// * @param arr {?Array} - the input array
// * @param k {object} - the value to search
// * @return {Array} 
// */
//function getIndexOfWord(arr, k) {
//    if (!arr) {
//        return [];
//    }
//    for (var i = 0; i < arr.length; i++) {
//        var index = arr[i].indexOf(k);
//        if (index > -1) {
//            return [i, index];
//        }
//    }
//
//    return [];
//}
//
//function pageLayout() {
//    // Here we should make some premade page layouts that fit dyslexics. 
//
//}
//
//function updateFontSize() {
//    var size = $("#p5").val();
//    $("#text_area").css("font-size", 2 + (size / 4) + 'vw')
//}
