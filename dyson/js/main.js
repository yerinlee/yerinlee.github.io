$(function(){


  // 로그인 팝업  =================v=========================
   $('.login li a:nth-child(1)').click(function(){
     $('#login-popup').fadeIn();
     $('.bg').fadeIn();
   })

   $('.icon-close').click(function(){
     $('#login-popup').fadeOut();
     $('#details-popup').fadeOut();
     $('.bg').fadeOut();
   })

   $('#id, #password').focus(function(){
     $(this).prev().addClass('change');
   })

   $('#id, #password').focusout(function(){
     $(this).prev().removeClass('change');
   })

   $('#btn-submit').click(function(){
     var id=$('#id').val();
     var password=$('#password').val();
     $('.message').remove();

     if(id==''){
       $('#id').after('<p class="message">아이디를 입력하세요.</p>').focus();
     }else if(password==''){
       $('#password').after('<p class="message">비밀번호를 입력하세요.</p>').focus();
     }else {
       $('#btn-login').hide();
       $('.bg').fadeOut();
       $('#login-popup').fadeOut(500,function(){
         $('#my-page-popup').fadeIn();
         $('.login li a:nth-child(1)').text('Logout');
         $('.login .join').text('My page');
       })
     }
   })
    $('.login li a:nth-child(1)').click(function(){
      $('.login li a:nth-child(1)').text('Login');
      $('.login .join').text('Join');
    })

 // 메뉴스크롤  =================v=========================
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>1){
        $("header").css("background","#000");
      }
      else{
        $("header").css("background","none");
      }
    })

    // 디테일 팝업 ==========================================
      var i=0;
      $('.detail-wrap .over').click(function(e){
        $('#details-popup').fadeIn();
        $('.bg').fadeIn();
        e.preventDefault();
        i=$('.detail-wrap .over').index(this);
        change();
      });

      function change(){
        var src=$('.detail-wrap li a').eq(i).find('img').attr('src').replace('S','L');
        $('.big-img img').attr('src',src);
        $('.img-list li').removeClass('active');
        $('.img-list li').eq(i).addClass('active');
      }


    // top 버튼 =================v=========================

    $(window).scroll(function(){
      var scrollTop=$(this).scrollTop();
      if( scrollTop > 400){
        $('.top').fadeIn(400);
      }else{
        $('.top').fadeOut(400);
      }
    }).scroll();

    $('.top').click(function(event){
      event.preventDefault();
      $('html, body').animate({scrollTop:0},500);
    });


    // 언어 선택

    $('.flag button').click(function(){
      $('.flag ul').slideToggle();
      icon=$(this).find('.fa-chevron-down');
      icon.toggleClass('fa-chevron-up');
    });


// $(".flag > ul > li").click(function() {
// 	$(this)
// 		.parents(".flag")
//     .find()
// 		.find('input[type="text"]')
// 		.val($(this).text());
// });



})
