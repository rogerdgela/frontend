$(function () {
    $('.botao').bind('click', function () {
        $('.div').animate(
            {
                /*'margin-left':'150px',*/
                /*'margin-top':'5px',*/
                'border-radius':'50px',
                'background-color': 'green'
            }, {
                duration:1500,
                complete:function () {
                    $('.div').animate(
                        {
                            /*'margin-left':'150px',*/
                            /*'margin-top':'5px',*/
                            'border-radius':'0px',
                            'background-color': 'red'
                        },1500)
                }
                /*step:function(){
                    console.log('Nova etapa');
                },
                complete:function () {
                    console.log('animação finalizada');
                },
                start: function () {
                    console.log('animacao iniciada');
                }*/
            });
    });
});