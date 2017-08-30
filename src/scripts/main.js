$(document).ready(function(){
    $('#slider1').bxSlider({
        mode: 'fade',
        auto:true,
        pause: 6000,
        pager: false,
        adaptiveHeight: false,
        nextText:'',
        prevText:''

    });
});

$(document).ready(function(){
    $('#slider2').bxSlider({
        mode: 'fade',
        auto:true,
        pause: 6000,
        pager: false,
        adaptiveHeight: true,
        nextText:'',
        prevText:''

    });

});

;

$(document).ready(function() {
    $("nav [href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("menu-active");
        }
        else if (this.href + "#" === window.location.href) {
            $(this).addClass("menu-active");
        }
    });
});

window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});

$('#about-list h5').click(function() {
    $(this).find("i.fa").toggleClass("fa-chevron-down fa-chevron-up");
});

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
});

