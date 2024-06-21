let usuarioAtual = localStorage.getItem('LoginAtual');

if (usuarioAtual != null) {
  usuarioAtual = JSON.parse(usuarioAtual);
  if (usuarioAtual.email == "adm@gmail.com") {
    document.getElementById("opcoesAcervo").innerHTML = `
    <a href="telaAdicionarLivro.html" class="btn-padrao rounded ps-4"
      style="width: 200px; height: 30px; display: flex; justify-content: center; align-items: center;">
      Adicionar Livro </a>`;
  }
}

function mostrarLivros() {
  fetch('https://phaccess.vercel.app/livros', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(async data => {
      let livros = ``;
      for (i = 0; i < data.length; i++) {
        livros += `<div class="card-livro">
            <img src="data:image/png;base64,${data[i].capa}" alt="" class="img-livro">
            <h6 class="title-livro">${data[i].nome}</h6>
            <button class="vermais" onclick="window.location.href='telaLivro.html?id=${data[i].id_livro}'" >Ver Mais</button>
         </div>`;
      }

      document.getElementById("galeriaLivros").innerHTML = livros;
    })
    .catch(error => console.error('Erro ao enviar os dados:', error));
}

