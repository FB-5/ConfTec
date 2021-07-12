function ativaScrollSuave(selector) {

    $(selector).click(function(event){              /*chamou jquery*/
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({                    /*chamou jquery   evento de enviar o lemento para outro - ex. inscreva-se para seus dados*/ 
            scrollTop: $(target).offset().top
        }, 1000);  
    });
}


ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');