document.getElementById('addButton').addEventListener('click', function () {
  document.getElementById('postForm').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('postForm').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});

document.getElementById('formPost').addEventListener('submit', function (e) {
  e.preventDefault();

  const postImage = document.getElementById('image').files[0];
  const postTitle = document.getElementById('title').value;
  const postText = document.getElementById('text').value;

  if (!postTitle || !postText) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Função de censura local
  function censurar(texto) {
    const palavrasBanidas = ['boceta', 'Porra', 'sexo', 'puta', 'caralho', 'buceta', 'merda', 'porra', 'viado', 'foda', 'piranha', 'boquete'];
    let censurado = texto;

    palavrasBanidas.forEach(palavra => {
      const regex = new RegExp(palavra, 'gi');
      censurado = censurado.replace(regex, '****');
    });

    return censurado;
  }

  const textoCensurado = censurar(postText);

  // Criar post
  const postContainer = document.getElementById('posts');
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');

  // Imagem
  if (postImage) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(postImage);
    postDiv.appendChild(img);
  }

  // Título
  const h3 = document.createElement('h3');
  h3.textContent = postTitle;
  postDiv.appendChild(h3);

  // Texto (já censurado)
  const p = document.createElement('p');
  p.textContent = textoCensurado;
  postDiv.appendChild(p);

  // Adiciona à tela
  postContainer.prepend(postDiv);

  // Fecha formulário
  document.getElementById('postForm').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';

  // Limpa campos
  document.getElementById('formPost').reset();
});
