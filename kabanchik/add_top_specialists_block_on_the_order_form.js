try {
    hj('trigger', 'add_specialists');
} 
catch(e) {}

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


			$outhtml  = '<div class="wrap_ab_block">';
			$outhtml += '<h3 class="title_ab_block">Топ-специалисты в этой категории:</h3>';

			$outhtml += '<div class="item_ab_block">';
$outhtml += '<div class="kb-top-performer__collapsible-holder">'
$outhtml += '    <div class="kb-top-performer__wrapper">'
$outhtml += '        <div class="kb-top-performer__content">'
$outhtml += '            <div class="kb-top-performer__user">'
$outhtml += '                <div class="kb-top-performer__avatar">'
$outhtml += '                    <div class="b-rounded-image b-image-holder">'
$outhtml += '                        <a target="_blank" href="https://kabanchik.ua/user/1300124">'
$outhtml += '                            <img class="b-image-holder__img" src="https://images.kabanchik.ua/6c40cd2a-af1f-47fe-b005-39be6e0e6d83.jpg" alt="Павло Б." title="Павло Б.">'
$outhtml += '                        </a>'
$outhtml += '                    </div>'
$outhtml += '                </div>'
$outhtml += '                <div class="kb-top-performer__user-info">'
$outhtml += '                    <div class="kb-top-performer__name-holder">'
$outhtml += '                        <a class="kb-top-performer__name kb-link kb-link_color_content " target="_blank" href="https://kabanchik.ua/user/1300124">Павло Б.</a>'
$outhtml += '                    </div>'
$outhtml += '                    <div class="kb-top-performer__reviews-stats kb-top-performer__reviews-stats_type_sidebar">'
$outhtml += '						<div class="kb-reviews-stats kb-reviews-stats_size_small kb-reviews-stats_type_listing-performer">'
$outhtml += '                    		<div class="kb-reviews-stats__item" >'
$outhtml += '                        		<div class="kb-reviews-stats__count">19</div>'
$outhtml += '                        		<a target="_blank" href="https://kabanchik.ua/user/1300124#reviews">отзыва</a>'
$outhtml += '                    		</div>'
$outhtml += '                    		<div class="kb-reviews-stats__item">'
$outhtml += '                        		<div class="kb-reviews-stats__count">92%</div>'
$outhtml += '                        		<span>положительных</span>'
$outhtml += '                    		</div>'
$outhtml += '                		</div>'
$outhtml += '            		</div>'
$outhtml += '            		<div class="kb-top-performer__assign-button kb-top-performer__assign-button_type_sidebar">'
$outhtml += '                		<a class="b-button b-button_width_full " target="_blank" href="https://kabanchik.ua/task/assign/947721/cid/126"><span class="b-button__text">Предложить работу</span></a>'
$outhtml += '            		</div>'
$outhtml += '                </div>'
$outhtml += '            </div>'
$outhtml += '        </div>'
$outhtml += '    </div>'
$outhtml += '</div>'
$outhtml += '</div>'

			$outhtml += '<div class="item_ab_block">';
$outhtml += '<div class="kb-top-performer__collapsible-holder">'
$outhtml += '    <div class="kb-top-performer__wrapper">'
$outhtml += '        <div class="kb-top-performer__content">'
$outhtml += '            <div class="kb-top-performer__user">'
$outhtml += '                <div class="kb-top-performer__avatar">'
$outhtml += '                    <div class="b-rounded-image b-image-holder">'
$outhtml += '                        <a target="_blank" href="https://kabanchik.ua/user/50550">'
$outhtml += '                            <img class="b-image-holder__img" src="https://images.kabanchik.ua/8c5c9317-b286-4565-807d-847df3d65cc2.jpg" alt="Алексей Б." title="Алексей Б.">'
$outhtml += '                        </a>'
$outhtml += '                    </div>'
$outhtml += '                    <span class="kb-top-performer__badge"><span class="kb-top-badge"><img class="kb-top-badge__medal" src="https://hoggy.c.prom.st/static/images/medal.image-hc06df3454d3eb2160cbda148ede0ba5b4.svg" width="30" height="38"><span class="kb-top-badge__score">47</span></span></span>'
$outhtml += '                </div>'
$outhtml += '                <div class="kb-top-performer__user-info">'
$outhtml += '                    <div class="kb-top-performer__name-holder">'
$outhtml += '                        <a class="kb-top-performer__name kb-link kb-link_color_content " target="_blank" href="https://kabanchik.ua/user/50550">Алексей Б.</a>'
$outhtml += '                    </div>'
$outhtml += '        		    <div class="kb-top-performer__reviews-stats kb-top-performer__reviews-stats_type_sidebar">'
$outhtml += '               		 <div class="kb-reviews-stats kb-reviews-stats_size_small kb-reviews-stats_type_listing-performer">'
$outhtml += '                    		<div class="kb-reviews-stats__item" >'
$outhtml += '                        		<div class="kb-reviews-stats__count">452</div>'
$outhtml += '                    		    <a target="_blank" href="https://kabanchik.ua/user/50550#reviews">отзыва</a>'
$outhtml += '                    		</div>'
$outhtml += '                    		<div class="kb-reviews-stats__item">'
$outhtml += '                        		<div class="kb-reviews-stats__count">98%</div>'
$outhtml += '                    		    <span>положительных</span>'
$outhtml += '                    		</div>'
$outhtml += '                		</div>'
$outhtml += '            		</div>'
$outhtml += '       		     <div class="kb-top-performer__assign-button kb-top-performer__assign-button_type_sidebar">'
$outhtml += '       		         <a class="b-button b-button_width_full " target="_blank" href="https://kabanchik.ua/task/assign/35065/cid/126"><span class="b-button__text">Предложить работу</span></a>'
$outhtml += '     		        </div>'
$outhtml += '                </div>'
$outhtml += '            </div>'
$outhtml += '        </div>'
$outhtml += '    </div>'
$outhtml += '</div>'
$outhtml += '</div>'

			$outhtml += '<div class="item_ab_block">';
