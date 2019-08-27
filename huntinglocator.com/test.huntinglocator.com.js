$('#clean-code-studio .container .single-column').closest('.container').removeClass('container').addClass('col-content').wrap('<div class="container container-wraper"><div class="row row-with-bnr"></div></div>');
$('body').find('#clean-code-studio .col-content').after('<div class="col-bnr"><div class="image-place-bnr"><img src="https://htmldiz.github.io/huntinglocator.com/image.png" /><div class="title-info">Can’t find a Lease?<br/>Let us do it for you.</div><ul><li>Tell us what your looking for in a short quiz</li><li>We will deliver you multiple lease options that match your needs</li></ul><a href="https://huntinglocator.com/hunting-survey">Find a lease for me</a><div class="foot-text">Only $199 - Money Back Guarantee</div></div></div>');
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
.image-place-bnr {
    margin-top: 18px;
}

.title-info {
    font-family: Oswald,Arial,sans-serif;
    font-size: 33px;
    font-weight: 400;
    letter-spacing: -0.89px;
    line-height: 43px;
    text-align: center;
}


.image-place-bnr a:after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 9px;
    background-image: url(https://htmldiz.github.io/huntinglocator.com/arrow.png);
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 10px;
}
.image-place-bnr img {
    position: absolute;
    z-index: 1;
}
.image-place-bnr a,
.image-place-bnr ul,
.image-place-bnr .foot-text,
.image-place-bnr,
.image-place-bnr .title-info {
    position:relative;
    z-index:2;
}
.image-place-bnr .foot-text{
	color: #ffffff;
	font-family: Lato;
	font-size: 15px;
	font-weight: 700;
	line-height: 17px;
	text-align:center;
}
.image-place-bnr .title-info {
    padding:45px 23px;
    color:#ffffff;
}

.image-place-bnr ul {
    text-align:center;
    list-style:none;
    padding:0;
    margin:0;

}
.image-place-bnr li + li:after,
.image-place-bnr li + li:before{
    content:"";
    display:block;
    width:3px;
    height:15px; 
    position:absolute;
    top:-30px;
    background-color:#ffffff;
    transform: rotate(40deg);
    left:calc(50% + 4px);
}
.image-place-bnr li + li:after{
    transform: rotate(-40deg);
    left:calc(50% - 4px);
}
.image-place-bnr li + li{
    position:relative;
    margin-top:45px;
}
.image-place-bnr li {
    color:#fff;
    display:block;
    margin-left:auto;
    margin-right:auto;
    max-width:224px;
    padding:24px;
    border-radius: 4px;
    border: 2px solid #f77d0f;
    background-color: #000000;
}

.image-place-bnr a {
    display:flex;
    margin-left:auto;
    margin-right:auto;
    align-items:center;
    justify-content:center;
    margin-top:86px;
    width: 224px;
    height: 48px;
    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    background-color: #f77d0f;
    color:#ffffff;
    text-align:center;
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