// Exemplo: scroll suave para as âncoras de navegação

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });
});
