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



// function submitData(){
//     const fs =require('fs');
//
//     let data = document.getElementById('exampleInputPassword1')+' '+document.getElementById('exampleInputEmail1');
//     fs.writeFile('login.txt',data, (err)=> {if(err)throw err;});
// }
