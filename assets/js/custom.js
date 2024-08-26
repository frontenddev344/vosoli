$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('header').addClass('header-fix');
    } else {
       $('header').removeClass('header-fix');
    }
});

$('.toggle').click(function(){
    $('body').addClass("menuToggle");
});
$('.close').click(function(){
    $('body').removeClass("menuToggle");
});