$outhtml += '<div class="kb-top-performer__collapsible-holder">'
$outhtml += '    <div class="kb-top-performer__wrapper">'
$outhtml += '        <div class="kb-top-performer__content">'
$outhtml += '            <div class="kb-top-performer__user">'
$outhtml += '                <div class="kb-top-performer__avatar">'
$outhtml += '                    <div class="b-rounded-image b-image-holder">'
$outhtml += '                        <a target="_blank" href="https://kabanchik.ua/user/201738">'
$outhtml += '                            <img class="b-image-holder__img" src="https://images.kabanchik.ua/de0b07bf-7d6c-4572-9d1e-7b62bcf01187.jpg" alt="Александр К." title="Александр К.">'
$outhtml += '                        </a>'
$outhtml += '                    </div>'
$outhtml += '                    <span class="kb-top-performer__badge"><span class="kb-top-badge"><img class="kb-top-badge__medal" src="https://hoggy.c.prom.st/static/images/medal.image-hc06df3454d3eb2160cbda148ede0ba5b4.svg" width="30" height="38"><span class="kb-top-badge__score">24</span></span></span>'
$outhtml += '                </div>'
$outhtml += '                <div class="kb-top-performer__user-info">'
$outhtml += '                    <div class="kb-top-performer__name-holder">'
$outhtml += '                        <a class="kb-top-performer__name kb-link kb-link_color_content " target="_blank" href="https://kabanchik.ua/user/201738">Александр К.</a>'
$outhtml += '                    </div>'
$outhtml += '		            <div class="kb-top-performer__reviews-stats kb-top-performer__reviews-stats_type_sidebar">'
$outhtml += '		                <div class="kb-reviews-stats kb-reviews-stats_size_small kb-reviews-stats_type_listing-performer">'
$outhtml += '		                    <div class="kb-reviews-stats__item" >'
$outhtml += '		                        <div class="kb-reviews-stats__count">378</div>'
$outhtml += '		                        <a target="_blank" href="https://kabanchik.ua/user/201738#reviews">отзыва</a>'
$outhtml += '		                    </div>'
$outhtml += '		                    <div class="kb-reviews-stats__item">'
$outhtml += '                       		 <div class="kb-reviews-stats__count">93%</div>'
$outhtml += '                   		     <span>положительных</span>'
$outhtml += '               		     </div>'
$outhtml += '       		        </div>'
$outhtml += ' 		            </div>'
$outhtml += '		            <div class="kb-top-performer__assign-button kb-top-performer__assign-button_type_sidebar">'
$outhtml += '		                <a class="b-button b-button_width_full " target="_blank" href="https://kabanchik.ua/task/assign/150038/cid/126"><span class="b-button__text">Предложить работу</span></a>'
$outhtml += '		            </div>'
$outhtml += '                </div>'
$outhtml += '            </div>'
$outhtml += '        </div>'
$outhtml += '    </div>'
$outhtml += '</div>'
$outhtml += '</div>'

			$outhtml += '<div class="item_ab_block">';
