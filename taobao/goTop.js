/**
 * Created by yongze on 2017/11/13.
 */
//
requirejs.config({
    paths:{
        jquery:'./node_modules/jquery/dist/jquery.min'
    }
});

requirejs(['jquery'],function ($) {
    $('#backTop').on('click',move);
    $(window).on('scroll',function () {
        checkPosition($(window).height())
    });

    checkPosition($(window).height);

    function move() {
        $('html,body').animate({
            scrollTop:0
        },800);
    }
    // function go() {
    //     $('html,body').scrollTop(0);
    // }
    function checkPosition(pos) {
        if ($(window).scrollTop() > pos){
            $('#backTop').fadeIn();
        } else {
            $('#backTop').fadeOut();
        }
    }
})



