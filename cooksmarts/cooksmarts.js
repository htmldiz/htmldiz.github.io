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
if(jQuery('.blog-sidebar').length){
	$html = '<div class="blog-sidebar-banner fixed-share-bar-banner">';
	$html += '<h3>Try the #1 Meal Plan Service</h3>';
	$html += '<h4>according to</h4>';
	$html += '<img src="https://htmldiz.github.io/cooksmarts/logo.png">';
	$html += '<ul>';
		$html += '<li>Save time with done-for-you meal plans & grocery lists</li>';
		$html += '<li>Reduce food waste by buying only what you need</li>';
		$html += '<li>Enjoy gluten-free, paleo & vegetarian options for every meal</li>';
		$html += '<li>Say bye to dinnertime stress while cooking healthier</li>';
	$html += '</ul>';
		$html += '<div class="links">';
			$html += '<a href="https://mealplans.cooksmarts.com/trial_subscription/new?b">Try meal plans for FREE</a>';
			$html += '<a href="https://www.cooksmarts.com/weekly-meal-planner/join/?utm_source=public-recipe&utm_medium=link&utm_campaign=post-steps-cta">Learn more</a>';
		$html += '</div>';
	$html += '</div>';
	setInterval(function(){
		var styl = jQuery('body').find('.fixed-share-bar').attr('style');
		jQuery('body').find('.fixed-share-bar-banner').attr('style',styl);
	}, 1);
	jQuery('.blog-sidebar').append($html);
}
if(jQuery('#makeBlock').length){
	$html = '<div class="makeBlock-blur">';
	$html += `<div class="makeBinfos">
		<p>Unlock this meal along with hundreds of smart meal plans and never stress about, “What’s for dinner?” again</p>
		<div class="links-makeBlock">
			<a href="https://mealplans.cooksmarts.com/trial_subscription/new?b">get 1 free month</a>
			<a href="https://www.cooksmarts.com/weekly-meal-planner/join/?utm_source=public-recipe&utm_medium=link&utm_campaign=post-steps-cta">Learn more</a>
		</div>
	</div>`;
	$html += '</div>';
	jQuery('#makeBlock').append($html);
}
if(jQuery('.recipeInstructions').length){
	$html = '<div class="makeBlock-blur">';
	$html += `<div class="makeBinfos">
		<p>Unlock this meal along with hundreds of smart meal plans and never stress about, “What’s for dinner?” again</p>
		<div class="links-makeBlock">
			<a href="https://mealplans.cooksmarts.com/trial_subscription/new?a=&utm_campaign=post-steps-cta&utm_medium=link&utm_source=public-recipe">get 1 free month</a>
			<a href="https://www.cooksmarts.com/weekly-meal-planner/join/?utm_source=public-recipe&utm_medium=link&utm_campaign=post-steps-cta">Learn more</a>
		</div>
	</div>`;
	$html += '</div>';
	var count_all = jQuery('.recipeInstructions ol').length - 1;
	jQuery('.recipeInstructions ol:eq('+count_all+')').addClass('last');
	jQuery('.recipeInstructions').append($html);
}
	var styles = "<style>";
	styles += `
	.fixed-share-bar.is_stuck{
		position:static !important;
	}
	.recipeInstructions ol.last,
	#makeBlock ol{
		filter: blur(5px);
	  -webkit-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
	}
	#makeBlock{
		position: relative;
	}
	.makeBinfos{
		
	}
	.makeBinfos p{
		text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
		color: #ffffff;
		font-family: Roboto;
		font-size: 25px;
		font-weight: 400;
		margin-bottom: 16px;
		text-align:center;
	}
	.links-makeBlock a:last-child{
		display:block;
		margin-right: auto;
		margin-left: auto;
		width: 230px;
		text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
		color: #ffffff;
		font-family: Roboto;
		font-size: 16px;
		font-weight: 500;
		text-decoration:underline;
		text-align: center;
		margin-top:9px;
	}
	.links-makeBlock a:first-child{
		display:block;
		margin-right: auto;
		margin-left: auto;
		width: 230px;
		height: 51px;
		background-color: #f69320;
		color: #ffffff;
		font-family: Roboto;
		font-size: 18px;
		font-weight: 400;
		letter-spacing: 1.13px;
		text-transform: uppercase;
		text-decoration:none;
		text-align: center;
		height: 51px;
		padding: 13px 0px;
	}
	.recipeInstructions{
	    position: relative;
	    display: block;
	}
	.makeBlock-blur {
		height: 209px;
		background-color: rgba(112, 113, 112, 0.6);
		width: 100%;
		position: absolute;
		bottom: 0;
		padding: 34px 23px;
	}
	.fixed-share-bar-banner{
border: 2px solid #dbdbdb;
padding: 25px 13px;
margin: 25px 0 0;
}
.fixed-share-bar-banner img{
max-width: 177px;
margin: auto;
}
.fixed-share-bar-banner h3{
text-align: center;
font-size: 24px;
font-weight: 500;
text-transform: uppercase;
color: #5e6166;
margin: 0 auto 10px;
line-height: 1.2;
}
.fixed-share-bar-banner h4{
text-transform: none;
margin: 0 auto 10px;
color: #888a8d;
font-family: Roboto;
font-size: 18px;
}
.fixed-share-bar-banner ul {
padding: 0;
margin: 20px 0 70px 28px;
list-style: none;
z-index: 2;
position: relative;
}
.fixed-share-bar-banner li {
position: relative;
color: #5e6166;
font-family: Roboto;
margin-bottom: 20px;
font-weight: 400;
}
.fixed-share-bar-banner li:before,
.fixed-share-bar-banner li:after {
display: block;
position: absolute;
background-color:#84b822;
content: '';
width: 2px;
}
.fixed-share-bar-banner li:before {
top:8px;
left:-13px;
transform: rotate(45deg);
height: 12px;
}
.fixed-share-bar-banner li:after {
top: 12px;
left:-19px;
transform: rotate(-45deg);
height:7px;
}
.fixed-share-bar-banner .links a {
color: #fff;
font-size: 18px;
text-align: center;
display: flex;
justify-content: center;
font-family: Roboto;
align-items: center;
z-index: 2;
position: relative;
}
.fixed-share-bar-banner .links a:first-child{
background-color:#f69320;
padding: 15px 25px;
font-weight: 400;
}
.fixed-share-bar-banner .links a:last-child{
font-weight: 500;
text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
text-decoration: underline;
margin: 15px 0 0;
}
.fixed-share-bar-banner{
background-image: url(https://htmldiz.github.io//cooksmarts/bg.png);
background-repeat: no-repeat;
background-position: 0 100%;
overflow: hidden;
position: relative;
}
.fixed-share-bar-banner:after{
background: linear-gradient(to bottom, rgba(255, 255, 255, .9) 40%, rgba(255, 255, 255, 0) 100%);
content: "";
display: block;
height: 60%;
left: 0;
position: absolute;
bottom: 0;
width: 100%;
}
	`;
	styles    += "</style>";
	console.log(styles);
	jQuery('body').append(styles);
}