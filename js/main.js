$(document).ready(function(){
    var minh = $(window).height() - ($('.navbar').height() + $('footer').height());
    $('section').css('min-height', minh + 'px');
    }
);
$('#submit-form').click(function (e){
    e.preventDefault();
    $('.form-group input').each(function () {
        console.log($(this).val());
    })
});