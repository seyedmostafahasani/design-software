$(function($){
    var detail = true;
    var menu = true;

    $(document).on('click', function(event) {
        if( (! $(event.target).is('.sign-in , .sign-in img')) || ($(event.target).is('.sign-in , .sign-in img') && detail==false) ){
            $('.info-sign').css('transform', 'translate3d(90px,0,0)');
            detail = true;
        }else if (detail == true) {
            $('.info-sign').css('transform', 'translate3d(-160px,0,0)');
            detail = false;
        }
    });

    $(document).on('click', function(event) {
        if( (! $(event.target).is('.menu , .menu img , .rm *')) || ($(event.target).is('.menu , .menu img') && menu == false) ){
            $('.wrap-page').css('transform', 'translate3d(0,0,0)');
            $('.responsMenu2 , .responsMenu3').css({
                'transform': 'translate3d(0,0,0)',
                'z-index': '0'
            });
            $('.responsMenu1').css('background', '#316CAE');
            menu = true;
        }else if (menu == true){
            $('.wrap-page').css('transform', 'translate3d(-200px,0,0)');
               menu = false;
        }
    });
});

function path(id){
        var param = parseInt(id);
        switch(param){
            case 01 :{
                $('.wrap-page').css('transform', 'translate3d(-210px ,0 ,0)');
                $('.responsMenu2').css({
                    'transform': 'translate3d(-190px,0,0)',
                    'z-index': '1'
                });
                $('.responsMenu1').css('background', '#3282DD');
            }break;

            case 11 :{
                $('.wrap-page').css('transform', 'translate3d(-200px ,0 ,0)');
                $('.responsMenu2').css({
                    'transform': 'translate3d(0,0,0)',
                    'z-index': '0'
                });
                $('.responsMenu1').css('background', '#316CAE');
            }break;

            case 16 :{
                $('.wrap-page').css('transform', 'translate3d(-220px ,0 ,0)');
                $('.responsMenu3').css({
                    'transform': 'translate3d(-190px,0,0)',
                    'z-index': '1'
                });
                $('.responsMenu2').css('background', '#3B7AC2');
                $('.responsMenu1').css('background', '#3C8EEC');
            }break;

            case 161 :{
                $('.wrap-page').css('transform', 'translate3d(-210px ,0 ,0)');
                $('.responsMenu3').css({
                    'transform': 'translate3d(0,0,0)',
                    'z-index': '0'
                });
                $('.responsMenu2').css('background', '#316CAE');
                $('.responsMenu1').css('background', '#3C8EEC');
            }break;
        }
    }