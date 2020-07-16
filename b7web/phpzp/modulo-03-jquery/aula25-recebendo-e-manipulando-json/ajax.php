<?php
/*$p = $_POST;
$p['qt_nome'] = strlen($_POST['usuario']);
echo json_encode($p);*/

$nome = $_POST['usuario'];
$senha = $_POST['senha'];

$array = array('status' => '');
if($nome == 'Rogerio' and $senha == '123'){
    $array['status'] = 'ok';
}

echo json_encode($array);