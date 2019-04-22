const synoWords = [
    ["tænke over", "overveje", "fundere over"],
    ["fastlagt", "predefineret", "forudbestemt"],
    ["ens", "samme", "ensbetydende"]
];

const fontTypes = [
	'opendyslexic',
	'Times New Roman',
	'Arial',
	'Verdana',
	'Helvetica',
	'Times New Roman',
	'Courier',
	'Georgia',
	'Palatino',
	'Calibri'
];

const textNback = [
	['normal'],
	['blue', 'yellow'],
	['green', 'brown'],
	['off-black', 'off-white'],
	['black', 'white'],
	['light green', 'dark brown'],
	['blue', 'white'], ['black', 'yellow'],
	['custom1']
];

$(document).ready(function () {

    $("[type=range]").change(function () {
        var newValue = $(this).val();
        $(this).next().text(newValue);
    });

    setupFonts();
    setupColors();

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
