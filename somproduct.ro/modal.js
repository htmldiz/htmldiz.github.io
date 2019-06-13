jQuery(function($) {
	if(location.pathname == '/plaseaza-comanda'){
		$('#id_comments').html('TEST ORDER DO NOT PROCESS');
	}
	function clearmodalIds(datamessages = ""){
				$('body').find('[action="https://www.somproduct.ro/checkout/cart/couponPost"] button').attr('onclick','');
				$('body').find('#coupon_code').attr('id','');
				$('body').find('#remove-coupon').attr('id','');
				if($('body').find('#discount-coupon-form .messages').length>1){
					$('body').find('#discount-coupon-form .messages:eq(0)').remove();
				}
				$('body').find('#discount-coupon-form .messages-cupons').html('');
				$('body').find('#discount-coupon-form').prepend('<ul class="messages-cupons">'+datamessages+'</ul>');
				$('body').find('#discount-coupon-form').before('<div class="show-hide-form-coupon"><a class="show-hide-form-coupon-link" href="#">Got coupon?</a></div>');
				$('body').find('#discount-coupon-form').attr('id','').addClass('discount-coupon-ajax');
	}
	function reloadtotalAjaxmodal(data,datamessages){
		var html = $(data).find('.row.bottom-cart-container').html();
		$('body').find('.row.bottom-cart-container').html(html);
		clearmodalIds(datamessages);
	}
	function reloadAjaxmodal(data){
			if($(data).find('.cart [action="https://www.somproduct.ro/checkout/cart/updatePost"]').length){
				$('body').find('.modal-context').addClass('cotentmodal');
				var html = $(data).find('.cart [action="https://www.somproduct.ro/checkout/cart/updatePost"]').closest('.cart').html();
				$('body').find('.modal-context.cotentmodal').find('[data-modal-control="content"]').html(html);
				$('body').find('.modal-context.cotentmodal').find('[data-modal-control="content"]').find('.page-title').remove();
				clearmodalIds();
			}
	}
	$('body').on('click', '.show-hide-form-coupon-link', function(event) {
		$('body').find('.show-hide-form-coupon').addClass('d-none');
		$('body').find('[action="https://www.somproduct.ro/checkout/cart/couponPost"]').toggleClass('active');
		return false;
	});
	$('body').on('click', '[action="https://www.somproduct.ro/checkout/cart/couponPost"] button', function(event) {
		// event.preventDefault();
		var serialize = $('body').find('[action="https://www.somproduct.ro/checkout/cart/couponPost"]').serialize();
		$('body').find('.messages-cupons').html('');
		$.ajax({
			url: 'https://www.somproduct.ro/checkout/cart/couponPost',
			type: 'GET',
			dataType: 'html',
			data: serialize,
		})
		.done(function(data) {
			if($(data).find('.messages').length>0){
					var html = $(data).find('.messages').html();
					$('body').find('.messages-cupons').append(html);
			}
			if($(data).find('.success-msg').length > 0){
				$.ajax({
					url: 'https://www.somproduct.ro/checkout/cart',
					type: 'GET',
					dataType: 'html',
				})
				.done(function(datacome) {
					reloadAjaxmodal(data);
					// reloadtotalAjaxmodal(datacome,$(data).find('.messages').html());
				});
				console.log('add');
			}
		});
		
		return false;
	});
	$('body').append('<style>#discount-coupon-form,.modal-context{display:none !important;}.modal-context.cotentmodal{display:block !important;}.modal-content .grid-12.cart-header{display: none;}</style>');
	$(document).ajaxComplete(function(event, xhr, settings) {
		if(settings.url == 'https://www.somproduct.ro/smp/cart/ajaxAdd'){
			var interval = setInterval(function (){
				if( $('body').find('.modal-context').length>0 ){
					clearInterval(interval);
					$('body').find('.modal-context').attr('style','');
					$.ajax({
						url: 'https://www.somproduct.ro/checkout/cart',
						type: 'GET',
						dataType: 'html',
					})
					.done(function(data) {
						reloadAjaxmodal(data);
					});
				}
			});
		}
	});
	$('body').on('click', '.modal-context.cotentmodal.rand [data-modal-control="close"]', function(event) {
		$('.modal-context.cotentmodal.rand').remove();
	});
	var htmlmodal = '<div class="modal-context rand" role="dialog" style="">  <div class="modal-container" data-modal-control="container" role="region" style="width: 960px;">    <div class="modal-title-container"><div class="modal-title h1" data-modal-control="title" role="heading">Produs adăugat în coș</div></div>    <button class="modal-close" data-modal-control="close"></button>    <div class="modal-content" data-modal-control="content"></div>  </div></div>';
	$('a[href="https://www.somproduct.ro/checkout/cart"]').click(function(event) {
		$('body').append(htmlmodal);
		$.ajax({
			url: 'https://www.somproduct.ro/checkout/cart',
			type: 'GET',
			dataType: 'html',
		})
		.done(function(data) {
			reloadAjaxmodal(data);
		});
		return false;
	});
	$('body').on('click', '.spinner-item.left', function(event) {
		val2 = $(this).closest('.qty-wrapper').find('input').attr('value');
		val2 = Number(val2);
		val2--;
		if(val2 < 0){
			val2 = 0;
		}else{
			var val3 = $('.cart.cart-dropdown-toggle .mobile').html();
			val3 = Number(val3);
			val3--;
			if(val3 <= 0){
				val3 = "";
			}
			$('.cart.cart-dropdown-toggle .mobile').html(val3);
		}
		$(this).closest('.qty-wrapper').find('input').val(val2);
		$(this).closest('.qty-wrapper').find('input').attr('value',val2);
		$(this).closest('.qty-wrapper').find('input').trigger('change');
	});
	$('body').on('click', '.btn-remove', function(event) {
		var href = $(this).attr('href');
		$.ajax({
			url      : href,
			type     : 'GET',
			dataType : 'html',
		});
		$(this).closest('.cart-item').remove();
		return false;
	});
	$('body').on('click', '.spinner-item.right', function(event) {
		var val1 = $(this).closest('.qty-wrapper').find('input').attr('value');
		val1 = Number(val1);
		val1++;
		$(this).closest('.qty-wrapper').find('input').val(val1);
		$(this).closest('.qty-wrapper').find('input').attr('value',val1);
		$(this).closest('.qty-wrapper').find('input').trigger('change');
		var val3 = $('.cart.cart-dropdown-toggle .mobile').html();
			val3 = Number(val3);
			val3++;
			$('.cart.cart-dropdown-toggle .mobile').html(val3);
	});
	$('body').on('change', '[action="https://www.somproduct.ro/checkout/cart/updatePost"] input', function(event) {
		var serialize = $('[action="https://www.somproduct.ro/checkout/cart/updatePost"]').serialize();
		$.ajax({
			url: 'https://www.somproduct.ro/checkout/cart/updatePost',
			type: 'POST',
			dataType: 'html',
			data:serialize,
		})
		.done(function(data) {
			$.ajax({
				url: 'https://www.somproduct.ro/checkout/cart',
				type: 'GET',
				dataType: 'html',
			})
			.done(function(data) {
				reloadAjaxmodal(data);
			});
		})
		.always(function() {
			console.log("complete");
		});
		event.preventDefault();
	});
});