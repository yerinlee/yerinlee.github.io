$(function(){


  $('img').on('load',function(){
    $('.bg').fadeOut(500);
  })

  //메인==================================================================================

  //메인 텍스트
  var maintext=[
    'Givenchy<br>Spring 2019',
    'Chanel<br>Spring 2019',
    'Prada<br>Spring2019',
    'Dior<br>Spring 2019',
    'Gucci<br>Spring 2019'
  ]

  var textbox=[
    '지방시의 아티스틱 디렉터, 클레어 웨이트켈러가 선보이는 화려하면서 자유분방한 지방시만의 강렬한 화보.',
    '샤넬 트레이드마크인 트위드 수트와 밀짚모자를 입은 모델들이 파도가 넘실거리는 해변을 거니는 모습을 실감 나게 연출.',
    '섹시를 소년에게 대입, 환상적인 프린팅은 전체에 걸쳐 대담하게 작용하며, 구속과 방종의 무한한 결합으로 해석 ',
    '디올의 정신과 멕시코 여성 라이더의 전통 옷을 결합하여 새로운 시대의 새로운 여성 스타일을 창출',
    '레트로적인 감성을 력셔리한 7,80년대 디스코, 클럽문화를 향휴하는 젊은이들에 대한 헤리티지를 현대적으로 해석'
  ]

  // 메인 슬라이드
  var mainSwiperImg=[
    'main1.png',
    'main2.png',
    'main3.png',
    'main4.png',
    'main5.png'
  ]

  $('.main .swiper-container .swiper-slide').each(function(i, el){
    $(this).css('background-image','url(img/'+mainSwiperImg[i]+')');
  })

  var mainSwiper = new Swiper('.main .swiper-container',{
    pagination: {
      el: '.main .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.main .swiper-button-next',
      prevEl: '.main .swiper-button-prev',
    },
    loop:true,
    autoplay:{
      delay:2000
    },
    on:{
      slideChange:function(){
        $(".main h3").html(maintext[this.realIndex]);
        $(".main p").text(textbox[this.realIndex]);
      }
    },
    centeredSlides:!0,
    slidesPerView:"auto"
  });
// =============================================================================

// 검색창=======================================================================

  $('.btn-search').click(function(){
    $('.search-form').slideToggle();
    icon=$(this).find('i');
    icon.toggleClass('icon-search1 icon-close1');
  });

// =============================================================================

// 로그인창  =================================================================

  $('#login-popup .btn-toggle').click(function(){
    $('#login-popup').toggleClass('open');
  })

  $('#btn-submit').click(function(){
    var id=$('#id').val();
    var password=$('#password').val();
    $('.message').remove();

    if(id==''){
      $('#id').after('<p class="message1">아이디를 입력하세요.</p>').focus();
    }else if(password==''){
      $('#password').after('<p class="message2">비밀번호를 입력하세요.</p>').focus();
    }else {
      $('#btn-submit').show();
      $('#login-popup').fadeOut(500,function(){
        $('#my-page-popup').fadeIn();
      })
    }
  })

  // 로그인 완료한 후
  $('#my-page-popup .btn-toggle').click(function(){
    $('#my-page-popup').toggleClass('open');
  });

  $('#btn-logout').click(function(){
    $('#my-page-popup').fadeOut();
    $('#login-popup').fadeIn();
    $('#login-popup input').val('');
  });

// ============================================================================


// 뷰티=========================================================================

  // 뷰티-팝업
  var typeSwiper1 = new Swiper('.type1 .swiper-container',{
    pagination: {
      el: '.type1 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.type1 .swiper-button-next',
      prevEl: '.type1 .swiper-button-prev',
    }
  });

  var typeSwiper2 = new Swiper('.type2 .swiper-container',{
    pagination: {
      el: '.type2 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.type2 .swiper-button-next',
      prevEl: '.type2 .swiper-button-prev',
    }
  });

  var typeSwiper3 = new Swiper('.type3 .swiper-container',{
    pagination: {
      el: '.type3 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.type3 .swiper-button-next',
      prevEl: '.type3 .swiper-button-prev',
    }
  });

  //뷰티 이미지
  $(window).resize(function(){
    var contentsH=$('.beauty .beauty1').innerHeight()*2+20;
    $('.beauty .contents .beauty3').css('padding-top',contentsH);
  }).resize();

  $('#beauty-popup').hide();
  $('.beauty a').click(function(e){
    e.preventDefault();
    id=$(this).attr('href');
    $('#beauty-popup').show();
    $(id).show();
  });


  $('#beauty-popup .icon-close2').click(function(){
    $('#beauty-popup').hide();
    $('#beauty-popup [class*=type]').hide();
  });
  $(window).resize(function(){
    var popupH=$('#beauty-popup .type1 .right').height();
    $('#beauty-popup .type1 right .textbox').height(popupH);
  }).resize();

  // ===========================================================================


  // 리빙=======================================================================
  $('.scrollbar-inner').scrollbar();
  $(window).resize(function(){
    livingImgH=$('.living img').height();
    $('.living .text-box').height(livingImgH);
  }).resize();

  // ===========================================================================


  // 하단=======================================================================

  $('.flag button').click(function(){
    $('.flag ul').slideToggle();
    icon=$(this).find('i:nth-child(2)');
    icon.toggleClass('icon-down icon-up');
  });
  $(window).scroll(function(){
    var scrollTop=$(this).scrollTop();
    if( scrollTop > 200){
      $('.icon-top').fadeIn(200);
    }else{
      $('.icon-top').fadeOut(200);
    }
    var bottomTop=$(document).height()-$(window).height()-220;
    if(scrollTop>bottomTop){
      $('.icon-top').addClass('bottom');
    }else{
      $('.icon-top').removeClass('bottom');
    }
  }).scroll();

  $('.icon-top').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0},500);
  });

