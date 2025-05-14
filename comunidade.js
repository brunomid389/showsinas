document.getElementById('createPostBtn').addEventListener('click', function() {
    // Mostrar o formulário para criar o post
    document.getElementById('postForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    // Esconder o formulário ao clicar no overlay
    document.getElementById('postForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('submitPostBtn').addEventListener('click', function() {
    const postImage = document.getElementById('postImage').files[0];
    const postTitle = document.getElementById('postTitle').value;
    const postText = document.getElementById('postText').value;

    if (!postTitle || !postText) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Criar o post visualmente
    const postContainer = document.getElementById('postContainer');

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    // Se houver imagem, criar elemento de imagem
    if (postImage) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(postImage);
        postDiv.appendChild(img);
    }

    // Título da postagem
    const postTitleElement = document.createElement('h3');
    postTitleElement.textContent = postTitle;
    postDiv.appendChild(postTitleElement);

    // Texto da postagem
    const postTextElement = document.createElement('p');
    postTextElement.textContent = postText;
    postDiv.appendChild(postTextElement);

    // Adicionar o post na tela
    postContainer.prepend(postDiv);

    // Fechar o formulário após o envio
    document.getElementById('postForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});
