// tesseract configuration object    
const config = {
    	lang: 'dan',
    	oem: 1,
    	psm: 3
    };

    $(document).ready(function () {

    	$("#custom_browse").change(function (e) {
    		var fileName = e.target.files[0].name;
    		if (fileName) {
    			$('#custom_browse').css('display', 'none');
    			$('#img_upload').css('display', 'inline-block');
    		} else {
//    			$('#img_upload').attr('disabled', true);
    			$('#img_upload').css('display', 'none');
    		}
    	});
// attach event handler for the Tesseract OCR
    	$('#uploadForm').submit(function () {
//    		$("#status").empty().text("File is uploading...");
    		$(this).ajaxSubmit({
    			error: function (xhr) {
    				status('Error: ' + xhr.status);
    			},
				// response is package from server  
    			success: function (response) {
    				var imgData = JSON.parse(response);
					
    				console.log('this is the response: ', imgData);
    				
//					$("#status").empty().text('done');
					// tesseract needs a canvas context which is generated below.
    				var src = "./" + imgData.destination.slice(9) + "/" + imgData.filename;
    				var img = new Image;
    				var canvas = document.createElement("canvas");
    				var ctx = canvas.getContext("2d");
					
					// note that the image is drawn only when it is fully loaded
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
						//update the synonym functionality	
							updateSynonyms();
							setupSynonyms();
    						
						});
    				}
					// image will begin loading when it gets the source string previously defined
    				img.src = src;
    			}
    		});
    		//disable the page refresh.
    		return false;
    	});
    });

  
