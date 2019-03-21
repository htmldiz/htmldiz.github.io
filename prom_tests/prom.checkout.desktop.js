try {
    hj('trigger', 'exp-checkout');
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
  $("head").append("<link href='https://htmldiz.github.io/prom_tests/css/prom_checkout.css' type='text/css' rel='stylesheet' />")
  $(window).ready(function(){
  		console.log('GTM Loaded');
		function telephoneCheck(str) {
		  var isphone = /^\+?[0-9\-\+]{9,16}$/.test(str);
			console.log(isphone);
		  return isphone;
		}
  		function validateemailadnphone(){
  			var ret = true;
	  		$('#shoppingCartMountPoint [data-qaid="client_info"] .x-input__validation').remove();
  			var phone_number = $('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_phone"] input').val();
  			if(phone_number == '' || phone_number == '+380'){
  				is_phone = true;
  				$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_phone"]').append('<div class="x-input__validation" data-qaid="required_field">Это обязательное поле.</div>');
  				ret      = false;
  			}else{
	  			var is_phone = telephoneCheck(phone_number);
  			}
  			if(!is_phone){
  				$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_phone"]').append('<div class="x-input__validation" data-qaid="required_field">Номер может содержать только цифры, +, -, (, ) и содержать от 9 до 16 цифр</div>');
  				ret = false;
  			}
  			return ret;
  		}
  		function switch_tab(tabname){
  			var canbeactivate = false;
  			switch (tabname) {
  				case 'clientinfo':
  					$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row').css('display','none');
					$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form__accept').css('display','none');
					$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form__agreement').css('display','none');
  					$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-prepare__total').css('display','none');
		  			$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_email"]').parent().attr('style','');
		  			$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_phone"]').parent().attr('style','');
		  			$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row .nextstep').parent().attr('style','');
		  			canbeactivate = true;
  					break;
  				default:
	  				var validateep = validateemailadnphone();
	  				if(validateep == true){
	  					$('#shoppingCartMountPoint [data-qaid="client_info"] [data-activeitem="clientinfo"]').addClass('valid');
	  					$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row').attr('style','');
	  					$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-prepare__total').attr('style','');
	  					$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form__agreement').attr('style','');
						$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form__accept').attr('style','');
	  					$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row .nextstep').parent().css('display','none');
			  			$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_email"]').parent().css('display','none');
			  			$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_phone"]').parent().css('display','none');
			  			canbeactivate = true;
		  			}
  					break;
  			}
  			$('[data-activeitem]').removeClass('active');
  			if(canbeactivate == true){
  				$('[data-activeitem="'+tabname+'"]').addClass('active');
  			}
  		}
  		window.displaycartpage = false;
  		setTimeout(function(){
  			check_isready();
  		},10);
  		function check_isready(){
	  		if($('#shoppingCartMountPoint [data-qaid="client_info"]').length > 0){
		  		$('body').on('click', '[data-activeitem]', function(event) {
		  			var activeitem = $(this).attr('data-activeitem');
		  			switch_tab(activeitem);
		  			return false;
		  		});
		  		$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_email"]').parent().addClass('client_email-row');
				$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form-row [data-qaid="client_phone"]').parent().addClass('client_phone-row');
	  			if($('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form .form-top-links').length < 1){
	  				$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-form').prepend('<div class="form-top-links"><a class="active link-tab" href="#" data-activeitem="clientinfo">Шаг 1:<strong>Контакты</strong></a> <a class="link-tab" data-activeitem="delivery" href="#">Шаг 2: <strong>Доставка и оплата</strong></a></div>');
	  				$('#shoppingCartMountPoint [data-qaid="client_info"] .x-order-prepare__total').before('<div class="x-order-form-row"><span class="x-button x-button_width_full x-button_theme_purple nextstep"><span class="x-button__text qa-test-create-order">Выбрать способ доставки</span></span></div>');
	  			}
	  			switch_tab('clientinfo');
	  			$('body').on('click', '.nextstep', function(event) {
	  				var is_validate = validateemailadnphone();
	  				if(is_validate === true){
	  					switch_tab('delivery');
	  				}
	  				return false;
	  			});
	  			window.displaycartpage = true;
	  			
	  		}
	  		if(window.displaycartpage === false){
		  		setTimeout(function(){
		  			check_isready();
		  		},10);
	  		}
  		}
  })
}