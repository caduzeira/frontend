$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
    
    $('.featured-item:first h4').append('<span class="badge bg-secondary">NOVO</span>')//adicionar elemento por ultimo 
                                                                                       //prepend elemento em primeiro

    $('.featured-item a').addClass('btn btn-success stretch-link')

    $('.featured-item h4').dblclick(function(){
        $(this).css({
            'color':'red',
            'background':'#ff0',
            'font-weight':'100'
        })
    })

    $('.featured-item a').on('click',function(event){
        event.preventDefault();

        alert('Produto esgotado ')
    })
})