$outhtml += '<div class="kb-top-performer__collapsible-holder">'
$outhtml += '    <div class="kb-top-performer__wrapper">'
$outhtml += '        <div class="kb-top-performer__content">'
$outhtml += '            <div class="kb-top-performer__user">'
$outhtml += '                <div class="kb-top-performer__avatar">'
$outhtml += '                    <div class="b-rounded-image b-image-holder">'
$outhtml += '                        <a target="_blank" href="https://kabanchik.ua/user/866096">'
$outhtml += '                            <img class="b-image-holder__img" src="https://images.kabanchik.ua/fee0a401-93bd-439d-8eba-5f1963f95dd5.jpeg" alt="Денис В." title="Денис В.">'
$outhtml += '                        </a>'
$outhtml += '                    </div>'
$outhtml += '                </div>'
$outhtml += '                <div class="kb-top-performer__user-info">'
$outhtml += '                    <div class="kb-top-performer__name-holder">'
$outhtml += '                        <a class="kb-top-performer__name kb-link kb-link_color_content " target="_blank" href="https://kabanchik.ua/user/866096">Денис В.</a>'
$outhtml += '                    </div>'
$outhtml += '		            <div class="kb-top-performer__reviews-stats kb-top-performer__reviews-stats_type_sidebar">'
$outhtml += '		                <div class="kb-reviews-stats kb-reviews-stats_size_small kb-reviews-stats_type_listing-performer">'
$outhtml += '		                    <div class="kb-reviews-stats__item" >'
$outhtml += '		                        <div class="kb-reviews-stats__count">143</div>'
$outhtml += '		                        <a target="_blank" href="https://kabanchik.ua/user/866096#reviews">отзыва</a>'
$outhtml += '		                    </div>'
$outhtml += '		                    <div class="kb-reviews-stats__item">'
$outhtml += '		                        <div class="kb-reviews-stats__count">96%</div>'
$outhtml += '		                        <span>положительных</span>'
$outhtml += '		                    </div>'
$outhtml += '		                </div>'
$outhtml += '		            </div>'
$outhtml += '		            <div class="kb-top-performer__assign-button kb-top-performer__assign-button_type_sidebar">'
$outhtml += '		                <a class="b-button b-button_width_full " target="_blank" href="https://kabanchik.ua/task/assign/649530/cid/126"><span class="b-button__text">Предложить работу</span></a>'
$outhtml += '		            </div>'
$outhtml += '                </div>'
$outhtml += '            </div>'
$outhtml += '        </div>'
$outhtml += '    </div>'
$outhtml += '</div>'
$outhtml += '</div>'

			$outhtml += '<div class="item_ab_block">';
$outhtml += '<div class="kb-top-performer__collapsible-holder">'
$outhtml += '    <div class="kb-top-performer__wrapper">'
$outhtml += '        <div class="kb-top-performer__content">'
$outhtml += '            <div class="kb-top-performer__user">'
$outhtml += '                <div class="kb-top-performer__avatar">'
$outhtml += '                    <div class="b-rounded-image b-image-holder">'
$outhtml += '                        <a target="_blank" href="https://kabanchik.ua/user/1166559">'
$outhtml += '                            <img class="b-image-holder__img" src="https://images.kabanchik.ua/464a8ca8-a463-40e3-8922-db57e8766f31.jpg" alt="Андрей Ф." title="Андрей Ф.">'
$outhtml += '                        </a>'
$outhtml += '                    </div>'
$outhtml += '                </div>'
$outhtml += '                <div class="kb-top-performer__user-info">'
$outhtml += '                    <div class="kb-top-performer__name-holder">'
$outhtml += '                        <a class="kb-top-performer__name kb-link kb-link_color_content " target="_blank" href="https://kabanchik.ua/user/1166559">Андрей Ф.</a>'
$outhtml += '                    </div>'
$outhtml += '		            <div class="kb-top-performer__reviews-stats kb-top-performer__reviews-stats_type_sidebar">'
$outhtml += '		                <div class="kb-reviews-stats kb-reviews-stats_size_small kb-reviews-stats_type_listing-performer">'
$outhtml += '		                    <div class="kb-reviews-stats__item" >'
$outhtml += '		                        <div class="kb-reviews-stats__count">13</div>'
$outhtml += '		                        <a target="_blank" href="https://kabanchik.ua/user/866096#reviews">отзыва</a>'
$outhtml += '		                    </div>'
$outhtml += '		                    <div class="kb-reviews-stats__item">'
$outhtml += '		                        <div class="kb-reviews-stats__count">95%</div>'
$outhtml += '		                        <span>положительных</span>'
$outhtml += '		                    </div>'
$outhtml += '		                </div>'
$outhtml += '		            </div>'
$outhtml += '		            <div class="kb-top-performer__assign-button kb-top-performer__assign-button_type_sidebar">'
$outhtml += '		                <a class="b-button b-button_width_full " target="_blank" href="https://kabanchik.ua/task/assign/857364/cid/126"><span class="b-button__text">Предложить работу</span></a>'
$outhtml += '		            </div>'
$outhtml += '                </div>'
$outhtml += '            </div>'
$outhtml += '        </div>'
$outhtml += '    </div>'
$outhtml += '</div>'
$outhtml += '</div>'
$outhtml += '<a class="ab_show_all " target="_blank" href="https://kiev.kabanchik.ua/category/remont-bitovoy-tehniki">Показать еще</a>'


			$outhtml  += '</div>';
			$('.kb-task-create__item.kb-task-create__item_state_active.qa-task-details').append($outhtml);
			setTimeout(function(){ 
				var spaceTop = $(".kb-info-panel.kb-info-panel_pb_0").outerHeight(true) +  $(".kb-task-create__item.kb-task-create__item_state_passed-step").outerHeight(true)
				console.log(spaceTop)
				var	heightAbBlock = $(".kb-task-create").height() - spaceTop - 25
				console.log(heightAbBlock)
				$(".wrap_ab_block").css("height",heightAbBlock)
			}, 30);


