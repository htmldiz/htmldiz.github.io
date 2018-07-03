$(function() {
  window.mvc4 = 2;
  window.sotc4 = true;
  window.candetect = true;
  window.mmd = 0;
  var us3 = localStorage.getItem('usc4');
  if(us3 == null){
    localStorage.setItem('usc4','false');
  }
  function getTabs() {
    var tabs = localStorage.getItem('tc4');
    if (tabs == null) {
      tabs = 0;
    }
    return tabs;
  }
  function getcatalog() {
    var catalog = localStorage.getItem('clc4');
    return catalog;
  }
  function getv3s() {
    var v3 = localStorage.getItem('vc4');
    return v3;
  }
  function deteectUnload() {
    var tabs = localStorage.getItem('tc4');
    if (tabs == null) {
      tabs = 0;
      localStorage.setItem('tc4', tabs);
    } else {
      tabs = Number(tabs - 1);
      localStorage.setItem('tc4', tabs);
    }
    return tabs;
  }
  function deteectUnloadcat() {
    var catalog = localStorage.getItem('clc4');
    if (catalog == null) {
      catalog = 0;
      localStorage.setItem('clc4', catalog);
    } else {
      catalog = Number(catalog - 1);
      localStorage.setItem('clc4', catalog);
    }
    return catalog;
  }
  if ($('.x-catalog .x-catalog__sidebar').length > 0) {
    document.addEventListener("mouseleave", function( event ) {
      var tabs = getTabs();
      var catalog = getcatalog();
      var us3 = localStorage.getItem('usc4');
      // && v3 > window.mvc4 catalog == 1 && 
      if (tabs == 0 && us3 == 'false' && window.candetect == true && window.mmd >1) {
        showPopup();
        window.mmd = 0;
      }
      window.intout = setInterval(function(){
        var tabs    = getTabs();
        var catalog = getcatalog();
        var us3     = localStorage.getItem('usc4');
        // && v3 > window.mvc4 catalog == 1 && 
        if (tabs == 0 && us3 == 'false' && window.candetect == true) {
          showPopup();
          window.mmd = 0;
        }
      },10);
    });
    var catalog = localStorage.getItem('clc4');
    if (catalog == null) {
      catalog = 0;
    }
    if (catalog < 0) {
      catalog = 0;
    }
    catalog++;
    localStorage.setItem('clc4', catalog);
    $(window).on('beforeunload', function() {
      deteectUnloadcat();
    });
  }
  $.fn.visitThisPage = function () {
      var visitThisPage = 0;
      if($('[data-qaid="main_product_info"]').length>0){
        var text = $('[data-qaid="main_product_info"]').attr('data-rt-order-url');
          var reptext = text+'';
          var match = reptext.match(/(product_id=[0-9]*)/g);
          visitThisPage = 0;
          if(match.length>0){
            match = match[0];
            match = match.replace('product_id=','');
            visitThisPage = localStorage.getItem('pvc4'+match);
          }
          if (visitThisPage == null) {
            visitThisPage = 0;
          }
      }
      return visitThisPage;
  }
  $.fn.setVisitThisPage = function(number) {
    var visitThisPage = 0;
    if($('[data-qaid="main_product_info"]').length>0){
      var text = $('[data-qaid="main_product_info"]').attr('data-rt-order-url');
      var reptext = text+'';
      var match = reptext.match(/(product_id=[0-9]*)/g);
      if(match.length>0){
        match = match[0];
        match = match.replace('product_id=','');
        visitThisPage = localStorage.setItem('pvc4'+match,number);
      }
    }
    return visitThisPage;
  }
  if ($('.x-product-page__details').length > 0) {
    var v3 = localStorage.getItem('vc4');
    if (v3 == null) {
      v3 = 0;
      localStorage.setItem('vc4', v3);
    }
    var tabs = localStorage.getItem('tc4');
    if (tabs == null) {
      tabs = 0;
    }
    if (tabs < 0) {
      tabs = 0;
    }
    tabs++;
    localStorage.setItem('tc4', tabs);
    $(window).on('beforeunload', function() {
      deteectUnload();
    });
    document.addEventListener("mouseleave", function( event ) {
      var tabs    = getTabs();
      var catalog = getcatalog();
      var v3      = getv3s();
      var us3     = localStorage.getItem('usc4');
      visitThisPage = $.fn.visitThisPage();
      if (catalog == 0 && v3 > window.mvc4 && us3 == 'false' && tabs == 1 && window.candetect == true && window.mmd > 1) {
        showPopup();
        window.mmd = 0;
      }
      window.intout = setInterval(function(){
        var tabs    = getTabs();
        var catalog = getcatalog();
        var v3      = getv3s();
        var us3     = localStorage.getItem('usc4');
        visitThisPage = $.fn.visitThisPage();
        if (v3 > window.mvc4 && us3 == 'false' && tabs == 1 && window.candetect == true) {
          showPopup();
          window.mmd = 0;
        }
      },5);
    });
    document.addEventListener("mousemove", function( event ) {
      var visitThisPage = $.fn.visitThisPage();
      if(visitThisPage == 0 && window.candetect == true){
        var v3           = getv3s();
        $.fn.setVisitThisPage(1);
        v3++;
        localStorage.setItem('vc4', v3);
      }
    });
  }
  document.addEventListener("mousemove", function( event ) {
      window.mmd++;
  });
  $( window ).scroll(function() {
    window.candetect = false;
    if(window.tm){clearTimeout(window.tm);
      // console.log(window.candetect);
    }
     window.tm = setTimeout( function(){
      window.candetect = true;
      // console.log(window.candetect);
    }, 150 );
  });
  $(document).mouseenter(function(event) {
    if(window.intout){
      clearInterval(window.intout);
    }
  });
  document.onmousedown = function(event){
    if(event.button == 1 || event.button == 2){
      window.candetect = false;
      if(window.tm){clearTimeout(window.tm);
        // console.log(window.candetect);
      }
       window.tm = setTimeout( function(){
        window.candetect = true;
        // console.log(window.candetect);
      }, 150 );
    }
  }
  function showPopup(){
    if($('.x-404-page').length<1 && window.candetect == true){
      // alert('detect');
    var us3 = localStorage.getItem('usc4');
  if(window.sotc4 == true ){
    if ($(".search_popup").find('.form_here').length < 1) {
      localStorage.setItem('usc4','true');
      $(".search_popup .x-header__search").remove();
      var html = $(".x-header__search").html();
      $(html).find('#search_form').removeAttr('id');
      $(".search_popup .form_here").remove();
      $(".search_popup").append("<div class='form_here'>" + html + "</div>");
      $(".search_popup .x-search__header-overlay").remove();
      $(".search_popup .x-search__page-overlay").remove();
      $(".x-search__inner .x-search__autocomplete .x-autocomplete").remove();
      $('.form_here .x-search__autocomplete').remove('');
      $('.form_here [name="search_term"]').val('');
      $('.x-search .x-search__field[name="search_term"]').blur();
      $('.x-search').removeClass('x-search_state_active');
      $('.x-search__page-overlay').css('background','transparent');
      $(".x-product-main-terms .x-product-main-terms__col .x-pseudo-link+.x-overlay").hide();
      $("[data-bazooka='GlobalShowPhones'] .x-overlay").addClass("x-hidden");
      $(".x-product-sticky .x-product-sticky__col:nth-child(1) .x-overlay").addClass("x-hidden");
      $(".x-product-info__variation .x-overlay").hide();
      $(".qa-shoping-cart-list").closest(".x-overlay").hide();
      $('.x-overlay__dialog_type_padded [data-qaid="success_msg_popup"]').closest(".x-overlay").addClass("x-hidden");
      $(".x-company-info__parts .x-company-info__item .x-iconed-text .x-overlay").addClass("x-hidden");
      $(".x-product-info .x-product-info__images .x-overlay").addClass("x-hidden");
      $(".search_popup").css('display', 'block');
      $(".search_overlay").css('display', 'block');
      if(window.location.href.indexOf("prom.ua/ua") > -1) {
          $(".search_popup .modal_title").text("Шукаете щось інше?");
          $(".search_popup .sub_title").text("Ми допоможемо Вам знайти потрібний товар");
          $(".search_popup .x-search__field").attr("placeholder", "Почніть вводити назву товару");
        }else{
          $(".search_popup .modal_title").text("Ищете что-то другое?")
          $(".search_popup .sub_title").text("Мы поможем Вам найти нужный товар");
          $(".search_popup .x-search__field").attr("placeholder", "Начните вводить название товара");
      }
      //event for download pop-up
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
      'event': 'gtm-ee-event-1'
      });
      console.log('download_popup_event')
      //
    }
  }
  }};

  //event for focus pop-up
  $('body').on('focus', '.search_popup .form_here .x-search__field', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'gtm-ee-event-2'
    });
    console.log('focus_popup_event')
  });

  //event for click on search item
  $('body').on('click', '.search_popup .form_here .x-autocomplete__link', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'gtm-ee-event-3'
    });
    console.log('search_item_event')
  });
  
  //event for click loop btn
  $('body').on('click', '.search_popup .form_here .x-search__button', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'gtm-ee-event-4'
    });
    console.log('loop_btn_event')
  });

  //event for close popup
  $('body').on('click', '.search_popup .x-overlay__close-button', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'gtm-ee-event-5'
    });
    console.log('close popup')
  });

  if($('.x-404-page').length<1){

  $('body').on('keyup', ".form_here [name='search_term']", function() {
    var value = $(this).val();
    if(window.typeint){
      clearTimeout(window.typeint);
    }
    window.typeint = setTimeout(function(value){
      var autocomplete = $('.form_here .x-search').attr('data-autocomplete-url');
      if(value.length>0){
        $.ajax({
          url: autocomplete,
          type: 'GET',
          dataType: 'json',
          data: {term: value},
        })
        .done(function(data) {
          if($('.form_here .x-search__autocomplete').length<1){
            $('.form_here .x-search').after('<div class="x-search__autocomplete"><div class="x-autocomplete"><ul class="autocomplete1 x-autocomplete__group" data-qaid="autocomplete_list"></ul><ul class="autocomplete2 x-autocomplete__group" data-qaid="autocomplete_list"></ul><ul class="autocomplete3 x-autocomplete__group" data-qaid="all_results_list"></ul></div></div>');
          }
          $('.form_here .x-autocomplete__group').html("");
          var countvar1 = 5;
          $.each(data.results,function(index, el) {
            if(el.name){
              if(countvar1 > 0){
                $('.form_here .autocomplete1').append('<li class="x-autocomplete__item" data-qaid="suggest_item"><a class="x-autocomplete__link" href="https://prom.ua/search?search_term='+el.query+'" data-qaid="category_term_link"><span class="x-autocomplete__text"><b>'+value+'</b> в <span class="x-autocomplete__highlight-text">'+el.name+'</span></span></a></li>');
                countvar1--;
              }
            }
          });
          var countvar2 = 5;
          $.each(data.results,function(index, el) {
            if(el.type == 'tag'){
              if(countvar2 > 0){
                $('.form_here .autocomplete2').append('<li class="x-autocomplete__item" data-qaid="suggest_item"><a class="x-autocomplete__link" data-qaid="search_term_link" href="https://prom.ua/search?search_term='+el.query+'"><span class="x-autocomplete__counter-holder" data-qaid="term_hits_text">Найдено: &nbsp;<span class="x-autocomplete__counter">'+el.hits+'</span></span><span class="b-autocomplete__text" data-qaid="term_main_text"><b>'+el.query+'</b></span></a></li>');
                countvar2--;
              }
            }
          });
          var countvar3 = 1;
          $.each(data.results,function(index, el) {
            if(el.type == 'search_term'){
              if(countvar3 > 0){
                $('.form_here .autocomplete3').append('<li class="x-autocomplete__item" data-qaid="suggest_all_result"><a href="https://prom.ua/search?search_term='+el.query+'" class="x-autocomplete__link x-autocomplete__link_state_highlighted" data-qaid="suggest_link"><span class="x-autocomplete__text">Все результаты поиска</span></a></li>');
                countvar3--;
              }
            }
          });

        })
        .fail(function() {})
        .always(function() {});
      }
    },500,value);
  });

  console.log('desktop_var_c_4')
  $('body').on('click', '[data-qaid="buy-button"]', function(event) {
    window.sotc4 = false;
  });
  $('body').on('click', '[data-qaid="one-click-order-button"]', function(event) {
    window.sotc4 = false;
  });

  function shackee(){
    if($('.x-product-info .js-product-buy-button.x-button_type_contour').length>0 || $('.x-button_state_load').length>0){
      window.sotc4 = false;
    }
  }
  shackee();
  setInterval(function(){
    shackee();
  },100);
}
});