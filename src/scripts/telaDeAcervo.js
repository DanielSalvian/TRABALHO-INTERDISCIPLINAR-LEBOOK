let usuarioAtual = localStorage.getItem('LoginAtual');

if (usuarioAtual != null) {
    usuarioAtual = JSON.parse(usuarioAtual);
    if (usuarioAtual.email == "adm@gmail.com") {
        document.getElementById("opcoesAcervo").innerHTML = `<div class="col-4 row justify-content-center d-flex">
                <div class="col-7 d-flex justify-content-center pb-2 mb-2 mt-2">
                   <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Gêneros
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item active" href="#">Fantasia</a></li>
                        <li><a class="dropdown-item" href="#">Aventura</a></li>
                        <li><a class="dropdown-item" href="#">Romance</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Todos</a></li>
                      </ul>
                    </div>
                </div>
             </div>
    
             <div class="col-4 row justify-content-center d-flex">
                <div class="col-7 d-flex justify-content-center pb-2 mb-2 mt-2">
                   <a href="telaAdicionarLivro.html" class="btn-padrao rounded"
                      style="width: 400px; height: 30px; display: flex; justify-content: center; align-items: center;">
                      Adicionar
                   </a>
                </div>
             </div>`;
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
            console.log(data)
            for (i = 0; i < data.length; i++) {
                livros += `<div class="d-flex col-lg-3 col-1">
            <div class="row">
              <h5 class="col-12">${data[i].nome}</h5>
              <a href="telaLivro.html?id=${data[i].id_livro}" class="col-12"><img src="data:image/png;base64,${data[i].capa}" class="sombras-nav borda-livro capa-livro d-flex" style="width: 300px; height: 380px;"></a>
            </div>
          </div>`;
            }

            document.getElementById("galeriaLivros").innerHTML = livros;
        })
        .catch(error => console.error('Erro ao enviar os dados:', error));
}

