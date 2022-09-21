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
   
   $('#form-submit').on('click',function(e){
      e.preventDefault()
      
      if($('#email').val() != ''){
         $('#email, #form-submit').animate({
            opacity:"toggle",
            top:"-50",
         },duracao,function(){
            console.log($(this).val())
         })
      }else{
         $('#email, #form-submit').css({
            'border':'1px solid red'
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

   $('body').on('blur','#nome',function(){
      let nome = $(this).val()

      if(nome.length < 2){
         $(this).addClass('erro')
         $('#helpNome').text('Nome invalido')
      }else{
         $(this).removeClass('erro')
         $('#helpNome').text('')
      }
   })
   
   $('body').on('blur','#email',function(){
      
      let email = $(this).val();

      let testa = /^.+@.+\..{2,}$/;

      let resultado = testa.test(email)

      if(email != '' && resultado == true && email.length > 2){
         $(this).removeClass('erro')
         $('#helpEmail').text('')
      }else{
         $(this).addClass('erro')
         $('#helpEmail').text('E-mail invalido')
      }
   })

   $('body').on('blur',"#cpf",function(){
      
      let cpf = $(this).val();
      
      let testa = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

      let resultado = testa.test(cpf)

      if(cpf != '' && resultado == true){
         $(this).removeClass('erro')
         $('#helpCpf').text('')
      }else{
         $(this).addClass('erro')
         $('#helpCpf').text('CPF Invalido')
      }
   })

})
