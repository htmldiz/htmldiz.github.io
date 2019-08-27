$('#clean-code-studio .container .single-column').closest('.container').removeClass('container').addClass('col-content').wrap('<div class="container container-wraper"><div class="row row-with-bnr"></div></div>');
$('body').find('#clean-code-studio .col-content').after('<div class="col-bnr"><div class="image-place-bnr"><img src="https://htmldiz.github.io/huntinglocator.com/image.png" /><div class="title">Can’t find a Lease?<br/>Let us do it for you.</div><ul><li>Tell us what your looking for in a short quiz</li><li>We will deliver you multiple lease options that match your needs</li></ul><a href="https://huntinglocator.com/hunting-survey">Find a lease for me</a><div class="foot-text">Only $199 - Money Back Guarantee</div></div></div>');
var styles = `<style> 
#clean-code-studio .row-with-bnr{
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}
#clean-code-studio .col-bnr{
	-webkit-box-flex: 0;
	-webkit-flex: 0 0 293px;
	-ms-flex: 0 0 293px;
	flex: 0 0 293px;
	max-width: 293px;
}
#clean-code-studio .col-content{
	padding-left: 15px;
	padding-right: 15px;
	-webkit-box-flex: 0;
	-webkit-flex: 0 0 calc(100% - 293px);
	-ms-flex: 0 0 calc(100% - 293px);
	flex: 0 0 calc(100% - 293px);
	max-width: calc(100% - 293px);
}
#clean-code-studio .col-bnr{
	height: 699px;
}
.featured-listings .container ul{
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	-ms-flex-pack: justify;
	justify-content: space-between;
}

@media(min-width:1200px){
	.container {
	    max-width: 1300px;
	    width: 1300px;
	}
	#listings div.featured-listings ul li{
		width: unset;
		max-width: 100%;
		flex: 0 0 auto;
	}
}
</style>`;
styles = styles += '';
$('body').after(styles);