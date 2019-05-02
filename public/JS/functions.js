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
	//	console.log($synonyms[0].getAttribute('class'));

	var fl = 'type_';
	for (i = 0; i < $synonyms.length; i++) {
		// get class into variable 
		// cut off type_ maybe find better solution then pop sometime?
		var type = $synonyms[i].getAttribute('class').split(fl).pop();
		$synonyms[i].innerHTML = synoWords[type][difficulty];
		// use [other part of type_][index]
		// text(with 2d aboveindex)	
	}

}

function setupFonts() {
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

function setupColors() {
	// named incorrectly it also updates fonts
	// should be split into two functions or renamed
	var $menu = $("#p3");
	for (i = 0; i < textNback.length; i++) {
		var $option = $('<option/>');
		$option.val = i;
		$option.text(textNback[i]);
		$menu.append($option);
	}

}


function updateSynonyms() {
	var $text = $('#text_area');
	var textVal = $text.text().trim();

	// arrayOfText[]
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
			// this is needed to open the modal listener.


			// maybe for id: 'type_' + test[0], 'index_' + test[1]
		}
		$text.append($word);
		$text.append(' ');
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
	$("#text_area").css("font-size", size / 12 + 'em');
}

function pageLayout() {
	// Here we should make some premade page layouts that fit dyslexics. 

}

function updateColors() {
	var data = $("#p3").val();
	var text;
	var background;

	if (data == 'normal') {
		data = 'black, cornsilk';
	}

	if (data == 'custom1') {
		data = '#0A0AAA, #FFE4C4';
	}
	var colors = data.split(',');
	text = colors[0].replace(/\s+/g, '');;
	background = colors[1].replace(/\s+/g, '');;
	console.log('text: ' + text + ', background: ' + background);

	if (background == 'darkbrown') {
		// dark brown 654321 
		background = '#654321';
	}
	if (background == 'off-white') {
		// off white f5f2d0 
		// off black 313639 
		text = '#f5f2d0';
		background = '#313639';
	}
	$("#text_area").css("background-color", background);
	$("#text_area").css("color", text);
	$("#controller").css("background-color", background);
	$("#controller").css("color", text);

}

function updateParagraphs() {

	var textPrLine;
	var $newLine = ('<br></br>');
	// get all text (use textfield id and value)
	// count words or end of sentences.
	// get slider value

}
// different from setup in that it goes towards the intented interaction
function setupSynonyms() {

	var modal = document.getElementById('#synonym_modal');
	var span = document.getElementsByClassName("close")[0];
	//	var modal = document.getElementById('myModal');
	var popup = document.getElementsByClassName('popup')[0];
	var $result = $('#result_synonyms');

	span.onclick = function () {
		popup.style.display = "none";
	}
	$('.synonym').click(function (event) {

		var $synonym = $(this);
		var activeSynonym = $synonym.text();
		var $pos = $synonym.position();
		var $modal = $('#popup');
		$result.empty();
		console.log('what: ', $pos);
		console.log('what: ', popup);

		// 30 vw is the relative off-set of the content div.
		var left = 'calc(' + $pos.left + 'px + 30vw)';
		var top = 'calc( 90px + ' + $pos.top + 'px + 9vw)';
		popup.style.top = top;
		popup.style.left = left;
		popup.style.display = "block";
		var fl = 'type_';
		// filter away any class that doesnt have a number, 
		// which means get the type_x and cut away type_.
		var type = $synonym.attr('class').split(fl).filter(function (item) {
			return (parseInt(item) == item);
		})[0];

		// for loop her
		var categoryIndex = getIndexOfWord(synoWords, activeSynonym);
		console.log(categoryIndex);
		var category = synoWords[categoryIndex[0]];
		for (i = 0; i < category.length; i++) {
			if (activeSynonym != category[i]) {
				var $word = $('<p></p>').text(category[i]);
				$word.addClass('synonym_item');
				$word.addClass('type_' + type);
				$word.css('display' + 'block');
				console.log(i + ' ' + $word);
				$result.append($word);
			}
		}

		$('.synonym_item').click(function (event) {
			console.log('tjek');
			alert($(this).text());
		});

	});

}

function checkSynonyms(){
	console.log('ikke lavet endnu. der skal tjekkes om spans indeholder skriftlige ændringer, som trigger et synonym');
}