$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

    const duracao = 1000

    $('#form-submit').on('click',function(e){
        e.preventDefault();

        if($('#email').val() != ''){
            $('#email, #form-submit').animate({
            opacity:"toggle",
            top:"-50"
         },duracao,function(){
            console.log($(this).val())
         })
        }else{
            $('#email').css({
                'border':'1px solid red'
            })
        }
    })

    function validacao(elem){
        if(elem.val() == ''){
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')
        }else{
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
    }

    $('body').on('blur','#email',function(e){

        let testa = /^.+@.+\..{2,}$/;

        let resultado = testa.test($(this).val())

        if(resultado === true){
            $(this).removeClass('invalid')
            $(this).parent().find('.text-muted').hide()
            validacao($(this))
        }else{
            $(this).addClass('invalid')
            $(this).parent().find('.text-muted').show()
        }
        
    })

    $('body').on('blur','#cpf',function(e){
        validacao($(this))
        $('#cpf').mask('000.000.000-00')
    })
})