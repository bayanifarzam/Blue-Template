$(function(){




// $(".more").click(function(){
//     $(".moreNav").addClass('d-md-block');
// });


$('.more').on('click',function(){

    if($('.moreNav').hasClass("d-none")){
        $(".moreNav").removeClass('d-none');
 

    }else{
        $('.moreNav').addClass('d-none');
    }
    
});




});