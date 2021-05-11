    var index = 0;
    var songname_ = [
         'Don&apos; Start Now',
        'Physical',
        'Break My Heart',

    ];
    $(function () {
        $('#nextsongname').children('h1').html(songname_[index + 1]);
        $('#data').children('h1').html(songname_[index]);
        $('#left_ui').css('width', '0%');
        $('#top_ui').css('width', '0%');
        $('#top_ui_').css('height', '0%');
        $('#bot_ui').css('width', '0%');
        $('#singerpic').css('width', '0%');
        $('#aaa').css('opacity', '0');

        $('#left_ui').animate({
            width: '50%'
        }, 1000).promise().done(function () {
            $('#singerpic').animate({
                width: '420px'
            }, 800);

            $('#top_ui_').animate({
                height: '50%'
            }, 1000).promise().done(function () {

                $('#bot_ui').animate({
                    width: '50%'
                }, 1000);
                $('#singerpic_mask').css('opacity', '0.4');

                $('#aaa').css('opacity', '1');

                $('#singerpic').animate({
                    width: '0'
                }, 1000).promise().done(function () {

                    $('#top_ui').animate({
                        width: '50%'
                    }, 1000);

                    $('#bot_pic').css('opacity', '1').children().css('opacity', '1');

                    $('#botmask').css('opacity', '1');
                   $('#albname').children().addClass('animated fadeInUp');
                    
                    $('#data').children('h1').css('opacity', '1').textillate({
                        in: {
                            effect: 'fadeInUp',
                            sync: true
                        }
                    }).next().css('opacity', '1').textillate({
                        in: {
                            effect: 'fadeInUp',
                            sync: true
                        }
                    });
                    $('#playbtn').addClass('animated fadeInUp');
                    $('#bot_ui').animate({
                        width: '0%'
                    }, 1000).promise().done(function () {


                        $('#info').children('h1').css('opacity', '0.3').textillate({
                            in: {
                                effect: 'fadeInUp',
                                sync: true
                            }
                        });

                        $('#info').animate({
                            opacity: 1
                        }, 1000).promise().done(function () {
                            $('#info').children('p').css('opacity', '1').textillate({
                                in: {
                                    effect: 'fadeInUp',
                                    sync: true
                                }
                            });
                            $('#_icon').addClass('animated fadeInUp');
                            $('#nextsongname').children('h1').css('opacity', '1').textillate({
                                in: {
                                    effect: 'fadeInUp',
                                    sync: true
                                }
                            });
                            $('#nextbtn').addClass('animated fadeInUp');
                        });




                    });

                });
            });



        });

        $('#nextbtn').click(function () {
   index++;
            console.log(songname_[index]);
            if (index < 3) {
             
                $('#data').children().textillate({
                    initialDelay: 1000,
                    in: {
                        effect: "fadeInUp",
                        sync: true
                    },

                    out: {
                        effect: "fadeOutDown",
                        sync: true,
                        callback: function () {

                            $('#nextsongname').children('h1').html(songname_[index + 1]);
                            $('#data').children('h1').html(songname_[index]);
                            $('#nextsongname').children('h1').attr('class', 'animated fadeInUp');
                            $('#data').children('h1').attr('class', 'animated fadeInUp');
                            $('#data').children('h2').textillate('in');

                        }
                    }


                });
                $('#nextsongname').children('h1').addClass('animated fadeOutRight');
                $('#data').children('h2').textillate('out');
                $('#data').children('h1').addClass('animated fadeOutRight');

            }


        });
        console.log(3);
    });
