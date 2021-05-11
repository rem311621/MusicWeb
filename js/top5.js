   var items = [];
                   $.getJSON('top5.json', function(data) {
 
 
  $.each(data, function(key,val) {
    items.push(val);
  });
                         var t=0;
                       var g=0;
  $('.singername').each(function(){

//    console.log(items[0][t])
               $(this).html(items[0][t]);
                       t++;
            });
  $('.topsin').children().children().each(function(){

//    console.log(items[1][g]);
//      console.log(items[1][g]);

               $(this).attr('src',items[1][g]);
                       g++;
            });

});