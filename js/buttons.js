$(document).ready(function(){
    $('.size .form-block__form-send div span').on('click', function(){
        $('.size .form-block__form-send div input').slideToggle(300);
    });
    $('.needs .form-block__form-send div span').on('click', function(){
        $('.needs .form-block__form-send div input').slideToggle(300);
    });
});