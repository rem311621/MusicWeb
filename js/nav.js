$(document).ready(function(){
    $('#top10').mouseover(function(){
    $(this).children().stop();
   $(this).children('h2').fadeIn(500);
$(this).children('h1').animate({backgroundColor:'#363636'})
});
                $('#top10').mouseout(function(){
                     $(this).children().stop();
                    $(this).children('h1').animate({backgroundColor:'#000000'})
   $(this).children('h2').fadeOut(500);
     
});
});