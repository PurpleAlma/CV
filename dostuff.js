$('.header').hover(
    function(){$(this).css("opacity",1)},
    function(){$(this).css("opacity",0.8)})

$('.footer').hover(
    function(){$(this).css("opacity",1)},
    function(){$(this).css("opacity",0.8)})

$(".boring-summary-button").click(function(){
    $(".boring-summary").toggle(500)
});

$(document).ready(function(){
    $('.boring-summary-button').on('click', function () {
        $(this).html((i, t) => t == 'Hide' ? 'Show' : 'Hide');
    });
});
