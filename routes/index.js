var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
	// define file destination
	destination: function (req, file, callback) {
		callback(null, './uploads');
	},
	filename: function (req, file, callback) {
		// Andet parameter er det som filen skal hedde. 
		// lige nu er det bare fil navn + dato
		callback(null, file.fieldname + '-' + Date.now() + '.png');
	}
});

var upload = multer({storage: storage}).single('userPhoto');

// File upload v2
router.get('/', function (req, res) {
	res.render('text', {
		title: 'Prototype v1 Relex'
	});
});


// file upload.
router.post('/api/photo', function (req, res) {
	console.log("trying to receive");
	upload(req, res, function (err) {
		if (err) {
			return res.end("Error uploading file.");
		}
		res.end("File is uploaded");
	});
});


module.exports = router;
