// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
   
   $('.owl-carousel').owlCarousel();
   
   let titulos = $('h4') // tag
   
   let itens = $('.featured-item') // class
   
   let destaques = $('#featured') // id
   
   console.log(titulos.first());
   
   // Configuração de produtos
   
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')
   
   $('.featured-item h4').dblclick( function(){
      
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });
      
   });
   
   /*
   * Manipulação de eventos
   */
   $('.featured-item a').on('blur', function(event){
      
      event.preventDefault();
      
      alert('Produto esgotado');
      
   })
   
   //calback
   $('.featured-item:nth(1)')
   .hide(2000,function(){
      console.log($(this).find('h4').text()+' esgotado')
   })
   .show(2000,function(){
      console.log($(this).find('h4').text()+' em estoque')
   })
   
   //animação
   const duracao = 1000
   $('.featured-item:nth(0)')
   .hide(duracao)//oculta
   .show(duracao)//mostra
   .fadeOut(duracao)//esconde
   .fadeIn(duracao)//mostra
   .toggle(duracao)//inverte acão
   .toggle(duracao)

   $('#form-submit').on('click',function(e){
      e.preventDefault()

      if($('#email').val() != ''){
         $('#email, #form-submit').animate({
            opacity:"toggle",
            top:"-50"
         },duracao,function(){
            console.log($(this).val())
         })
      }
   });
  
   $('.nav-modal-open').on('click',function(e){
      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      $('.modal-header h5.modal-title').html($(this).text())
   
      let myModal = new bootstrap.Modal($('#modalId'))

      myModal.show()

   })

   $('body').on('submit','.modal-body .form', function(e){
      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         return false
         console.log('verifique campos obrigatorios')
      }else{
         $(this).submit()
      }
   })

   function validate (elem){
      if(elem.val()==''){

         console.log('o campo' +  ' ' + elem.attr('name') + ' ' + 'é obrigatorio')

         elem.addClass('invalid')
      }else{
         elem.removeClass('invalid')
      }
   }

   $('body').on('blur','#nome',function(e){
      validate($(this))
   })

   $('body').on('blur','#email',function(e){
      validate($(this))
   })

   $('body').on('blur','#cpf',function(e){
      validate($(this))
   })

})
