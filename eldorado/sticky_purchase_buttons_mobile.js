hj('trigger', 'sticky_purchase_buttons');
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
  window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'autoEvent',
    'eventCategory': 'Exp - Sticky Purchase Buttons',
    'eventAction': 'loaded'
  });
  $(window).ready(function(){
    var positionForSticky = $(".product-right-part.product-information-part .product-additional-actions").position().top
    var positionWindows = $(window).scrollTop()
    if (positionWindows>positionForSticky) {
      $(".wrap_sticky_btn").css({"bottom": "0", "transition": "bottom .2s"})
    } else {
      $(".wrap_sticky_btn").css({"bottom": "-50px", "transition": "bottom .2s"})
    }

    $(window).scroll(function() {
      var positionWindows = $(window).scrollTop()
      if (positionWindows>positionForSticky) {
        $(".wrap_sticky_btn").css({"bottom": "0", "transition": "bottom .2s"})
      } else {
        $(".wrap_sticky_btn").css({"bottom": "-50px", "transition": "bottom .2s"})
      }
    })


    if ($(".product-buy-container .credit-information").length>0) {
      $('body').after('<div class="wrap_sticky_btn buy-button-placeholder"><div class="buy-button">Купить</div><div class="buy_credit_btn">Купить в кредит</div></div>');
    } else {
      $('body').after('<div class="wrap_sticky_btn buy-button-placeholder one_buy_btn"><div class="buy-button">Купить</div></div>');
    }


    setInterval(function(){ 
      if ($(".product-buy-container .buy-button-placeholder .to-cart-button").length>0) {
        $(".wrap_sticky_btn .buy-button").replaceWith('<div class="to-cart-button valign-wrapper"><span>В корзине</span></div>')
      } else {
        $(".wrap_sticky_btn .to-cart-button").replaceWith('<div class="buy-button">Купить</div>')
      }
    }, 200);


    $(document).on( "click", ".wrap_sticky_btn div:first-child", function() {
      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Sticky Purchase Buttons',
        'eventAction': 'click',
        'eventLabel': 'Buy'
      });
      $(".product-buy-container .button .buy-button-placeholder>div").click();
      $(".wrap_sticky_btn .buy-button").replaceWith('<div class="to-cart-button valign-wrapper"><span>В корзине</span></div>')
      alert("Click")
    })

    $(document).on( "click", ".wrap_sticky_btn .buy_credit_btn", function() {
      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Sticky Purchase Buttons',
        'eventAction': 'click',
        'eventLabel': 'Buy on credit'
      });
      $(".product-buy-container .credit-information .content-information .button").click();
      $(".wrap_sticky_btn .buy-button").replaceWith('<div class="to-cart-button valign-wrapper"><span>В корзине</span></div>')
    })

    $(document).on( "click", ".product-buy-container .button .buy-button-placeholder>div", function() {
      $(".wrap_sticky_btn .buy-button").replaceWith('<div class="to-cart-button valign-wrapper"><span>В корзине</span></div>')
    });


    var styles = `<style> 
      .wrap_sticky_btn {
        position: fixed;
        bottom: -50px;
        transition: bottom .2s;
        right: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        z-index: 999;
      }
      .wrap_sticky_btn .to-cart-button {
        width: 50%;
      }
      .wrap_sticky_btn .buy-button,
      .wrap_sticky_btn .buy_credit_btn {
        cursor: pointer;
      }
      .wrap_sticky_btn.one_buy_btn div {
        width: 100%;
      }
      .wrap_sticky_btn div {
        text-transform: initial;
      }
      .buy_credit_btn {
        height: 44px;
        width: 50%;
        text-align: center;
        border: 2px solid #fd0028;
        cursor: pointer;
        position: relative;
        font-weight: 500;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 1;
        transition: color 1s ease;
        color: #fd0028;
        background-color: #fff;
        flex: 0 0 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  </style>`;
  styles = styles += '';
  $('body').after(styles);
  })
}