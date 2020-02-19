// comentários
/* comentario 2 */
/*
var nome = "Rogerio";*/
function desfocou() {
    console.log('Desfocou do campo 1');
}

function focou() {
    console.log('Focou no campo 1');
}

function mudouOpcao(objeto) {
    console.log('Selecionou: '+objeto.value);
}

function carregou() {
    alert('pagina carregada');
}

function soltouTecla(event) {
    console.log('soltou alguma tecla '+event.keyCode);
}

function apertouTecla(event) {
    console.log('apertou alguma tecla '+event.shiftKey());
}

function apertouTeclashift(event) {
    if(event.shiftKey == true && event.keyCode == 69){
        console.log('Apertou SHIFT + E');
    }
}

function cliqueDuplo() {
    console.log("Clicou duas vezes")
}

function botaoDireito() {
    console.log('Botão direito');
    return false;
}

function clicou() {
    console.log('clicou');
}

function moveMouse() {
    console.log("Mouse se mouveu");
}

function mouseSaiucima() {
    console.log('Mouse saiu');
}

function mouseEmcima() {
    console.log('Mouse passou');
}

function apertaMouse(){
    console.log('Apertou o mouse');
}

function soltaMouse() {
    console.log('Soltou o mouse');
}

function trocarDiv() {
    var area = document.getElementById('area');
    var texto = prompt("Qual seu nome?");

    area.innerHTML = texto;
}

function trocarDiv2(nome) {
    var area = document.getElementById('area');
    var texto = prompt("Qual seu nome?");

    area.innerHTML = nome+" "+texto;
}

function addIngre() {
    var ing = document.getElementById("ingrediente").value;

    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml+"<li>"+ing+"</li>";

    document.getElementById('lista').innerHTML = listahtml;
}
function soma() {
    var campo1 = document.getElementById('campo1').value;
    var campo2 = document.getElementById('campo2').value;

    resultado = parseInt(campo1) + parseInt(campo2);

    alert(resultado);
}

function multiplica() {
    var campo1 = document.getElementById('campo1').value;
    var campo2 = document.getElementById('campo2').value;

    resultado = parseInt(campo1) * parseInt(campo2);

    alert(resultado);
}

function verificar() {
    var n1 = document.getElementById('n1').innerHTML;
    var n2 = document.getElementById('n2').value;

    if(n1 == n2){
        alert('Você acertou');
    }else{
        alert('Você errou');
    }

    resetar();
}

function resetar() {
    document.getElementById('n2').value = '';

    var r = Math.floor(Math.random() * 100);
    document.getElementById('n1').innerHTML = r;
}
