$(document).ready(function () {

    var dropzone = document.getElementById('dropFile');
    var file;
    var pdf = new Image();
    pdf.src = "JS/test.PNG";

    const config = {
        lang: 'dan',
        oem: 1,
        psm: 3
    }
    // handle image to text
    Tesseract.recognize(pdf, config)
        .then(function (result) {
            console.log(result)
        })


    dropzone.ondragover = function () {
        this.className = 'dragover';
        return false;
    }

    dropzone.ondragleave = function () {
        this.className = 'dropFile';
        return false;
    }

    dropzone.ondrop = function (e) {
        e.preventDefault();
        //        e.stopPropagation();

        // changing the CSS
        this.className = 'dropFile';
        dropHandler(e);
    }

    function dropHandler(ev) {
        console.log('File(s) dropped');

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file') {
                    file = ev.dataTransfer.items[i].getAsFile();
                    //                    console.log('... file[' + i + '].name = ' + file.name);
                    console.log(file.name);
                    // lige her
                    $('#sample_file').val(file.name);
                    console.log($('#sample_file'));
                    // $('#dropFile').submit();

                }
            }
        }
        //                else {
        //            // Use DataTransfer interface to access the file(s)
        //            for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        //                console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        //            }
        //        }
    }

});
