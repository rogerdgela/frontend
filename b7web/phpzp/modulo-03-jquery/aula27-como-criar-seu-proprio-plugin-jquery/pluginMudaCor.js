(function ($) {
    $.fn.mudarCor = function (cor) {
        this.each(function () {
            $(this).css('color', cor);
            $(this).css('text-decoration', 'none');

            $(this).hover(function () {
                $(this).css('background', '#000000');
            },function () {
                $(this).css('background', '#ffffff');
            });
        });

        return this;
    }
}(jQuery));