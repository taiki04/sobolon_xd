$(function() { 
    // prop() disabled属性入手
    $('.btn__contact').prop('disabled', true);
    $('form input:required,textarea:required').change(function() {
        let flag = true;

        $('form input:required').each(function(e) {
            if($('form input:required,textarea:required').eq(e).val === "") {
                flag = false;
            }
        });

        if(flag) {
            $('btn__contact').prop('disabled', false);
        } else {
            $('btn__contact').prop('disabled', true);
        }
    });

    $('.js-toggle__btn').click(function() {
        $('.js-togglebar, .js-toggle__btn span').toggleClass('js-toggle__show');
    });

    $('a[href^="#"]').click(function() {
        let header = $('.header').innerHeight();
        let speed = 600;
        let id = $(this).attr('href');
        let target = $('#' === id ? "html" : id);
        let position = $(target).offset().top - header;

        $('html, body').animate(
            {
                scrollTop: position
            },
            speed
        );
        return false;
    });

    $('.js-header__link').click(function() {
        $('.js-header__link').removeClass('js-header__link--active');
        $(this).addClass('js-header__link--active');
        return false;
    });

    let $form = $('#js-form');
    $form.submit(function (e) { 
        $.ajax({ 
            url: $form.attr('action'), 
            data: $form.serialize(), 
            type: "POST", 
            dataType: "xml", 
            statusCode: { 
                0: function () { 
                $form.slideUp();
                $('#js-success').slideDown();
                }, 
                200: function () { 
                $form.slideUp();
                $('#js-error').slideDown();
                } 
            } 
        });
        return false;
    }); 

    

    let $submit = $('#js-submit');
    $('#js-form input, #js-form textarea').change(function() {
        if(
            $('#js-form input[type="text"]').val() !== "" &&
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.874704791"]').prop('checked') === true
        ) {
            $submit.prop('disabled', false);
            $submit.addClass('active');
        } else {
            $submit.prop('disabled', true);
            $submit.removeClass('active');
        }
    });
});