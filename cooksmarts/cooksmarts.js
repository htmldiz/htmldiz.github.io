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
	console.log('%cTest is come!',"color:red;");
}

if(jQuery('.blog-sidebar').length){
	$html = '<div class="blog-sidebar-banner fixed-share-bar-banner">';
	$html += '<h3>Try the #1 Meal Plan Service</h3>';
	$html += '<h4>according to</h4>';
	$html += '<img src="">';
	$html += '<ul>';
		$html += '<li>Save time with done-for-you meal plans & grocery lists</li>';
		$html += '<li>Reduce food waste by buying only what you need</li>';
		$html += '<li>Enjoy gluten-free, paleo & vegetarian options for every meal</li>';
		$html += '<li>Say bye to dinnertime stress while cooking healthier</li>';
	$html += '</ul>';
		$html += '<div class="links">';
			$html += '<a href="#">Try meal plans for FREE</a>';
			$html += '<a href="#">Learn more</a>';
		$html += '</div>';
	$html += '</div>';
	jQuery('.blog-sidebar').append($html);
	var styles = "<style>";
	styles += `
	.fixed-share-bar.is_stuck{
		position:static !important;
	}
	`;
	styles    += "</style>";
	console.log(styles);
	jQuery('body').append(styles);
}