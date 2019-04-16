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
	$("#text_area").css("font-size", size/12 + 'em');
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

	// get all text (use textfield id and value)
	// count words or end of sentences.
	// get slider value

}
