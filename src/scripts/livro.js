function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

dadosAPI() ;
function dadosAPI(livroId) {
    console.log("data");
    fetch(`https://phaccess.vercel.app/livro?id=${livroId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let livro = `
    <div class="col-lg-5 col-md-7 m-5">
        <div class="row">
            <div class="col-lg-5">
                <img id="capaLivro" src="livro.jpg" style="width: 300px; height: 380px" class="sombras-nav borda-livro capa-livro">
            </div>
            <div class="col-lg-7">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 id="tituloLivro" class="m-3">Título:${data[0].nome}</h3>
                        <p id="autorLivro" class="m-3">Autor:${data[0].autor}</p>
                        <p id="generoLivro" class="m-3">Gênero:${data[0].genero}</p>  
                    </div>
                    <div class="col-lg-12 parte-1">
                        <div class="botao"></div>
                        <a style="--clr: #7808d0" class="button" href="telaDosReservados.html">
                            <span class="button__icon-wrapper">
                                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            Reservar
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section id="resumo-livro" class="mt-4">
            <h2 class="title-resumo">Breve resumo do livro</h2>
            <p class="description">
                <p id="resumoLivro" class="m-1">Resumo:${data[0].resumo}</p>
            </p>
        </section>
    </div>`;


      let localLivro = document.getElementById("espacoRecomendacao");
      localLivro.innerHTML = livro;
        })
        .catch(error => console.error('Erro ao enviar os dados:', error));
}

window.onload = () => {
    const params = getQueryParams();
    const livroId = params['id'];
    if (livroId) {
        dadosAPI(livroId);
    } else {
        console.error('Id do livro não encontrado na URL');
    }
};