var styles = "<style>";
styles += `
.kb-task-create__item.kb-task-create__item_state_active.qa-task-details {
	position: relative;
}
.kb-task-create>* {
    width: calc(100% - 350px);
}
.kb-task-create__item_state_passed-step {
	width: 100%;
}
.title_ab_block {
    font-weight: bold;
    font-size: 14px;
    padding-bottom: 22px;
    text-align: center;
}
.kb-info-panel.kb-info-panel_pb_0 {
	width: 100%;
}
.wrap_ab_block {
	width: 320px;
	position: absolute;
	height: 100%;
	left: calc(100% - 13px);
	top: 0;
	padding-left: 10px;
	border-left: 1px solid #E8E8E8;
	margin-top: 22px;
}
.kb-estimated-cost {
	width: 360px!important;
}
#price-checkbox-wrapper {
	flex-wrap: wrap;
}
#price-checkbox-wrapper .kb-text.kb-text_mt_10 {
	margin-top: 10px!important;
}
.kb-task-create-payment__estimated-cost .kb-task-create-payment__attributes {
	width: 360px;
	flex-wrap: wrap;
}
.kb-task-create-payment__attributes .kb-task-create-payment__radio-holder {
    margin-bottom: 10px;
}
.ab_show_all {
	line-height: 1.8;
	color: #959595;
	padding: 7px 45px;
	border: 1px solid #D3D3D3;
	border-radius: 6px;
	display: block;
	margin: auto;
	width: 120px;
	text-align: center;
}
.item_ab_block {
	padding: 12px 12px 15px 10px;
	border: 1px solid #D3D3D3;
	border-radius: 6px;
	margin-bottom: 10px;
}

.kb-top-performer__sidebar {
    width: 125px;
    padding-left: 10px;
}
.kb-top-performer__avatar {
    width: 53px;
    padding-right: 15px;
}
.kb-top-performer__badge {
    right: 15px;
    bottom: auto;
    width: 18px;
    top: 35px;
}
.kb-top-performer__name {
	margin-right: 0;
}
.kb-top-performer__name-holder {
	font-size: 14px;
}
.kb-top-badge__score {
    top: 12px;
    font-size: 8px;
}
.b-button_width_full .b-button__text {
	font-size: 13px;
}
.b-button_width_full {
	height: 32px;
}
.kb-reviews-stats_size_small .kb-reviews-stats__count {
	font-size: 15px;
	text-align: left;
	padding-bottom: 2px;
}
.kb-top-performer__reviews-stats_type_sidebar a {
	font-size: 11px;
}
.kb-reviews-stats_size_small .kb-reviews-stats__item {
	font-size: 11px;
}
.kb-reviews-stats_type_listing-performer .kb-reviews-stats__item {
	 padding: 0 20px;
	 text-align: left;
}
.kb-top-performer__assign-button_type_sidebar {
    margin: 10px 0 0;
}
.kb-top-performer__reviews-stats {
	margin-top: 12px;
}
.kb-reviews-stats_type_listing-performer .kb-reviews-stats__item:first-child {
	padding-left: 0;
}
@media(max-width: 1199px) {
	.kb-form {
		width: auto;
	}
	.kb-task-create-payment__section {
		flex-wrap: wrap;
	}
	.kb-task-create-payment__estimated-cost {
		margin-top: 20px;
		width: 100%;
	}
	.kb-estimated-cost {
    	width: 100%!important;
	}
	.kb-task-create__controls-holder {
		    margin-left: 0;
	}
	.kb-task-create-payment__item.kb-task-create-payment__item_type_publish-description {
		width: 360px;
		padding-left: 0;
	}
}
`;
styles    += "</style>";
jQuery('body').append(styles);

	});
}