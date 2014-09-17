$(document).ready(function(){ 
$('.me, #Interests').hover(function(){
    if(!$(this).hasClass('animated')){
        $(this).addClass('animated');
        $(this).stop().effect('shake', {distance:8}, 600);
    }
}, function(){
    $(this).removeClass('animated');
});

});
