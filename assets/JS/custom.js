$(function(){

// $('.moreNav').hide();


// $(".more").click(function(){
//     $(".moreNav").addClass('d-md-block');
// });


$('.more').on('click',function(){





    if($('.moreNav').hasClass("d-none")){
        $(".moreNav").removeClass('d-none');
        $(".moreNav").fadeIn('slow');
 

    }else{
        $('.moreNav').addClass('d-none');
    }
    
});





// $('.s1').hover(function(){
//    $(this).removeClass('p1');
//    $(this).addClass('bg-primary')
// })

$('.t').hide()

$('.s1').on({
            mouseenter: function(){
                $(this).removeClass('p1');
                $(this).addClass('bg-primary')
                $('.t').fadeIn('slow');
              
                // $(this).text('This is some text.')
            },
            mouseleave: function(){
                $(this).addClass('p1');
                $(this).removeClass('bg-primary')
                $('.t').fadeOut('fast');

                // $(this).text('')
            }

})

$('.s2').on({
    mouseenter: function(){
        $('.he').removeClass('d-none');

        // $(this).text('This is some text.')
    },
    mouseleave: function(){
        $('.he').addClass('d-none');
        // $(this).text('')
    }

})




});