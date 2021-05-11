    $(window).ready(function() {
//            console.log(123);
            $(window).on('beforeunload', function() {
                $(window).scrollTop(0);

            });
        });
    $(document).ready(function(){
           $('.topsin').mouseover(function() {
                $(this).children('a').children('img').stop();
                $(this).children('a').children('img').animate({
                    marginTop: "40px"
                }, 200);
                $(this).children('div').fadeIn(100);
            });
            $('.topsin').mouseleave(function() {
               $(this).children('a').children('img').stop();
                $(this).children('a').children('img').animate({
                    marginTop: "0px"
                });
                $(this).children('div').fadeOut(100);
            });
  
        $('#tit').click(function(){
           $('#list').slideToggle();
        });
        $('#toplist *').hover(function(){
            $(this).css('color','wheat');
        });
         $('#toplist *').mouseout(function(){
            $(this).css('color','rgba(255, 255, 255, 0.8)');
        })
    });
