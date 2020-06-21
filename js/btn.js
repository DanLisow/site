$(document).ready(function(){
    $('.menu-btn span').on('click', function(){
        $('.menu-btn span').toggleClass('active');
        $('.menu-body').toggleClass('active');
    });
});