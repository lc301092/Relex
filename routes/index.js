var express = require('express');
var router = express.Router();
var multer = require('multer');
var MiriamSeHer = require('miriamTest.js');


// multer storage
var storage = multer.diskStorage(
	{
	// define file destination
	destination: function (req, file, callback) {
		var dest = './public/images/uploads';
		callback(null, dest);
	},
	// define filename
	filename: function (req, file, callback) {

		// right now is just file name + date
		var imgName = file.fieldname + '-' + Date.now() + '.png';
		callback(null, imgName);
	}
}
);

// multer upload needs name attribute of input
var upload = multer({
	storage: storage
}).single('userPhoto');


router.get('/', function (req, res) {
	res.render('text', {
		title: 'Prototype v2 Relex'
	});
});
router.get('/tekstb', function (req, res, next) {
	res.render('tekstb', {
		title: 'Prototype v1 Relex test',
		test2: {
			msg1: "BABA",
			msg2: "NARA"
		}
	});
});



// handle file upload.
router.post('/api/photo', function (req, res) {

	// the annonymous function is executed when the destination and filename is set.
	upload(req, res, function (err) {
		var file = JSON.stringify(req.file);
		// tesseract could be performed here sometime

		console.log('sending file info: ', file);
		if (err) {
			console.log(err);
			return res.end("Error uploading file: " + err);
		}
		res.send(file);
	});
});


module.exports = router;
