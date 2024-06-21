function mostrarReservas() {

    let usuarioAtual = localStorage.getItem('LoginAtual');

    if (usuarioAtual != null) {
        usuarioAtual = JSON.parse(usuarioAtual);
    }

    let url = `https://phaccess.vercel.app/emprestimo?email=${usuarioAtual.email}`;

    document.getElementById("livros").innerHTML = `<h3>Nenhum emprestimo!</h3>`; 

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(async data => {
            let livros = `<h3>Nenhum emprestimo!</h3>`;
            
            for (i = 0; i < data.length; i++) {
                livros += `<div class="card-livro">
        <img src="data:image/png;base64,${data[i].capa}" alt="Nome do livro" class="capa-livro">
        <div class="info-livro">
          <h3>${data[i].nome}</h3>
          <p>Devolução: ${formatarData(data[i].data)} </p>
          <p>Situação: ${calcularDevolucao(data[i].data)}</p>
          <div>
            <button class="btn-padrao" onclick="devolverLivro(${data[i].id_livro},${usuarioAtual.email})">Devolver</button>
          </div>
        </div>
      </div>`;
                calcularDevolucao(data[i].data);
            }

            document.getElementById("livros").innerHTML = livros;

        })
        .catch(error => console.error('Erro ao enviar os dados:', error));
}

function calcularDevolucao(dataEmprestimo) {
    partes = dataEmprestimo.split('-')
    ano = partes[0]
    mes = partes[1]
    dia = partes[2]

    const dataAtual = new Date();
    const anoAt = dataAtual.getFullYear();
    const mesAt = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const diaAt = String(dataAtual.getDate()).padStart(2, '0');

    let estado = `Regular`;

    if (anoAt >= ano) {
        if (mesAt >= mes) {
            if (diaAt >= parseInt(dia) + 15) {
                estado = `Atrasado`;
            }
        }
    }

    return estado;
}

function formatarData(dataEmprestimo) {
    partes = dataEmprestimo.split('-')
    ano = partes[0]
    mes = partes[1]
    dia = partes[2]


    return `${parseInt(dia) + 15}-${mes}-${ano}`;
}

function devolverLivro(id, email) {
    fetch(`https://phaccess.vercel.app/emprestimo`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            email: email
        })
    })
        .then(response => response.json())
        .then(async data => {
            alert("Livro devolvido!");
            document.getElementById("livros").innerHTML = ``;
            mostrarReservas();
        })
        .catch(error => console.error('Erro ao enviar os dados:', error));
}