var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({
    storage: storage
}).single('userPhoto');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('text', {
        title: 'Prototype v1 Relex'
    });
});

module.exports = router;



// File upload v2
router.get('/test', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

router.post('/api/photo', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});



/*// File upload v1
router.post('/upload', function (req, res) {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.sampleFile;
    //    var sampleFile = file;


    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('file_dir/test.png', function (err) {
        if (err)
            return res.status(500).send(err);

        //res.send('File uploaded!');
        res.end();
    });
});*/
