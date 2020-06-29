$(function () {
    $('button').mouseover(function () {
        $(this).addClass('fundoazul');
    });

    $('button').mouseout(function () {
        $(this).removeClass('fundoazul');
    });

    /*$('button').click(function () {
        $(this).toggleClass('fundoazul');*/

        /*if($(this).hasClass('fundoazul')){
            $(this).removeClass('fundoazul');
        }else{
            $(this).addClass('fundoazul');
        }*/

        /*$(this).addClass('fundoazul');*/
    /*});*/
    /*$('button').click(function (){
        alert('teste');
    })*/
});