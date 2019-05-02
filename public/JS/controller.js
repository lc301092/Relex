const synoWords = [
    ["tænke over", "overveje", "fundere over"],
    ["fastlagt", "predefineret", "forudbestemt"],
    ["ens", "samme", "ensbetydende"],
	["tjekket.", "checket.", "undersøgt."],
	["dårligt.", "slemt.", "værst."],
	["vigtigt", "nødvendigt", "essentielt"],
	["præcis", "eksakt", "nøjagtig"],
	["stiller", "læner", "hviler"],
	["travle", "travle", "hektiske"]
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
		$('#p1_param').text(newValue);
	});
	// called from functions.js 
	setupFonts();
	setupColors();
	updateSynonyms();
	setupSynonyms();

	
	
	// When the user clicks on <span> (x), close the modal


	// When the user clicks anywhere outside of the modal, close it



});
