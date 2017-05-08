
$('.currentPage').mouseenter(function(){

    $('.hiddentext').css({
        
    color:'rgb(142, 142, 138)',
         
    
    });
    
    $('.hiddenLine' ).css({
color:'white',
     textShadow:'2px 2px  13px grey',
});

    
    
    

}).mouseleave(function(){

$('.hiddentext').css({
 
    color: 'rgba(0,0,0,.2)',
   
    

   
});
    
    
        $('.hiddenLine' ).css({
color:'rgba(0,0,0, .001)',
     textShadow:'none',
});



});




$('.headText').mouseenter(function(){

    $('.hiddenLine').css({
        
    color:'rgb(0,0,0)',
        textShadow:'2px 2px  13px grey',
         
    
    });
    
    
    

}).mouseleave(function(){

$('.hiddenLine').css({
 
    color: 'rgba(0,0,0,.001)',
     textShadow:'none ',
    
});


});



$('.currentPage').click(function(){

$('.hiddentext' ).css({
color:'red',
});
    
$('.hiddenLine' ).css({
color:'white',
     textShadow:'2px 2px  13px grey',
});

});





//$('#click').on('click tap', function() {
//     documentClick = true;
//});
//
//
//$(document).on('touchstart', function() {
//    documentClick = true;
//});
//$(document).on('touchmove', function() {
//    documentClick = false;
//});
//$(document).on('click touchend', function(event) {
//    if (event.type == "click") documentClick = true;
//    if (documentClick){
//        doStuff();
//    }
// });



//$(function () {
//    $(".tab-content").hide().first().show();
//    $(".inner-nav li:first").addClass("active");
//
//    $(".inner-nav a").on('click', function (e) {
//        e.preventDefault();
//        $(this).closest('li').addClass("active").siblings().removeClass("active");
//        $($(this).attr('href')).show().siblings('.tab-content').hide();
//    });
//
//    var hash = $.trim( window.location.hash );
//
//    if (hash) $('.inner-nav a[href$="'+hash+'"]').trigger('click');
//
//});