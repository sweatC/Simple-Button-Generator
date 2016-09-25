(function(){
	//var`s
	var btnInc = $("#incrementBtn"),
		btnDec = $("#decrementBtn"),
		btnRes = $(".btn-res"),
		maxRadius = 25,
		minRadius = 0,
		bgColor = $("#bgColor"),
		borderColor = $("#borderColor"),
		codeResArea = $("#codeRes");

	btnInc.on("click", function(){

		var step = $("#step").val(),
			curRadius = btnRes.css("border-radius"),
			newRadius = (parseInt(curRadius) + parseInt(step));

		if(newRadius > maxRadius){
			newRadius = maxRadius;
			$(this).addClass("disabled");
		}

		if(newRadius > minRadius){
			btnDec.removeClass("disabled");
		}

		btnRes.css({
			"border-radius" : newRadius
		})

		updateRes();
	})	

		btnDec.on("click", function(){
		
		var step = $("#step").val(),
			curRadius = btnRes.css("border-radius"),
			newRadius = (parseInt(curRadius) - parseInt(step));

		if(newRadius < minRadius){
			newRadius = minRadius;
			$(this).addClass("disabled");
		}

		if(newRadius < maxRadius){
			btnInc.removeClass("disabled");
		}
		
		btnRes.css({
			"border-radius" : newRadius
		})

		updateRes();
	})

	bgColor.on("change", function(){
		var newColor = "#" + bgColor.val();

		btnRes.css({"background-color" : newColor})
		updateRes();
	})

	borderColor.on("change", function(){
		var newColor = "#" + borderColor.val();

		btnRes.css({"border-color" : newColor});
		updateRes();
	})


	var updateRes = function(){
		var bgColor = btnRes.css("background-color"),
			brColor = btnRes.css("border-color"),
			brRadius = btnRes.css("border-radius");

		codeResArea.text(
			"border-radius: " + brRadius + ";\n" + 
			"border-color: " + brColor + ";\n" + 
			"background-color: " + bgColor + ";\n"
			);
	}

	// to do col the same height
	$(document).ready(function(){
	    $('.container-fluid').each(function(){
	        var highestBox = 0;
	        $('.col-md-4 ', this).each(function(){
	            if($(this).height() > highestBox) {
	                highestBox = $(this).height();
	            }
	        });
	        $('.col-md-4 ',this).height(highestBox);
	    });
	});


})();