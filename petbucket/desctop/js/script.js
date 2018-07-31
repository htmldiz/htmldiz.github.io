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
	$.ajax({
		url: 'https://www.petbucket.com/Basket/AddToBasket',
		type: 'POST',
		dataType: 'html',
		data: {rad_Variant_1367960: '57786647',ProductId: '6976310',Quantity: '10'},
	})
	.done(function() {
		console.log("success");
	});
}