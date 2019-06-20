function updateSpacing() {
	var spacing = $("#p1").val();
	$("#text_area").css("word-spacing", 5 * spacing)
};


function updateDifficulty() {
	// Here should call the algorithm which will return some information
	// for now we will use synoWords 2d array which is a hardcoded variable.
	var difficulty = $('#p4').val();
	var $synonyms = $('#text_area .synonym');
	console.log('synonyms should be changed to difficulty: ' + difficulty + ", there are " + $synonyms.length + " words to change");
	//	console.log($synonyms[0].getAttribute('class'));

	var filter = 'type_';
	for (i = 0; i < $synonyms.length; i++) {
		// get type_x class variable 
		// cut off type_
		var type = $synonyms[i].getAttribute('class').split(filter).pop();
		$synonyms[i].innerHTML = synoWords[type][difficulty];
	}

}

function setupFonts() {
	var $menu = $("#p2");
	for (i = 0; i < fontTypes.length; i++) {
		var $option = $('<option/>');
		$option.val = i;
		$option.text(fontTypes[i]);
		$menu.append($option);
	}

}

function setupColors() {
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

	// save text in arrayOfText[]
	var arrayOfText = textVal.split(" ");
	
	var $word;
	// emtpy the text since we want to fill in span elements
	$text.text("");
	console.log('processing content: ' + textVal);

	// go over the text 
	// 
	for (i = 0; i < arrayOfText.length; i++) {
		var synoIndex = [];
		$word = $('<span></span>').text(arrayOfText[i]);
		// if the word is in 2d array synoWords
		// return the index for which array it is in 
		synoIndex = getIndexOfWord(synoWords, arrayOfText[i]);
			$word.addClass('text_span');
		if (synoIndex.length > 0) {
			$word.addClass('synonym');
			$word.addClass('type_' + synoIndex[0]);
		}
		$text.append($word);
		// this is currently the way white spaces are placed in the text.
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
// note that this does not handle multiple instances of the same word.
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


function updateColors() {
	var data = $("#p3").val();
	var text;
	var background;

	// some color strings are hardcoded 
	/* the if statements catches the important colors that needs
	 a specific string in css */
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
function setupSynonyms() {
// fetch the relevant elements of the modal
/* note there is no modal overlay, so the modal 
cannot detect clicks outside the modal yet*/
	var modal = document.getElementById('#synonym_modal');
	var span = document.getElementsByClassName("close")[0];
	var popup = document.getElementsByClassName('popup')[0];
	var $result = $('#result_synonyms');

	span.onclick = function () {
		popup.style.display = "none";
	}
	$('.synonym').click(function (event) {

		var $synonym = $(this);
		var activeSynonym = $synonym.text();
		var $pos = $synonym.position();
		$result.empty();

		// 30 vw is the relative off-set of the content div.
		// these configuration seems to work fine for now
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

		// for loop here
		// find the index of the array that holds the synonym that the user clicked. 
		var categoryIndex = getIndexOfWord(synoWords, activeSynonym);
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
			var $newWord = $(this).text();
			$synonym.text($newWord);
			popup.style.display = "none";
		});

	});

}

function checkSynonyms() {
	var $allSynonyms = $('.synonym');
	console.log('there are ' + $allSynonyms.length + ' Synonyms');
	for (i = 0; i < $allSynonyms.length; i++) {
		var check = getIndexOfWord(synoWords, $allSynonyms[i].innerText);
		if(!check.length > 0){
		console.log('remove class');
		$($allSynonyms[i]).removeClass('synonym').unbind();
			
		}
	}
}
function test(){
	var menu = $('#menu');
	var isHidden = menu.css('disabled');
	if(isHidden){
		alert("make visible");
		menu.disabled == 'false';
	}
	else{
		alert("make hidden");
		menu.disabled == 'true';
	}
}
