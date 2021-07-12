
$('a').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 350,
        easing: "linear"
    });
    return false;
});

$(document).ready(function () {
    AOS.init();

    $.fn.animate_Text = function () {
        var string = this.text();
        return this.each(function () {
            var $this = $(this);
            $this.html(string.replace(/./g, '<span class="new">$&</span>'));
            $this.find('span.new').each(function (i, el) {
                setTimeout(function () { $(el).addClass('div_opacity'); }, 40 * i);
            });
        });
    };
    $('.example').show();
    $('.example').animate_Text();

    $.fn.animate_Text = function () {
        var string = this.text();
        return this.each(function () {
            var $this = $(this);
            $this.html(string.replace(/./g, '<span class="new">$&</span>'));
            $this.find('span.new').each(function (i, el) {
                setTimeout(function () { $(el).addClass('div_opacity'); }, 150 * i);
            });
        });
    };
    $('.example2').show();
    $('.example2').animate_Text();


    let curEl = 0;
    $('.header__navbar__lang__content').on("click", () => {
        if (curEl === 0) dropDownAnim(true);
        else dropDownAnim(false);
        curEl = curEl == 0 ? 1 : 0;
    })

    function dropDownAnim(val) {
        if (val) $('.main__inner__dropdown').fadeIn();
        else $('.main__inner__dropdown').fadeOut();
        let percent = val == true ? 100 : 0;
        let degree = val == true ? -135 : 45;
        $('.main__inner__dropdown').css({ "height": percent + "%" })
        $('.arrow_down').css({ "transform": "rotate(" + degree + "deg)" })
    }

    $(".header__search-icon").click(function () {
        $(".header__search-icon, .input-search").toggleClass("active");
        $("input[type='text']").focus();
    });

    $('.hamburger').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('hamburger_active');
        return;
    });

    $('.hamburger').click(function () {
        if ($(".header__burger-menu").is(":visible") == true) {
            $('.header__burger-menu').hide();
            $('body').css('overflow', 'auto');
        } else {
            $('.header__burger-menu').show();
            $('body').css('overflow', 'hidden')
            $('.header__link').click(function () {
                $('.header__burger-menu').hide();
                $('body').css('overflow', 'auto');
                $('.hamburger_active').removeClass('hamburger_active');
            });
        }
    });

    $('.header__search-icon').on('click', function (e) {
        e.preventDefault;
        $('.input-search').toggleClass('input-search-active');
        return;
    });

    let clicked = false;
    let activeStyle = {
        color: "#F2BC15",
        fontWeight: "700"
    };
    let notActive = {
        color: "black",
        fontWeight: "400"
    }
    $($(".price__title")[0]).css(activeStyle)
    $("#switch").click(function () {
        $($(".price__title")[clicked ? 0 : 1]).css(activeStyle);
        $($(".price__title")[clicked ? 1 : 0]).css(notActive)
        clicked = !clicked;
    })

});