<?php

include("conexao.php");

$UF = $_POST['UF'];
$Cidade = $_POST['Cidade'];
$Bairro = $_POST['Bairro'];

$sql = "INSERT INTO comunidade (UF, Cidade, Bairro) 
VALUES ('$UF', '$Cidade', '$Bairro')";
if (mysqli_query($conexao, $sql)) {
    echo "<script> location.href='inicio.html'; </script>";
} else {
    echo "Erro". mysqli_error($conexao);
}

mysqli_close($conexao);

?>