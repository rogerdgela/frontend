$(function () {
    $('#objeto').bind('mousedown',function (){
        $('#objeto').bind('mousemove',function (event){
            //console.log(event.originalEvent.pageX);
            var x = event.originalEvent.pageX;
            var y = event.originalEvent.pageY;

            var width = $(this).width();
            var height = $(this).height();

            $(this).css('left', (x - (width / 2)) + 'px');
            $(this).css('top', (y - (height / 2)) + 'px');
        });
    });

    $('#objeto').bind('mouseup',function (){

        $('#objeto').unbind('mousemove');
    });
});
