<?php

include("conexao.php");

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "INSERT INTO usuario (nome, email, senha) 
VALUES ('$nome', '$email', '$senha')";
if (mysqli_query($conexao, $sql)) {
    echo "<script> location.href='escolher.html'; </script>";
} else {
    echo "Erro". mysqli_error($conexao);
}

mysqli_close($conexao);

?>