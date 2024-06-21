

function deslogar() {
    let usuarioAtual = localStorage.getItem('LoginAtual');

    if (usuarioAtual != null) {
        usuarioAtual = JSON.parse(usuarioAtual);
        if (usuarioAtual.status = "logado") {
            const usuario = {
                status: "deslogado",
                nome: usuarioAtual.nome,
                email: usuarioAtual.email
            };
            localStorage.setItem('LoginAtual', JSON.stringify(usuario));
            window.location.href="telaDeslogado.html";
        }
    }
}

function buscarDados(){

    let usuarioAtual = localStorage.getItem('LoginAtual');

    if (usuarioAtual != null) {
        usuarioAtual = JSON.parse(usuarioAtual);
    }

    fetch('https://phaccess.vercel.app/usuarioLivro', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(async data => {
          let nome = `Usuario`;
          for (i = 0; i < data.length; i++) {
            if(data[i].email == usuarioAtual.email){
                nome = data[i].nome;
            }
            
          }

          document.getElementById("user-name").textContent = nome;

          contarReservas();
        })
        .catch(error => console.error('Erro ao enviar os dados:', error));

}

function contarReservas(){

    let usuarioAtual = localStorage.getItem('LoginAtual');

    if (usuarioAtual != null) {
        usuarioAtual = JSON.parse(usuarioAtual);
    }

let url = `https://phaccess.vercel.app/emprestimo?email="${usuarioAtual.email}"`;

    fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    
        .then(response => response.json())
        .then(async data => {
          let contagem = data.length;
          

          document.getElementById("user-books").textContent = contagem;
        })
        
        .catch(error => console.error('Erro ao enviar os dados:', error));
}