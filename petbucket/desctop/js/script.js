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
  script.src = '//code.jquery.com/jquery.min.js';
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

  var serialize = $('[action="/Basket/AddToBasket"]').serialize();
  var projectpath = "https://htmldiz.github.io/petbucket/desctop/";
	headlink = '<link href="'+projectpath+'css/style.css" rel="stylesheet">';
	$('head').append(headlink);
	outhtml = '<div class="pb_overlay" style="display:none;">';
	outhtml += '<div class="pb_popup">';
	outhtml += '<span class="pb_close_btn"></span>';
	outhtml += '<h2 class="pb_popup_title">Prevent tick and fleas for 5 months with Bayer’s Kiltix collar';
	outhtml += '</h2>';
	outhtml += '<div class="pb_popup_content">';
	outhtml += '<div class="pb_photo">';
	outhtml += '<div class="pb_main_img">';
	outhtml += '<img src="'+projectpath+'img/photo.png">';
	outhtml += '</div>';
	outhtml += '<div class="pb_thumbnails">';
	outhtml += '<a href="https://static.cdnbridge.com/resources/18/160536/resized/2B/84867883_360x360.jpg">';
	outhtml += '<img src="'+projectpath+'img/photo-mini.png" alt="">';
	outhtml += '</a>';
	outhtml += '<a href="https://static.cdnbridge.com/resources/18/160536/resized/2A/84867882_360x360.jpg">';
	outhtml += '<img src="'+projectpath+'img/photo-mini2.png" alt="">';
	outhtml += '</a>';
	outhtml += '</div>';
	outhtml += '</div>';
	outhtml += '<div class="pb_description">';
	outhtml += '<p class="pb_txt">Keep the collar around your dog’s neck, and feel secure in the knowledge that for the next 5 months ticks and fleas can’t resist the powerful insecticides covering your dog’s coat.</p>';
	outhtml += '<div class="pb_price_section">';
	outhtml += '<div class="pb_price_stars">';
	outhtml += '<span class="pb_price">Only $18.99</span>';
	outhtml += '<span class="pb_star">';
	outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
	outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
	outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
	outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
	outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
	outhtml += '</span>';
	outhtml += '</div>';
	outhtml += '<div class="pb_flea_mite">';
	outhtml += '<img src="'+projectpath+'img/no-flea.png" alt="">';
	outhtml += '<img src="'+projectpath+'img/no-mite.png" alt="">';
	outhtml += '</div>';
	outhtml += '</div>';
	outhtml += '<ul class="pb_advantages">';
	outhtml += '<li>';
	outhtml += '<span class="pb_tick"></span>Works for dogs of all sizes and breeds';
	outhtml += '</li>';
	outhtml += '<li>';
	outhtml += '<span class="pb_tick"></span>No-prescription required';
	outhtml += '</li>';
	outhtml += '<li>';
	outhtml += '<span class="pb_tick"></span>Safe for puppies older than 3 months';
	outhtml += '</li>';
	outhtml += '</ul>';
	outhtml += '</div>';
	outhtml += '</div>';
	outhtml += '<div class="pb_footer">';
	outhtml += '<div class="pb_no_btn pb_btn">';
	outhtml += '<a href="" class="">';
	outhtml += '<span class="pb_title_btn">No, thanks</span>continue to cart';
	outhtml += '</a>';
	outhtml += '</div>';
	outhtml += '<div class="pb_yes_btn pb_btn">';
	outhtml += '<a href="" class="pb_yes_btn_link_send">';
	outhtml += '<img src="'+projectpath+'img/cart.png" alt="">';
	outhtml += '<span>';
	outhtml += '<span class="pb_title_btn">Yes, add to сart<br></span>';
	outhtml += '<span>and protect my dog</span>';
	outhtml += '</span>';
	outhtml += '</a>';
	outhtml += '</div>';
	outhtml += '</div>';
	outhtml += '</div>';
	outhtml += '</div>';
	$('body').append(outhtml);
  $('body').on('click', '.pb_no_btn a', function(event) {
	location.href = "https://www.petbucket.com/Basket/AddToBasket";
  });
  $('body').on('click', 'span.pb_close_btn', function(event) {
	location.href = "https://www.petbucket.com/Basket/AddToBasket";
  });
  $('body').on('click', '.pb_yes_btn_link_send', function(event) {
	$.ajax({
		url: 'https://www.petbucket.com/Basket/AddToBasket',
		type: 'POST',
		dataType: 'html',
		data: {rad_Variant_1367960: '57786647',ProductId: '6976310',Quantity: '10'},
	})
	.done(function() {
		location.href = "https://www.petbucket.com/Basket/AddToBasket";
	});
  });
  $('body').on('submit', '[action="/Basket/AddToBasket"]', function(event) {
	  	$.ajax({
	  		url: 'https://www.petbucket.com/Basket/AddToBasket',
	  		type: 'POST',
	  		dataType: 'html',
	  		data: serialize,
	  	});
  	$('body').find('.pb_overlay').attr('style','');
  	return false;
  });
}