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

function updateParaghs() {
	// get all text (use textfield id and value)
	// count words or end of sentences.
	// get slider value

}

function updateFont() {
	// get the selected font
	// set the new font on the text field.
	
}

function updateDifficulty() {
	// Wait with thise one  
	// Here should call the algorith which will return some information

}