// 모바일=======================================================================


  //메뉴바
  $('#btn-menu').click(function(){
    $('nav').toggleClass('open');
  });
  // 패션 더보기
    $('.fashion .contents ul li:lt(3)').show();
      var items =  6;
      var shown =  3;
      $('.btn-more').click(function () {
          shown = $('.fashion .contents ul li:visible').length+1;
          if(shown< items) {
            $('.fashion  .contents ul li:lt('+shown+')').show(300);
          } else {
            $('.fashion .contents ul li:lt('+items+')').show(300);
          }
       });

  // 탭메뉴
   var flag=true;
   $('.category-nav a').click(function(e){
     e.preventDefault();
     id=$(this).attr('href');
     $('.category-nav a').removeClass('active');
     $(this).addClass('active');
     $('.tap-nav > .contents').removeClass('active');
     $(id).addClass('active');
     var contentsH=$('.beauty .beauty1').innerHeight()*2+20;
     $('.beauty .contents .beauty3').css('padding-top',contentsH);
   });

   // 메뉴 클릭시 배경 스크롤 막기
   $('#btn-menu').on('click', function(){
       $("html, body").css({overflow:'hidden'}).bind('touchmove');
   });

    // show 클릭 시 텍스트 더보기
    var showChar = 0;
    var moretext = "More >";
    var lesstext = "Less >";

    $('.more').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<br>' + '<span class="moreellipses"></span>'+'<span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
            $(this).html(html);
        }
    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });


// =============================================================================


// 디바이스 크기=================================================================

  $(window).resize(function() {
  var width = $(window).width();
  var scrollTop=$(this).scrollTop();
  var width = $(window).width();
    if(width >= 360 && width <= 1024) {
      var nav=$(window).height();
      var toparea=$('.top-area').height()
      var gnb=nav - toparea;
      $('nav').height(gnb);
      $(window).scroll(function(){
        var bottomTop=$(document).height()-$(window).height()-150;
        if(scrollTop > bottomTop){
          $('.icon-top').addClass('bottom');
        }else{
          $('.icon-top').removeClass('bottom');
        }
      }).scroll();
    } else if(width >= 360 && width <= 767) {
      $('.icon-more').click(function(e){
        e.preventDefault();
        $('#beauty-popup').off();
        $('.beauty a').off();
      })

    }
  });
  $(window).resize();

    function delCookie(cookie_name) {

    set_cookie(cookie_name, "", 0 , 0);

}


// =============================================================================
});
