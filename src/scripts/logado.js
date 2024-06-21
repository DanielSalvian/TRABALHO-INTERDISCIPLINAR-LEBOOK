
function carregarLivros() {
    fetch('https://phaccess.vercel.app/livros', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            let livro = ``;
            for (i = 0; i < data.length; i++) {
                livro += `<div class="card-livro">
                    <div class="img-camp">
                    <img src="data:image/png;base64,${data[i].capa}" alt="" class="img-livro">
                    </div>
                    <h6 class="title-livro">${data[i].nome}</h6>
                    <button class="vermais" onclick="window.location.href='telaLivro.html?id=${data[i].id_livro}'">Ver Mais</button>
                  </div>`;
            }
            document.getElementById("recomendacaoLivros").innerHTML = livro;
        })
        .catch(error => console.error('Erro ao encontrar os dados:', error));

}