
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all") {

            $('.filter').show('1000');
        }
        else {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

$(".gallery .btn-default").on('click', function(){
    $(this).siblings().removeClass('filter-button-active')
    $(this).toggleClass('filter-button-active');
});


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    "showImageNumberLabel":false
});
