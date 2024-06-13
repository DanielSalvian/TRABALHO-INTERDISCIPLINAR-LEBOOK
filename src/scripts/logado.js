console.log("data-0");
recomendacaoLivro() ;

function recomendacaoLivro() {
    console.log("data");
    fetch('https://phaccess.vercel.app/livro?id=1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let livro = `<div class="col-lg-3 col-sm-8 m-2">
        <div class=""><img id="capaLivro" src="livro.jpg" style="width: 300px; height: 380px"
            class="sombras-nav borda-livro capa-livro"></div>
      </div>
      <div class="col-lg-4">
        <h3 id="tituloLivro" class="m-3">${data[0].nome}</h3>
        <p id="autorLivro" class="m-3">${data[0].autor}</p>
        <p id="generoLivro" class="m-3">${data[0].genero}</p>
        <p id="resumoLivro" class="m-3">${data[0].resumo}</p>
        <button id="verMaisLivro" class="btn-padrao rounded-pill m-3" onclick="vermais(${data[0].id_livro})">Ver mais</button>
      </div>`;

      let localLivro = document.getElementById("espacoRecomendacao");
      localLivro.innerHTML = livro;
        })
        .catch(error => console.error('Erro ao enviar os dados:', error));
}

function vermais(id) {
    window.location.href=`telaLivro.html?id=${id}`;
}

//teste para o futuro
function verificarLogin(){
    let dadosLogin = localStorage.getItem('.....');
    dadosLogin = JSON.parse(dadosLogin);

    if(dadosLogin[0].status="logado"){
        console.log("logado")
    }
}