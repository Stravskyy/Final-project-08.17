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

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'menu-link menu-active';
    }
}

window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});

