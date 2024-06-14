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

dadosAPI();
function dadosAPI(livroId) {
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
    <div class="col-lg-5 col-md-7 mt-5 ms-5">
        <div class="row">
            <div class="col-lg-5">
                <img id="capaLivro" src="data:image/png;base64,${data[0].capa}" style="width: 300px; height: 380px" class="sombras-nav borda-livro capa-livro">
            </div>
            <div class="col-lg-7">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 id="tituloLivro" class="m-3">${data[0].nome}</h3>
                        <p id="autorLivro" class="m-3">Autor: ${data[0].autor}</p>
                        <p id="generoLivro" class="m-3">Gênero: ${data[0].genero}</p>  
                    </div>
                    <div class="col-lg-12 parte-1 p-3">
                        <div class="botao"></div>
                        <button onclick="reservar()" class="btn-padrao rounded-pill" style="width:200px;">Reservar </button>
                       
                    </div>
                </div>
            </div>
        </div>
        <section id="resumo-livro" class="mt-2">
            <h2 class="">Breve resumo do livro</h2>
                <p id="resumoLivro" class="">${data[0].resumo}</p>

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

function reservar() {
    const params = getQueryParams();
    const livroId = params['id'];

    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // getMonth() retorna de 0 a 11
    const dia = String(dataAtual.getDate()).padStart(2, '0');

    const dataFormatada = `${ano}-${mes}-${dia}`;
    

    let usuarioAtual = localStorage.getItem('LoginAtual');

    if (usuarioAtual != null) {
        usuarioAtual = JSON.parse(usuarioAtual);

        fetch('https://phaccess.vercel.app/emprestimo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: dataFormatada,
                email: usuarioAtual.email,
                id: livroId
            })
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                //window.location.href = 'telaLogado.html'
            })
            .catch(error => console.error('Erro ao enviar os dados:', error));
    }

}

