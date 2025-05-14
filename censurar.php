<?php
header('Content-Type: application/json');

// Recebe o JSON enviado pelo JavaScript
$input = json_decode(file_get_contents('php://input'), true);

$texto = $input['texto'] ?? '';

// Lista de palavras proibidas (adicione mais conforme necessário)
$palavroes = [
    'merda', 'bosta', 'puta', 'caralho', 'porra', 'cu', 'fdp', 'desgraçado', 'vagabunda',
    'sexo', 'pornô', 'porno', 'pênis', 'vagina', 'boquete', 'gozar', 'transar'
];

// Censura as palavras com asteriscos
function censurarTexto($texto, $palavroes) {
    foreach ($palavroes as $palavra) {
        $padrão = '/' . preg_quote($palavra, '/') . '/i'; // Regex para case-insensitive
        $texto = preg_replace_callback($padrão, function($matches) {
            return str_repeat('*', strlen($matches[0]));
        }, $texto);
    }
    return $texto;
}

// Aplica a censura
$censurado = censurarTexto($texto, $palavroes);

// Retorna o texto censurado em JSON
echo json_encode(['censurado' => $censurado]);
