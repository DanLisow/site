$(document).ready(function(){
    $('.menu-btn span').on('click', function(){
        $('.menu-btn span').toggleClass('active');
        $('.menu-body').toggleClass('active');
    });
    $('.menu-body__list ul li a').on('click', function(){
        $('.menu-btn span').removeClass('active');
        $('.menu-body').removeClass('active');
    });
    $('.menu-body__button button').on('click', function(){
        $('.menu-btn span').removeClass('active');
        $('.menu-body').removeClass('active');
    });
});
