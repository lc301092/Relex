$(document).ready(function () {
    var img = new Image();
    img.src = "JS/test.PNG";

    const config = {
        lang: 'dan',
        oem: 1,
        psm: 3
    }


    $('#uploadForm').submit(function () {
        $("#status").empty().text("File is uploading...");
        $(this).ajaxSubmit({

            error: function (xhr) {
                status('Error: ' + xhr.status);
            },

            success: function (response) {
                $("#status").empty().text(response);
                console.log(response);
            }
        });
        //Very important line, it disable the page refresh.
        return false;
    });
});

//v1
/* $("#uploadForm").bind("submit", function (event) {
        event.preventDefault();
        console.log("test");

        // $("#uploadForm").unbind("submit").submit();

});*/

// handle image to text
/*    Tesseract.recognize(img, config)
        .then(function (result) {
            console.log(result)
        })*/




/*    Tesseract.recognize(img, config).progress((progress) => {
    }).then((result) => {
        console.log(result);
    })*/

/*        Tesseract.recognize(pdf).progress((progress) => {
            
        }).then((result) => {});*/
