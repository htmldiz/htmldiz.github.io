try {
    hj('trigger', 'hj-cro-event-popup');
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
window.appslist = {"78":"\/78\/installers\/1536144371-5b8fb3f32b03e\/install-cleanmymac","79":"\/79\/installers\/1535723553-5b89482140ea6\/install-gemini","269":"\/269\/installers\/1535722563-5b89444395c73\/install-wallpaper-wizard","160":"\/160\/installers\/1535724381-5b894b5dc7ac5\/install-prizmo","247":"\/247\/installers\/1535722261-5b89431557751\/install-mosaic","294":"\/294\/installers\/1535724282-5b894afae00e2\/install-spotless","70":"\/70\/installers\/1535723711-5b8948bfe2b3b\/install-pagico","75":"\/75\/installers\/1536317960-5b925a089e614\/install-jump-desktop","80":"\/80\/installers\/1535722889-5b8945894c76c\/install-marked","254":"\/254\/installers\/1535723222-5b8946d689c76\/install-photolemur","136":"\/136\/installers\/1535723214-5b8946ceb3b68\/install-renamer","194":"\/194\/installers\/1535723374-5b89476e125cb\/install-archiver","316":"\/316\/installers\/1535991905-5b8d6061c2a0c\/install-espresso","232":"\/232\/installers\/1535722790-5b8945262423d\/install-sip","288":"\/288\/installers\/1535724155-5b894a7b7f935\/install-secrets","83":"\/83\/installers\/1535784880-5b8a37b009b6a\/install-chronicle","64":"\/64\/installers\/1535723720-5b8948c88e9be\/install-rapidweaver","209":"\/209\/installers\/1535721356-5b893f8cd1f60\/install-squash","275":"\/275\/installers\/1535723643-5b89487b5f78f\/install-switchem","222":"\/222\/installers\/1536657953-5b978a21921f0\/install-downie","219":"\/219\/installers\/1535722416-5b8943b00f240\/install-permute","253":"\/253\/installers\/1536079513-5b8eb6992d898\/install-forklift","300":"\/300\/installers\/1536079824-5b8eb7d0ce6d2\/install-aquarelo-","175":"\/175\/installers\/1535721719-5b8940f7d6c64\/install-capto","291":"\/291\/installers\/1535721422-5b893fce1b135\/install-boom-3d","297":"\/297\/installers\/1536815580-5b99f1dc0a079\/install-tableplus","206":"\/206\/installers\/1535723229-5b8946dd0f0ff\/install-goodtask","178":"\/178\/installers\/1536841342-5b9a567e549c0\/install-elmedia-player","202":"\/202\/installers\/1535721886-5b89419ec8d07\/install-folx","286":"\/286\/installers\/1535724185-5b894a995bc57\/install-photobulk","176":"\/176\/installers\/1535723759-5b8948efe377f\/install-imazing","272":"\/272\/installers\/1536574111-5b96429fe1b7e\/install-pdf-search","72":"\/72\/installers\/1535722568-5b8944482bc0e\/install-blogo","218":"\/218\/installers\/1535727429-5b895745786c5\/install-screens","134":"\/134\/installers\/1535721946-5b8941daf22fe\/install-focused","197":"\/197\/installers\/1535720913-5b893dd139760\/install-gifox","192":"\/192\/installers\/1535722613-5b894475bcf6c\/install-hype","212":"\/212\/installers\/1535722563-5b894443d2bc5\/install-hazeover","187":"\/187\/installers\/1535723877-5b8949655e25d\/install-ithoughtsx","145":"\/145\/installers\/1535722906-5b89459aae021\/install-manuscripts","177":"\/177\/installers\/1535722722-5b8944e230550\/install-xmind","173":"\/173\/installers\/1536327041-5b927d816ecc6\/install-be-focused","174":"\/174\/installers\/1536403031-5b93a6570fba6\/install-cloud-outliner","189":"\/189\/installers\/1535721775-5b89412fa5659\/install-yummy-ftp-pro","271":"\/271\/installers\/1535722681-5b8944b96a8a9\/install-yummy-ftp-watcher","230":"\/230\/installers\/1535723057-5b894631396a9\/install-sqlpro-studio","273":"\/273\/installers\/1535724359-5b894b4787772\/install-emulsion","241":"\/241\/installers\/1535723388-5b89477c0547c\/install-merlin-project-express","144":"\/144\/installers\/1535723554-5b8948226d6fd\/install-istat-menus","184":"\/184\/installers\/1535722730-5b8944ea647d9\/install-timing","315":"\/315\/installers\/1535722055-5b89424760bf0\/install-typeface","68":"\/68\/installers\/1535723251-5b8946f347e86\/install-2do","74":"\/74\/installers\/1536402844-5b93a59c60cf3\/install-wifi-explorer","276":"\/276\/installers\/1535722441-5b8943c99ade4\/install-rocket-typist","188":"\/188\/installers\/1535721223-5b893f078e44c\/install-pdf-squeezer","284":"\/284\/installers\/1535724411-5b894b7bb9bd4\/install-textsoap-","146":"\/146\/installers\/1535722558-5b89443e78b8f\/install-findings","314":"\/314\/installers\/1535962028-5b8cebacaff86\/install-moonitor-","201":"\/201\/installers\/1535721058-5b893e62d7bc4\/install-simon","98":"\/98\/installers\/1535722313-5b894349a0322\/install-paste","195":"\/195\/installers\/1535721074-5b893e7284bc1\/install-image2icon","277":"\/277\/installers\/1535724339-5b894b332921b\/install-cappuccino","248":"\/248\/installers\/1535723873-5b8949613b636\/install-instant-translate","193":"\/193\/installers\/1535723060-5b894634e0883\/install-remote-mouse","301":"\/301\/installers\/1535723545-5b8948191f5e7\/install-endurance","135":"\/135\/installers\/1535724065-5b894a213893a\/install-base","196":"\/196\/installers\/1535722093-5b89426d0cbf1\/install-aeon-timeline","244":"\/244\/installers\/1536229081-5b90fed9f2033\/install-tripmode","215":"\/215\/installers\/1535723854-5b89494ee5475\/install-moneywiz","304":"\/304\/installers\/1536743381-5b98d7d571039\/install-busycal","312":"\/312\/installers\/1535721522-5b894032ee3d2\/install-folio","295":"\/295\/installers\/1535977022-5b8d263e4d679\/install-bettertouchtool","307":"\/307\/installers\/1536848843-5b9a73cb1cd6a\/install-canary-mail","249":"\/249\/installers\/1535721194-5b893eea2a64c\/install-news-explorer","237":"\/237\/installers\/1535721380-5b893fa4e51a3\/install-flume","210":"\/210\/installers\/1536327467-5b927f2bc167a\/install-get-backup-pro","95":"\/95\/installers\/1535724036-5b894a04867c6\/install-swift-publisher","67":"\/67\/installers\/1535723057-5b89463103674\/install-ulysses","229":"\/229\/installers\/1535721227-5b893f0b77322\/install-iflicks","153":"\/153\/installers\/1535721923-5b8941c38d849\/install-bartender","213":"\/213\/installers\/1535722935-5b8945b753e6f\/install-taskpaper","311":"\/311\/installers\/1535724042-5b894a0aaf6f6\/install-dcommander-","186":"\/186\/installers\/1535722099-5b89427367314\/install-numi","234":"\/234\/installers\/1535721693-5b8940ddf15d0\/install-forecast-bar","285":"\/285\/installers\/1535724368-5b894b500ec65\/install-instacal","82":"\/82\/installers\/1535721867-5b89418b58d9b\/install-disk-drill","122":"\/122\/installers\/1535721466-5b893ffa69b28\/install-coderunner","217":"\/217\/installers\/1535721876-5b8941945359d\/install-chronosync-express","279":"\/279\/installers\/1535723950-5b8949ae489c0\/install-journey","223":"\/223\/installers\/1535722492-5b8943fc3d702\/install-netspot","264":"\/264\/installers\/1535722273-5b894321a81c7\/install-iconjar","224":"\/224\/installers\/1536815816-5b99f2c863064\/install-home-inventory","233":"\/233\/installers\/1535723094-5b8946567e926\/install-polarr","250":"\/250\/installers\/1535722389-5b89439501956\/install-dropshare","231":"\/231\/installers\/1535721546-5b89404abb61b\/install-studies","268":"\/268\/installers\/1535722893-5b89458d6a3ff\/install-workspaces","243":"\/243\/installers\/1535720940-5b893dec533f5\/install-expressions","308":"\/308\/installers\/1535724216-5b894ab9002db\/install-teacode","280":"\/280\/installers\/1535724517-5b894be5579a2\/install-noteplan","240":"\/240\/installers\/1535724185-5b894a9989de2\/install-chatmate-for-whatsapp","242":"\/242\/installers\/1535722927-5b8945afadc15\/install-unclutter","282":"\/282\/installers\/1535721306-5b893f5ad6071\/install-macgourmet-deluxe","130":"\/130\/installers\/1535721605-5b8940853bbfb\/install-noizio","252":"\/252\/installers\/1535721057-5b893e619f533\/install-waitinglist","283":"\/283\/installers\/1535724008-5b8949e83a677\/install-periodic-table-chemistry","227":"\/227\/installers\/1535720922-5b893dda412aa\/install-shimo","235":"\/235\/installers\/1535721422-5b893fce71156\/install-lacona","257":"\/257\/installers\/1535723688-5b8948a8efa70\/install-flawless-app","274":"\/274\/installers\/1535722224-5b8942f0b6bbb\/install-keykey-typing-tutor","267":"\/267\/installers\/1535722063-5b89424fdfbcb\/install-wokabulary","256":"\/256\/installers\/1535722227-5b8942f3dbbf3\/install-boxy","245":"\/245\/installers\/1535723391-5b89477f25f45\/install-betterzip","255":"\/255\/installers\/1535722210-5b8942e27bca8\/install-tayasui-sketches","246":"\/246\/installers\/1535722396-5b89439c203ff\/install-world-clock-pro","266":"\/266\/installers\/1535722157-5b8942ad73bd3\/install-focus","262":"\/262\/installers\/1535724530-5b894bf2c65b5\/install-declutter","169":"\/169\/installers\/1535723212-5b8946cc41336\/install-unibox","287":"\/287\/installers\/1535723526-5b894806c9bb1\/install-inboard","270":"\/270\/installers\/1535721368-5b893f9850fe9\/install-lungo","238":"\/238\/installers\/1535723582-5b89483ebee2f\/install-n-track-studio","94":"\/94\/installers\/1535721529-5b89403922b35\/install-paw","296":"\/296\/installers\/1535721682-5b8940d206c3e\/install-im_","299":"\/299\/installers\/1535721762-5b8941220499e\/install-camerabag-pro","306":"\/306\/installers\/1535723889-5b894971b9b55\/install-ubar","298":"\/298\/installers\/1535724224-5b894ac01e174\/install-touchretouch"};
function readyjQueryinit(){
	jQuery(function($) {
		$('body').find('#overlay').css('display','none'); 
        $('body').append('<div class="auto-download-section auto-download-section-chrome"><div class="balloon balloon-bottom balloon-bottom-left balloon-inverse balloon-no-border balloon-bottom-enter-done"><div class="balloon-close-icon"><button class="close popup__close-icon" type="button" aria-label="Close"><span>×</span></button></div><div class="auto-download-content"><img src="https://my.setapp.com/static/media/icon-default.73adbab6.svg" class="auto-download-icon auto-download-icon-chrome" alt=""><p><span>Your download is right here.<br>Go ahead and launch it.</span></p></div></div></div>');
        var app_id = window._appId;
	        $('.auto-download-section').css('display','none');
	        var btn = $('#bar [data-modal-trigger]').clone();
	        btn.removeAttr('data-modal-trigger');
	        btn.removeAttr('data-bar-trigger');
	        btn.removeAttr('data-bar-trigger');
	        btn.insertAfter('#bar [data-modal-trigger]');
	        $('#bar [data-modal-trigger]').css('opacity', '0');
	        $('#bar [data-modal-trigger]').css('width', '0');
	        $('#bar [data-modal-trigger]').css('height', '0');
	        $('#bar [data-modal-trigger]').css('padding', '0');
	        $('#bar [data-modal-trigger]').css('transition', 'none');
	        $('#bar [data-modal-trigger]').css('overflow', 'hidden');
	        btn.addClass('clickdownloadtrigger');
	        btn.off('click');
        $('[data-bar-trigger]').each(function(index, el) {
	        var btn = $(el).clone();
	        btn.removeAttr('data-modal-trigger');
	        btn.removeAttr('data-bar-trigger');
	        btn.removeAttr('data-bar-trigger');
	        btn.insertAfter(el);
	        $(el).css('opacity', '0');
	        $(el).css('width', '0');
	        $(el).css('height', '0');
	        $(el).css('padding', '0');
	        $(el).css('transition', 'none');
	        $(el).css('overflow', 'hidden');
	        btn.addClass('clickdownloadtrigger');
	        btn.off('click');
        });
        $('body').on('click','.close.popup__close-icon',function(){
        	$('.auto-download-section').css('display','none');
        });
        $('body').on('click','.clickdownloadtrigger',function(){
        	var _gaexp = getCookie('_gaexp');
			if(_gaexp !== undefined){
				var clientID = ga.getAll()[0].get('clientId');
				var expID    = getExperimentId(_gaexp);
				var expvarID = getVariationId(_gaexp);
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'Installer',
					'gtm-cro-event-action': 'Download Start'
				});
				location.href = "https://store.setapp.com/app"+window.appslist[window._appId]+".zip?installSetapp=com.setapp.InstallSetapp&unregistered_user=1&xid="+expID+"&xvar="+expvarID+"&cid="+clientID+"&downloadSource=app-reg-experiment&eventCategory=Installer&eventAction=DownloadStart";
			}else{
        		// location.href = "https://store.setapp.com/app"+window.appslist[window._appId]+".zip?unregistered_user=1downloadSource={in-app-reg-experiment}?downloadSource={in-app-reg-experiment}";
        	}
        	$('.auto-download-section').attr('style','');
        	return false;
        });
        $('.separator,.cta.-social').css('display','none');
        $('.cta .hint.hint_bold').css('display','none');
        $('body').append('<style>.auto-download-section.auto-download-section-chrome{bottom:20px;left:20px;width:238px;position:fixed;z-index:9999999999999}.balloon.balloon-bottom.balloon-bottom-left.balloon-inverse.balloon-no-border.balloon-bottom-enter-done{background-color:#fff;color:#333;box-shadow:0 5px 20px 0 hsla(210,3%,85%,.8);padding:20px;position:relative;border:2px solid #fff;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857}.balloon.balloon-bottom.balloon-bottom-left.balloon-inverse.balloon-no-border.balloon-bottom-enter-done:before{content:"";position:absolute;display:block;width:15px;height:15px;background-color:#002572;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#fff;border:2px solid #fff;bottom:-9px}button.close.popup__close-icon span{color:#939399;font-weight:300;font-size:19px;line-height:1;text-shadow:0 1px 0 #fff;opacity:.4}button.close.popup__close-icon{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.balloon .balloon-close-icon{position:absolute;right:15px;top:10px}.auto-download-content{margin:5px 0 -7px;text-align:center}img.auto-download-icon.auto-download-icon-chrome{height:67px}</style>');
        function getExperimentId(_gaexp) {
			var cookie = _gaexp;
			if (cookie == undefined) {
				return false;
			} else {
				var fields = cookie.split('.');
				return fields[2];
			}
		}
		function getVariationId(_gaexp) {
			var cookie = _gaexp;
			if (cookie == undefined) {
				return false;
			} else {
				var fields = cookie.split('.');
				return fields[4];
			}
		}
		function getCookie(name) {
		  var matches = document.cookie.match(new RegExp(
		    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		  ));
		  return matches ? decodeURIComponent(matches[1]) : undefined;
		}
	});
}