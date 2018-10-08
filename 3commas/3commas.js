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
		var hrf = location.href;
		if(hrf == "https://3commas.io/?locale=en"){
			$('.createAccBtn')
			.html('Get first profit in 7 days FREE TRIAL')
			.css('max-width','310px')
			.css('white-space','normal')
			.css('padding','15px');
			$('.getFreeTrialBtn').html('Get first profit in 7 days FREE TRIAL')
			.css('max-width','310px')
			.css('white-space','normal')
			.css('padding','15px');
			$('#regBtn').html('Try For Free');
			$('.simple_form.new_user').find('[value="Register"]')
			.html('Get first profit in 7 days FREE TRIAL')
			.css('white-space','normal');
			$('.subscribe-card__bottom').each(function(index, el) {
				var text = $('.text',el).html();
				if(text.search('From ') > -1){
					var numb = text.replace('From $','');
					$('.text',el).html('$'+numb+' per month');
				}
			});
			$('.subscribe-card__bottom .subscribeNowBtn')
			.html('Get first profit in 7 days FREE TRIAL')
			.css('font-size','20px')
			.css('white-space','normal')
			.css('padding','6px')
			.css('line-height','1.5');
		}
	});
}

