    const config = {
    	lang: 'dan',
    	oem: 1,
    	psm: 3
    };

    $(document).ready(function () {

    	$("#custom_browse").change(function (e) {
    		var tjek = e.target.files[0].name;
    		if (tjek) {
    			$('#img_upload').attr('disabled', false);
    		} else {
    			$('#img_upload').attr('disabled', true);
    		}
    	});

    	$('#uploadForm').submit(function () {
    		$("#status").empty().text("File is uploading...");
    		$(this).ajaxSubmit({
    			error: function (xhr) {
    				status('Error: ' + xhr.status);
    			},
    			success: function (response) {
    				var imgData = JSON.parse(response);
    				console.log('this is the response: ', imgData);
    				$("#status").empty().text('done');
    				img = new Image();
    				img.crossOrigin = "Anonymous";

    				var src = "./" + imgData.destination.slice(9) + "/" + imgData.filename;
    				var img = new Image;
    				var canvas = document.createElement("canvas");
    				var ctx = canvas.getContext("2d");
    				img.crossOrigin = "Anonymous";
    				img.onload = function () {
    					canvas.width = img.width;
    					canvas.height = img.height;
    					ctx.drawImage(img, 0, 0);
    					Tesseract.recognize(ctx, config)
    						.then(function (result) {
    							console.log(result);
    							document.getElementById("text_area")
    								.innerText = result.text;
    						});
    				}
    				img.src = src;
    				//                    test();
    			}

    		});

    		//Very important line, it disable the page refresh.
    		return false;
    	});

    	// handle image to text

    	//        $("#custom_browse").click(function () {
    	//            console.log('yesssss');
    	//            test();
    	//        });

    });

    function test() {
    	Tesseract.recognize(img, config)
    		.then(function (result) {
    			console.log(result);
    		});
    };


    /*Tesseract.recognize(img, config).progress((progress) => {}).then((result) => {
        console.log(result);
    })*/

    /*        Tesseract.recognize(pdf).progress((progress) => {
                
            }).then((result) => {});*/
