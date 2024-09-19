$(document).ready(() => {

    $("#carousel-imgs").slick({
      autoplay: true,
    });

  $(".menu-hamburguer").click(() => {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00)00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: true,
      },
    }  });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeveiculo = $(this).parent().find('h3').text();
        console.log(nomeveiculo)
       
        $('#veiculo-interesse').val(nomeveiculo)
    
        $('html').animate ({
            scrollTop: destino.offset().top
        }, 1000) 
})
});