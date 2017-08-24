$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 6000,
        pager: false,
        adaptiveHeight: true,
        nextText:'',
        prevText:''


    });
});

$(document).ready(function() {
    $("nav [href]").each(function() {
        if (this.href == window.location.href) {
            console.log(this),
            $(this).addClass("menu-active");
        }
    });
});

window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});


