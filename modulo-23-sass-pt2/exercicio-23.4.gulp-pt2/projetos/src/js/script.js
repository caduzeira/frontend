$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

    const duracao = 1000

    $('#form-submit').on('click',function(e){
        e.preventDefault()

        if($('#email').val() != ''){
            $('#email, #form-submit').animate({
                opacity:"toggle",
                top:"-50"
            },duracao,function(){
                console.log($(this).val())
            })
        }else{
            $('#email').css({
                'border':'1px solid red',
            })
        }
    })
})