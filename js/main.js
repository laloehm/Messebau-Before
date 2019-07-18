
let menu = $('#menu');
let links = $('.nav-links');

$(menu).on('click', function () {
    $(this).toggleClass('menu-active');
    if ($(this).hasClass('menu-active')) {
        links.slideDown();
        setTimeout(function () {
            links.animate({
                'left': '0'
            }, 500);
        }, 500)

    } else {
        links.animate({
            'left': '-500px'
        }, 500);
        setTimeout(function () {
            links.slideUp();
        }, 500)

    }
});



$(document).ready(function () {

    let arrow = $('.arrow span');

    $(arrow[4]).addClass('arrow-hight');

    setInterval(function () {
        setTimeout(function () {
            $(arrow[0]).addClass('arrow-hight');
            $(arrow[1]).addClass('arrow-hight');
            $(arrow[2]).addClass('arrow-low');
            $(arrow[3]).addClass('arrow-low');
            $(arrow[4]).removeClass().addClass('arrow-medium');

        }, 500)

        setTimeout(function () {
            $(arrow[0]).removeClass().addClass('arrow-medium');
            $(arrow[1]).removeClass().addClass('arrow-medium');
            $(arrow[2]).removeClass().addClass('arrow-hight');
            $(arrow[3]).removeClass().addClass('arrow-hight');
            $(arrow[4]).removeClass().addClass('arrow-low');
        }, 900)
        setTimeout(function () {
            $(arrow[0]).removeClass().addClass('arrow-low');
            $(arrow[1]).removeClass().addClass('arrow-low');
            $(arrow[2]).removeClass().addClass('arrow-medium');
            $(arrow[3]).removeClass().addClass('arrow-medium');
            $(arrow[4]).removeClass().addClass('arrow-hight');
        }, 1300)
    }, 1300)

    var cambio = false;
    $('.navbar a').each(function (index) {
        if (this.href.trim() == window.location) {
            $(this).parent().addClass("active");
            cambio = true;
        }
    });
    if (!cambio) {
        $('.navbar a:first').addClass("active");
    }


})