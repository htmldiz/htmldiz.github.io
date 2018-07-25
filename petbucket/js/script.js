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
function readyjQueryinit(){
	jQuery(function($) {
		var href = location.href;
		var url = "";
		if( href.indexOf('file://') === 0 ){
			url = "";
		}else{
			url = "https://htmldiz.github.io/"+projecturl+"/";
		}
		// alert(url);
		$('head').append('<link rel="stylesheet" href="'+url+'css/style.css" />');
		$('body').append('<a href="#" class="'+projecturl+'-step-1">protect your pet from parasites</a>');
		$('body').append('<div class="'+projecturl+'-step-2 petbucket-animate '+projecturl+'fadeOutLeft"><a href="#" class="'+projecturl+'-link '+projecturl+'dog-link dog"><img src="'+url+'img/dog.png" alt="For dogs" /><span>For dogs</span></a> <span>OR</span><a href="#" class="'+projecturl+'-link '+projecturl+'cat-link cat"><img src="'+url+'img/cat.png" alt="For cats" /><span>For cats</span></a></div>');
		$('body').append('<div class="'+projecturl+'-step-3 petbucket-animate '+projecturl+'fadeOutLeft"><span class="'+projecturl+'-step-3-title">prevent from:</span><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-flea" data-'+projecturl+'select="flea"><span>Flea</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-tick" data-'+projecturl+'select="tick"><span>tick</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-heartworm" data-'+projecturl+'select="heartworm"><span>heartworm</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-iw" data-'+projecturl+'select="iw"><span>investinal<br/>worms</span></a></div>');
		$('body').on('click', '.'+projecturl+'-step-1', function(event) {
			$(this).addClass(projecturl+'-animate');
			$(this).addClass(projecturl+'fadeOutLeft');
			$('.'+projecturl+'-step-2').addClass(projecturl+'-animate');
			$('.'+projecturl+'-step-2').addClass(projecturl+'fadeInRight');
			return false;
		});
		var type_it = "";
		$('body').on('click', '.'+projecturl+'-step-3 [data-'+projecturl+'select]', function(event) {
			var typehere = $(this).attr('data-'+projecturl+'select');
			var get_link = type_it+'-'+typehere;
			console.log(get_link);
			switch (get_link){
				case "dog-flea":
					location.href = "https://www.petbucket.com/c/4521472/1/flea.html";
				break;
				case "dog-tick":
					location.href = "https://www.petbucket.com/c/4521473/1/tick.html";
				break;
				case "dog-heartworm":
					location.href = "https://www.petbucket.com/c/4521474/1/heartworm.html";
				break;
				case "dog-iw":
					location.href = "https://www.petbucket.com/c/4521474/1/heartworm.html";
				break;
				case "cat-flea":
					location.href = "https://www.petbucket.com/c/4405843/1/flea.html";
				break;
				case "cat-tick":
					location.href = "https://www.petbucket.com/c/4540721/1/tick.html";
				break;
				case "cat-heartworm":
					location.href = "https://www.petbucket.com/c/4405844/1/heartworm.html";
				break;
				case "cat-iw":
					location.href = "https://www.petbucket.com/c/4405832/1/intestinal-worms.html";
				break;
			}
		});
		$('body').on('click', '.'+projecturl+'dog-link, .'+projecturl+'cat-link', function(event) {
			// $('.'+projecturl+'-step-2').addClass(projecturl+'fadeOutLeft');
			$('.'+projecturl+'-step-2').removeClass(projecturl+'fadeInRight');
			$('.'+projecturl+'-step-3').addClass(projecturl+'-animate');
			$('.'+projecturl+'-step-3').addClass(projecturl+'fadeInRight');
			if($(this).hasClass('cat')){
				type_it = "cat";
			}else{
				type_it = "dog";
			}
			return false;
		});
	});
}