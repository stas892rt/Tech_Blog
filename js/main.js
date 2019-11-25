$(document).ready(function(){
    var minh = $(window).height() - ($('.navbar').height() + $('footer').height());
    $('section').css('min-height', minh + 'px');
    }
);
// $('#submit-form').click(function (e){
//     e.preventDefault();
//     $('.form-group input').each(function () {
//         console.log($(this).val());
//     })
// });


$('#submit-form').click(function(e){
    var name = $('.form-group input').first().val();
    var mail = $('.form-group input').eq(1).val();

    $('#regbut').remove();
    $('.navbar-nav').append('<a>welcome, ' + name + '</a>');
});


// function submitData(){
//     const fs =require('fs');
//
//     let data = document.getElementById('exampleInputPassword1')+' '+document.getElementById('exampleInputEmail1');
//     fs.writeFile('login.txt',data, (err)=> {if(err)throw err;});
// }
