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
  $(window).ready(function(){
		$('body').on('click','.btn-trg',function(){
			$('[data-qaid="shopping_cart"]').click();
		});
		$('body').on('click','[data-qaid="shopping_cart"]',function(){
			if($('[data-qaid="portable-shoping-cart-block"] .info-pr-m').length < 1){
				setTimeout(function(){
					$('[data-qaid="portable-shoping-cart-block"]').prepend('<a href="https://prom.ua/safe_shopping"><img class="info-pr-m" src="https://htmldiz.github.io/prom_tests/img/info-pr-m.png" style="width: 100%;margin-top: 10px;" /></a>');
				},100);
			}
		});
  	if(sessionStorage.__io_landing_uri_undefined == '/safe_shopping'){
  		$('.b-safe-shop').append('<button data-qaid="portable-place-order-button" class="b-cart__button btn-trg">Оформить заказ</button>');
	}
  })
}
// @modify 2019-02-04 20:43