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
		var hrf = location.protocol+'//'+location.host+location.pathname;
		if(hrf == "https://monashivf.com/fertility-treatments/fertility-treatments/the-ivf-process/"){
			$('.col-sm-4.sidebar').css('opacity','0');
			$('.col-sm-4.sidebar').html('');
			$projectlocation = "https://htmldiz.github.io/appointment/";
			$('body').append('<link rel="stylesheet" href="'+$projectlocation+'css/style3.last.css" />');
			$('body').append('<style>#form-bottom2{background:#f8f8f8;padding:25px 25px 25px 40px}#form-bottom2 ul.form-options li.book-appointment-new label{max-width:350px;line-height:22px!important}#form-bottom2 ul.form-options li label{max-width:350px;line-height:22px!important}#form-bottom2 ul label.gfield_label{margin-top:5px}#form-bottom2 input[type="text"],#form-bottom2 input[type="email"],#form-bottom2 input[type="tel"],#form-bottom2 textarea{width:100%!important;background:#fff;border:solid 1px rgba(200,200,200,0.7)!important;padding:10px 15px;border-radius:0px!important;margin-top:0!important;margin-bottom:10px;font-size:15px}#form-bottom2 input[type="text"].datepicker{width:70%!important}#form-bottom2 input[type="text"].lv_invalid,#form-bottom2 input[type="email"].lv_invalid{width:100%!important;background:url(https://monashivf.com/assets/themes/monash/assets/images/cross-mobile.png) no-repeat scroll 95% #ffffff;border:solid 1px #ff3232!important;padding:10px 15px}#form-bottom2 .gform_wrapper .validation_message{color:#D64203!important}#form-bottom2 .gform_wrapper li.gfield.gfield_error,.gform_wrapper li.gfield.gfield_error.gfield_contains_required.gfield_creditcard_warning{margin-bottom:0!important}#form-bottom2 span.gfield_required{color:#ff3232!important}#form-bottom2 ul li.gfield_error label.gfield_label{color:#D64203!important}#form-bottom2 input[type="text"].lv_valid,#form-bottom2 input[type="email"].lv_valid{width:100%!important;background:url(https://monashivf.com/assets/themes/monash/assets/images/checknew-mobile.png) no-repeat scroll 95% #ffffff;border:solid 1px #00afb4!important;padding:10px 15px}#form-bottom2 li.valid_label label.gfield_label{color:#00afb4!important}#form-bottom2 div.ginput_container.ginput_container_select select.large,div.ginput_container.ginput_container_select select.medium{width:100%!important}#form-bottom2 label.gfield_label_before_complex{display:block}#form-bottom2 .top_label div.ginput_complex.ginput_container.gf_name_has_1,.top_label div.ginput_complex.ginput_container.gf_name_has_2,.top_label div.ginput_complex.ginput_container.gf_name_has_3{width:100%!important}body #form-bottom2 .gform_wrapper .top_label div.ginput_container{width:68%!important;float:left;padding-bottom:0px}#form-bottom2 ul label{width:100%!important;font-size:16px!important}#form-bottom2 div.ginput_complex.ginput_container.gf_name_has_2 span{}#form-bottom2 .gform_wrapper li.gfield.gfield_error.gfield_contains_required div.gfield_description.validation_message,div.gfield_description.validation_message{clear:none!important;float:left;padding-bottom:0!important;font-weight:500!important;padding-top:15px!important}#form-bottom2 div.gfield_description{padding:0!important}#form-bottom2 .gform_wrapper li.gfield.gfield_error.gfield_contains_required div:nth-child(4){padding:0!important}#form-bottom2 div.gform_wrapper .left_label select.medium,div.ginput_container.ginput_container_select select{width:100%!important;background:#fff;border:solid 1px rgba(200,200,200,0.7)!important;padding:15px 7px!important;border-radius:0px}#form-bottom2 input[type="submit"]{text-transform:uppercase}#form-bottom2 div.gfield_description,div.gfield_description,li.gfield_html_formatted div.gfield_description,li.field_sublabel_below div.gfield_description{padding-top:0!important;color:#666;font-size:13px!important;max-width:63%;line-height:18px}#form-bottom2 .gfield_label small{color:#666;font-size:12px!important;font-weight:normal!important}#form-bottom2 ul.form-options label{line-height:19px!important}#form-bottom2 small{color:#666;font-size:13px!important;font-weight:300}li#field_25_26{}label#label_25_26_1{font-weight:normal;max-width:100%!important}label#label_28_10_1{font-weight:normal;max-width:100%!important}label#label_29_10_1{font-weight:normal;max-width:100%!important}.gform_wrapper li.gfield.gfield_error,.gform_wrapper li.gfield.gfield_error.gfield_contains_required.gfield_creditcard_warning{border:none!important}.gform_wrapper.gform_validation_error #gform_25 .top_label input.medium,.gform_wrapper.gform_validation_error .top_label select.medium{width:100%!important}input[type=radio] + label:before{box-shadow:0 0 1pt 0pt #c8c8c8;background-color:#ffffff;border:1px solid #c8c8c8;width:16px;height:16px}input[type=checkbox] + label:after{border:1px solid #ebebeb}input[type=radio]:checked + label:before{border:2px solid #fff;width:16px;height:16px}.gfield_checkbox li label:after{background-color:#ffffff}body .gform_wrapper #gform_25 .top_label div.ginput_container.ginput_container_textarea,body .gform_wrapper #gform_29 .top_label div.ginput_container.ginput_container_textarea{padding-bottom:0px;line-height:0}#form-bottom2.contact-form ul li.donors-radio.with-padding{padding-left:40px}@media(min-width:320px) and (max-width:768px){#form-bottom2{padding:20px}#form-bottom2 ul li.gf_left_half{float:left!important;width:48%!important}#form-bottom2 ul li.gf_right_half{float:left!important;width:48%!important}.gform_wrapper ul li.gf_right_half.gfield,.gform_wrapper ul li.gf_left_half.gfield{clear:none!important}#form-bottom2 ul li.donors-radio{display:block}#form-bottom2.contact-form ul li.donors-radio{width:100%!important}#form-bottom2.contact-form ul li.donors-radio.with-padding{padding-left:10px!important}div.ginput_complex.ginput_container.gf_name_has_2 span{width:100%!important}body #form-bottom2 .gform_wrapper .top_label div.ginput_container{width:100%!important}.gform_wrapper li.gfield.gfield_error.gfield_contains_required div.gfield_description.validation_message,div.gfield_description.validation_message{float:none;width:100%!important;padding:5px 0!important}div.gfield_description,div.gfield_description,li.gfield_html_formatted div.gfield_description,li.field_sublabel_below div.gfield_description{max-width:100%}#form-bottom2 ul li{margin-bottom:5px!important}#form-bottom2 ul.form-options label{text-indent:-2px}#form-bottom2 input[type="submit"]{font-size:13px!important;padding:17px!important;line-height:20px!important;display:block;margin:0 auto}.gform_wrapper .field_description_below .gfield_description{margin-top:-10px}.gform_wrapper #field_25_45.field_description_below .gfield_description{margin-top:-5px}input[type=radio] + label:before{width:14px;height:14px}input[type=radio]:checked + label:before{width:14px;height:14px}}@media(min-width:545px) and (max-width:768px){#form-bottom2 ul li.donors-radio{float:left;width:45%;height:auto!important;margin-bottom:0!important}}@media(min-width:360px) and (max-width:480px){#form-bottom2 small{font-size:11px!important;line-height:13px}#field_25_36 div.gfield_description,#field_25_39 div.gfield_description,li.gfield_html_formatted div.gfield_description,li.field_sublabel_below div.gfield_description{font-size:13px!important}#form-bottom2 #gform_25 input[type="submit"],#form-bottom2 #gform_29 input[type="submit"],#form-bottom2 #gform_28 input[type="submit"]{padding:14px!important;width:auto!important}#form-bottom2 ul label{font-size:13px!important}}@media(min-width:320px) and (max-width:359px){#form-bottom2 ul.form-options label{font-size:14px!important;text-indent:-2px}#form-bottom2 small{font-size:9px!important;line-height:13px}#field_25_36 div.gfield_description,#field_25_39 div.gfield_description,li.gfield_html_formatted div.gfield_description,li.field_sublabel_below div.gfield_description{font-size:9px!important}#form-bottom2 input[type="submit"]{font-size:12px!important;padding:10px 20px!important;line-height:10px!important;width:auto!important}#form-bottom2 #gform_25 ul label,#form-bottom2 #gform_28 ul label,#form-bottom2 #gform_29 ul label{font-size:13px!important}}@-webkit-keyframes autofill{to{color:#666;background:url(https://monashivf.com/assets/themes/monash/assets/images/checknew-mobile.png) no-repeat scroll 95% #edf4ec}}input:-webkit-autofill{-webkit-animation-name:autofill;-webkit-animation-fill-mode:both}</style>');
			var sidebar = $('#sidebar').clone();
			var form = $('#form-bottom').clone();
			$('#sidebar').remove();
			$('.col-sm-8.inner-content>h3').remove();
			$('.monash-o-btn').remove();
			$.ajax({
				url: 'https://monashivf.com/resources/free-ivf-nurse-chat/',
				type: 'POST',
				dataType: 'html',
			}) 
			.done(function(html) {
				$('.col-sm-4.sidebar').css('opacity','1');
				var clone = $(html).find('#form-bottom').clone();
				clone.attr('id','form-bottom2');
				clone.find('[enctype="multipart/form-data"]').removeAttr('target').removeAttr('id');
				clone.appendTo('.col-sm-4.sidebar');
				$('body').find('.col-sm-4.sidebar .datepicker').addClass('datepicker-here');
				$('body').find('.col-sm-4.sidebar .datepicker').removeClass('datepicker');
				$('body').on('click', '.col-sm-4.sidebar .ui-datepicker-trigger', function(event) {
					var init_datepicker = false;
					if($(this).data('init_datepicker') !== undefined){
						init_datepicker = $(this).data('init_datepicker');
					}
					if(init_datepicker === false){
						$(this).data('init_datepicker',true);
					}
					event.preventDefault();
				}); 
				$('body').find('#form-bottom2').css('padding-bottom','600px');
				$('body').find('#form-bottom2').prepend('<h3 style="padding-top:10px;">Get a free consultation on the IVF process</h3>');
				$('body').find('#form-bottom2 .gfield_label.gfield_label_before_complex').remove();
				$('body').find('#form-bottom2 .field_description_below:not(.recieved-occ-mail) .gfield_label').remove();
					var clone_btn = $('body').find('#form-bottom2 [value="Submit"]').clone();
					clone_btn.attr('value','BOOK YOUR FREE NURSE CALL');
					clone_btn.attr('onkeypress','');
					clone_btn.attr('onclick','');
					clone_btn.attr('id','');
					clone_btn.insertAfter('#form-bottom2 [value="Submit"]');
				$('body').find('#form-bottom2 [value="Submit"]').css('display','none');
				gformInitDatepicker_int1(); 
			});
			$('body').on('click','.ui-datepicker-trigger', function(){
				$(this).parent().find('input').focus();
			});

			$('body').on('blur','[enctype="multipart/form-data"] .datepicker_with_icon',function(){
				validatefn($(this));
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="First Name"]',function(){
				validatefn($(this));
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="First Name"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'First Name'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [name="input_38.6"]',function(){
				validatefn($(this));
			});
			$('body').on('focus','[enctype="multipart/form-data"] [name="input_38.6"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'First Name'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="Your Phone"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				var val = $(this).val();
				if(validatefn($(this),false) === true && validatePhone(val) === true){
					$(this).addClass('lv_valid');
					$(this).addClass('LV_valid_field');
				}else{
					$(this).addClass('lv_invalid');
					$(this).addClass('LV_invalid_field');
				}
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="Your Phone"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				var val = $(this).val();
				if(validatefn($(this),false) && validateEmail(val)){
					$(this).addClass('lv_valid');
					$(this).addClass('LV_valid_field');
				}else{
					$(this).addClass('lv_invalid');
					$(this).addClass('LV_invalid_field');
				}
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
			});
			$('body').on('click','[enctype="multipart/form-data"] [value="BOOK YOUR FREE NURSE CALL"]',function(){
				$(this).closest('[enctype="multipart/form-data"]').submit();
			});
			$('body').on('submit', '[enctype="multipart/form-data"]', function(event) {
				var action = $(this).attr('action');
				var fieldFirstName   = $('[placeholder="First Name"]',this);
				var fieldLastname    = $('[name="input_38.6"]',this);
				var fieldPhoneNumber = $('[placeholder="Your Phone"]',this);
				var fieldEmail       = $('[placeholder="Your Email"]',this);
				var datepicker       = $('.datepicker_with_icon',this);
				var validateFirstName   = validatefn(fieldFirstName);
				var validateLastname    = validatefn(fieldLastname);
				var validatePhoneNumber = validatefn(fieldPhoneNumber) && validatePhone(fieldPhoneNumber.val());
				var validatefieldEmail  = validatefn(fieldEmail)    && validateEmail(fieldEmail.val());
				var validatedatepicker  = validatefn(datepicker);
				if(validateFirstName && validateLastname && validatePhoneNumber && validatefieldEmail && validatedatepicker){
					var serialize           = $(this).serialize();
					var form                = $(this);
					$(this).find('.loader-form').css('display','block');
					$.ajax({
						url: action,
						type: 'POST',
						dataType: 'html',
						data: serialize,
					})
					.done(function(data) {
						var dataitem = $(data);
						if(data.search('gformRedirect') > 0){
							form.append(dataitem);
							gformRedirect();
						}else{
							dataitem.find('iframe').remove();
							dataitem.find('[type="text/javascript"]').remove();
							dataitem.find('[enctype="multipart/form-data"]').removeAttr('id').removeAttr('target').removeAttr('onsubmit');
							dataitem.find('.gfield_error input').addClass('lv_invalid');
							dataitem.find('.gform_button.button').removeAttr('onclick').removeAttr('onkeypress').removeAttr('onkeypress').after('<img src="https://monashivf.com/assets/plugins/gravityforms/images/spinner.gif" class="loader-form" />');
							$('#form-bottom').html('');
							$('#form-bottom').append(dataitem);
							setTimeout(function() {
								gformInitDatepicker_int1();
							},100);
						}
					});
				}
				return false;
			});
		}
	});
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePhone(p) {
  var phoneRe = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  return phoneRe.test(p);
}
function validatefn(p,addClasses=true) {
	var val = p.val();
	var placeholder = p.attr('placeholder').length > 0 ? p.attr('placeholder') : ' ';
	if(val === "" || val === placeholder){
		if(addClasses === false){}else{
			p.addClass('lv_invalid');
			p.addClass('LV_invalid_field');
			p.removeClass('lv_valid');
			p.removeClass('LV_valid_field');
		}
		return false;
	}else{
		if(addClasses === false){}else{
			p.removeClass('lv_invalid');
			p.removeClass('LV_invalid_field');
			p.addClass('lv_valid');
			p.addClass('LV_valid_field');
		}
		return true;
	}
}
function gformInitDatepicker_int1() {
	jQuery('body').find('[enctype="multipart/form-data"] .datepicker_with_icon').each(function() {
		jQuery(this).val(jQuery(this).attr('placeholder'));
		jQuery(this).removeClass( "hasDatepicker" );
		var a = jQuery(this);
		var r = Math.floor(Math.random() * (10000 - 1) ) + 1;
			a.attr('id','input_'+r);
			b = a.attr('id'),
			c = {
				yearRange: "-100:+20",
				showOn: "focus",
				dateFormat: "dd/mm/yy",
				onSelect:function(dateText) {
					validatefn(jQuery(this));
				}
			};
		c.dateFormat = "dd/mm/yy";
		a.datepicker(c);
	})
}