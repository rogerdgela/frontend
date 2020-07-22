$(function(){
    $('button').bind('click',function () {
        var altura = $('#altura').val();
        var peso = $('#peso').val();

        altura = altura.replace(',', '.');
        peso = peso.replace(',', '.');

        var imc = peso / (altura * altura);

        if(imc < 16){
            var estado = "Baixo peso muito grave";
        }else if(imc >= 16 && imc <= 16.99){
            var estado = "Baixo peso grave";
        }else if(imc >= 17 && imc <= 14.49){
            var estado = "Baixo peso"
        }else if(imc >= 18.50 && imc <= 24.49){
            var estado = "Peso Normal"
        }else if(imc >= 25 && imc <= 29.99){
            var estado = "Sobrepeso"
        }else if(imc >= 30 && imc <= 34.99){
            var estado = "Obesidade grau I"
        }else if(imc >= 35 && imc <= 39.99){
            var estado = "Obesidade grau II"
        }else if(imc >= 40){
            var estado = "Obesidade grau III"
        }

        $('#resultado').html("<br>Seu IMC é: " + Math.round(imc) + " KG/m*m " + "e seu estado é: " + estado);
    });
});
