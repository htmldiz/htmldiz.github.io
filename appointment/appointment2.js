try {
    hj('trigger', 'hj-cro-sticky-form');
} 
catch(e) {}
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
		console.log('Appointment 2 start');
		if(hrf == "https://monashivf.com/resources/free-ivf-nurse-chat/"){
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'load'
			});
			$projectlocation = "https://htmldiz.github.io/appointment/";
			$('body').append('<link rel="stylesheet" href="'+$projectlocation+'css/style2.css" />');
			console.log('Appointment 2 run');
			var sidebar = $('#sidebar').clone();
			var form = $('#form-bottom').clone();
			$('#form-bottom').remove();
			$('#sidebar').remove();
			$('.col-sm-8.inner-content>h3').remove();
			$('.monash-o-btn').remove();
			sidebar.appendTo('.col-sm-8.inner-content');
			form.appendTo('.col-sm-4.sidebar');
			$('body').find('#form-bottom .gfield_label.gfield_label_before_complex').remove();
			$('body').find('#form-bottom .field_description_below:not(.recieved-occ-mail) .gfield_label').remove();
			$('body').find('#form-bottom [value="Submit"]').attr('value','FREE NURSE CHAT');
			$('body').on('focus','#form-bottom [placeholder="First Name"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'First Name'
				});
			});
			$('body').on('focus','#form-bottom [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click'
				'gtm-cro-event-label': 'Your Phone'
				});
			});
			$('body').on('focus','#form-bottom [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Email'
				});
			});
			$('body').on('focus','#form-bottom [placeholder="Last Name"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Last Name'
				});
			});
			$('body').on('click','#form-bottom [value="FREE NURSE CHAT"]',function(){
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Submit'
			});
			});
		}
	});
}