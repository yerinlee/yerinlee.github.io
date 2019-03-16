$(function() {
    $('.scrollbar-macosx').scrollbar();
        var index = 0,
            count = 0;
        var word = '';
        var words = ["#Branding", "#Package", "#Edit design ","#Web design","#Web publishing", "#Graphic"];
        untype();

        function type(word) {
            setTimeout(function() {
                if (word.length > 0) {
                    $('.typer').append(word.shift());
                    type(word);
                } else if (word.length === 0) {
                    pause();
                }
            }, 180)
        }

        function untype() {
            setTimeout(function() {
                word = $('.typer').html().split('');
                word.pop();
                if (word.length > 0) {
                    $('.typer').empty().append(word);
                    untype();
                } else if (word.length === 0) {
                    $('.typer').empty();
                    nextWord();
                }
            }, 100);
        }

        function pause() {
            setTimeout(function() {
                untype();
            }, 300);
        }

        function nextWord() {
            index = count % 6;
            count++;
            word = words[index].split('');
            type(word);
        }

        var flag=true;
        $('.aside-menu a').click(function(e){
          e.preventDefault();
          id=$(this).attr('href');
          $('.aside-menu a').removeClass('active');
          $(this).addClass('active');
          $('.tab-contents > div').removeClass('active');
          $(id).addClass('active');
        });

        // portfolio
         $('.work-gallery ul li a').click(function() {
             var itemID = $(this).attr('href');
             $('.work-gallery ul').addClass('item_open');
             $(itemID).addClass('item_open');
             return false;
         });


          //btn-more
         $('.work-gallery ul li:lt(3)').show();
           var items =  12;
           var shown =  2;
           $('.btn-more').click(function () {
               shown = $('.work-gallery ul li:visible').length+2;
               if(shown< items) {
                 $('.work-gallery ul li:lt('+shown+')').show(300);
               } else {
                 $('.work-gallery ul li:lt('+items+')').show(300);
               }
            });



});
