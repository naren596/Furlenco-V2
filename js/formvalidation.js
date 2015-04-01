$.fn.goValidate = function() {
	var $form = this, $inputs = $form.find('input:text');

	var validators = {
		email : {
			regex : /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
		},
		phone : {
			regex : /^[2-9]\d{2}\d{3}\d{4}$/,
		}
	};
	var validate = function(klass, value) {
		var isValid = true, error = '';

		if (!value && /required/.test(klass)) {
			error = 'This field is required';
			isValid = false;
		} else {
			klass = klass.split(/\s/);
			$.each(klass, function(i, k) {
				if (validators[k]) {
					if (value && !validators[k].regex.test(value)) {
						isValid = false;
						error = validators[k].error;
					}
				}
			});
		}
		return {
			isValid : isValid,
			error : error
		}
	};
	var showError = function($input) {
		var klass = $input.attr("class"), value = $input.val(), test = validate(
				klass, value);

		$input.removeClass('invalid');
		$('#form-error').addClass('hide');

		if (!test.isValid) {
			$input.addClass('invalid');

			if (typeof $input.data("shown") == "undefined"
					|| $input.data("shown") == false) {
				$input.addClass('red-border');
			}

		} else {
			$input.removeClass('red-border');
		}
	};

	$inputs.keyup(function() {
		showError($(this));
	});

	$inputs.on('shown.bs.popover', function() {
		$(this).data("shown", true);
	});

	$inputs.on('hidden.bs.popover', function() {
		$(this).data("shown", false);
	});

	$form.submit(function(e) {

		$inputs.each(function() {
			if ($(this).is('.required') || $(this).hasClass('invalid')) {
				showError($(this));
			}
		});
		if ($form.find('input.invalid').length) { 
			e.preventDefault();
			$('#form-error').toggleClass('hide');
		}else{
			$('#thank_you').removeClass("display_none");
			$('.form-horizontal').addClass("display_none");
			$('.contact-us').addClass("display_none");
			var conversioniFrame = $('<iframe/>');
			conversioniFrame.attr("id","conversioniFrame");
			conversioniFrame.attr("src","conversion.html");
			conversioniFrame.css("display","none");
			conversioniFrame.appendTo("body");
//			$('#to_number').val($('.phone').val());
//			$('.exotel-form').removeClass('display_none');
		}
	});
	return this;
};
$('form').goValidate();

$(document).ready(function(){
	$(".btn-enquire").click(function(){
		$('#thank_you').addClass("display_none");
		$('.form-horizontal').removeClass("display_none");
		$('.contact-us').removeClass("display_none");
		$('#conversioniFrame').remove();
//		$('.exotel-form').addClass('display_none');
	});
	lpCarouselImage();
//	$('#exotel_submit').click(function(){
//		$('#formModal').modal('hide');
//	});
});

$(window).resize(function(){
	lpCarouselImage();
});

function lpCarouselImage() {
    $("#lpCarousel img").each($(window).width() <= 480 ? function() {
        $(this).attr("src").match("_m.jpg") || $(this).attr("src", $(this).attr("src").replace(".jpg", "_m.jpg"))
    } : function() {
        $(this).attr("src", $(this).attr("src").replace("_m.jpg", ".jpg"))
    })
}

