window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'hj-cro-event',
	'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
});
var projecturl = "petbucket";
function initjQuery(callback) {
	var script = document.createElement( "script" )
	script.type = "text/javascript";
	if(script.readyState) {
		script.onreadystatechange = function() {
			if( script.readyState === "loaded" || script.readyState === "complete" ) {
				script.onreadystatechange = null;
				callback();
			}
		};
	}else{
		script.onload = function() {
			callback();
		};
	}
	var src = "";
	var href = location.href;
	if( href.indexOf('file://') === 0 ){
		src = "https:";
	}
	script.src = src+'//code.jquery.com/jquery.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	initjQuery(function() {
		readyjQueryinit();
	});
}else{
	readyjQueryinit();
}
function getCookiejQueryinit(name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookiejQueryinit(name,value) {
	var date = new Date(new Date().getTime() + 30 *60 * 1000);
	document.cookie = name+"="+value+"; path=/; expires=" + date.toUTCString();
}
function readyjQueryinit(){
	jQuery(function($) {
		var href = location.href;
		var url = "";
		if( href.indexOf('file://') === 0 ){
			url = "";
		}else{
			url = "https://htmldiz.github.io/"+projecturl+"/";
		}
		var reg = new RegExp(/www.petbucket.com\/blog\/(.*).html$/i);
		var href  = location.origin+location.pathname;
		console.log('variant c');
		if(href.search(reg) > -1){
			setCookiejQueryinit('change_title',true);
			$('head').append('<link rel="stylesheet" href="'+url+'css/style.css" />');
			$('body').append('<a href="#" class="'+projecturl+'-step-1" data-localizer="detect"><img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QNTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE0QjBCMjgyOUZFQjExRThCN0IzRjBFRkZBMEM2MjBCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0QjBCMjgxOUZFQjExRThCN0IzRjBFRkZBMEM2MjBCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZGNmNjQ5NmEtOWZlYS0xMWU4LTljYmUtOWI4YTcxYjQ1OTNjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZGNmNjQ5NmEtOWZlYS0xMWU4LTljYmUtOWI4YTcxYjQ1OTNjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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" alt="" />protect your pet from parasites</a>');
			$('body').append('<div class="'+projecturl+'-step-2 petbucket-animate '+projecturl+'fadeOutLeft"><a href="#" class="'+projecturl+'-link '+projecturl+'dog-link dog"><img src="'+url+'img/dog.png" alt="For dogs" /><span data-localizer="detect">For dogs</span></a> <span>OR</span><a href="#" class="'+projecturl+'-link '+projecturl+'cat-link cat"><img src="'+url+'img/cat.png" alt="For cats" /><span data-localizer="detect">For cats</span></a></div>');
			$('body').append('<div class="'+projecturl+'-step-3 petbucket-animate '+projecturl+'fadeOutLeft"><div class="'+projecturl+'-step-3-title">prevent from:</div><div class="petbucket-steps"><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-flea" data-'+projecturl+'select="flea"><span data-localizer="detect">Flea</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-tick" data-'+projecturl+'select="tick"><span data-localizer="detect">tick</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-heartworm" data-'+projecturl+'select="heartworm"><span data-localizer="detect">heartworm</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-iw" data-'+projecturl+'select="iw"><span data-localizer="detect">investinal worms</span></a></div></div>');
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
			'event': 'gtm-cro-event',
			'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
			'gtm-cro-event-action': 'load',
			'gtm-cro-event-label': 'Protect your pet from parasites'
			});
			$('body').on('click', '.'+projecturl+'-step-1', function(event) {
				$(this).addClass(projecturl+'-animate');
				$(this).addClass(projecturl+'fadeOutLeft');
				$('.'+projecturl+'-step-2').addClass(projecturl+'-animate');
				$('.'+projecturl+'-step-2').addClass(projecturl+'fadeInRight');
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Protect your pet from parasites'
				});
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
				'gtm-cro-event-action': 'load',
				'gtm-cro-event-label': 'Dogs/Cats'
				});
				return false;
			});
			var type_it = "";
			$('body').on('click', '.'+projecturl+'dog-link, .'+projecturl+'cat-link', function(event) {
				window.dataLayer = window.dataLayer || [];
				if($(this).hasClass('cat')){
					type_it = "cat";
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Cats'
					});
					location.href = "https://www.petbucket.com/c/4405799/1/for-cats.html";
				}else{
					type_it = "dog";
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Dogs'
					});
					location.href = "https://www.petbucket.com/c/4521471/1/for-dogs.html";
				}
				return false;
			});
		}
	});
}