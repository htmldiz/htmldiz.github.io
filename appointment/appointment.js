function initjQuery(callback) {
	var script = document.createElement( "script" )
	script.type = "text/javascript";
	if(script.readyState) {
	script.onreadystatechange = function() {
		if ( script.readyState === "loaded" || script.readyState === "complete" ) {
			script.onreadystatechange = null;
			callback();
		}
	};
  } else {
	script.onload = function() {
		callback();
	};
  }
  script.src = '//code.jquery.com/jquery-3.3.1.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	initjQuery(function() {
		readyjQueryinit();
	});
}else{
	readyjQueryinit();
}
function readyjQueryinit(){
	jQuery(function($) {
		$projectlocation = "https://democourse.how-to-learn.ru/certificate/";
		$('body').append('<link rel="stylesheet" href="'+$projectlocation+'css/style.css" />');
		if($('#appointment').length>0){
			$('#appointment .clinic-locations-form').css('display','none');
			$('#appointment .doctors-lists').css('display','none');
			$('#appointment .short-field').css('display','none');
			var placeholder = $('#appointment .datepicker_with_icon.hasDatepicker').attr('placeholder');
			$('#appointment .datepicker_with_icon.hasDatepicker').val(placeholder);
			$('#appointment [value="Submit"]').css('display','none');
			$('#appointment [placeholder="First Name"]').css('display','none');
			$('#appointment [class="name_last"]').css('display','none');
			$('#appointment [placeholder="Last Name"]').clone().attr('placeholder','Full Name').attr('style','').attr('id','').attr('name','').addClass('fuild-full-name').insertAfter('#appointment [placeholder="First Name"]');
			$('#appointment [value="Submit"]').clone().attr('onclick','').attr('style','').attr('id','').attr('type','button').attr('onkeypress','').addClass('appointment-submit').insertAfter('#appointment [value="Submit"]');
		}
		// $('body').on('blur', '#appointment [type="email"]', function(event) {
		// 	var email = $('#appointment [type="email"]').val();
		// 	event.preventDefault();
		// });
		$('body').on('blur', '#appointment .fuild-full-name', function(event) {
			var fullname = $(this).val();
			fullname = fullname.split(' ');
			// console.log(fullname);
			if(fullname.length<2){
			    $(this).parent().addClass("error-fuildenter");
			    $(this).addClass("error");
			    $(this).before("<span class='error_text not_empty'>This field is required. Please enter the first and last name.</span>");
			}
			event.preventDefault();
		});
		$('body').on('blur', '#appointment [type="email"]', function(event) {
			var val = $(this).val();
			console.log(val.replace(/ /g, ''));
			if(!val.replace(/ /g, '')){
				validateEmail(this,false);
			}
			event.preventDefault();
		});
		function validateEmail(input,empty){
			$(input).parent().find('.error_text').remove();
			$(input).removeClass("error");
			var val = $(input).val();
			$(input).removeClass("not_empty");
			var incorrects = false;
			if($(input).val() != '') {
		        var pattern = /^([a-z0-9_\.\+-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			    if(pattern.test($(input).val())){
			    } else {
			    	incorrects = true;
			    }
			    if(incorrects === true){
			        $(input).before("<span class='error_text not_empty'>Incorrectly entered data. For example email@example.com</span>");
			        $(input).addClass("not_empty");
			        $(input).addClass("error");
			        $(input).parent().addClass("error-fuildenter");
			        return false;
			    }
			    if(incorrects == true){
			        $(input).parent().addClass("success-fuildenter");
			    }
			}else{
				if(empty){
			        $(input).before("<span class='error_text'>Should not be empty</span>");
			        $(input).addClass("error");
			        $(input).parent().addClass("error-fuildenter");
			        return false;
				}
			}
			return true;
		}
	});
}