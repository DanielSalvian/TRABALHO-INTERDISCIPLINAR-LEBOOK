function enviarDados() {
  const nome = document.getElementById('nomeCadastro').value;
  const cpf = document.getElementById('cpfCadastro').value;
  const email = document.getElementById('emailCadastro').value;
  const senha = document.getElementById('senhaCadastro').value;

  if (nome && cpf && email && senha) {
    fetch('https://phaccess.vercel.app/usuarioLivro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
      })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        window.location.href = 'telaLogado.html'
      })
      .catch(error => console.error('Erro ao enviar os dados:', error));
  } else {
    alert("Preencha corretamente todos os campos!");
  }
}

function login() {
  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  let condicao = false;
  let aux = 0;

  if (email && senha) {
    fetch('https://phaccess.vercel.app/usuarioLivro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        for (i = 0; i < data.length - 1; i++) {
          if (email == data[i].email && senha == data[i].senha) {
            condicao = true;
            aux = i;
          }
        }
        if (condicao) {
          const usuario = {
            status: "logado",
            nome: data[aux].nome,
            email: data[aux].email
          };
          localStorage.setItem('LoginAtual', JSON.stringify(usuario));
          window.location.href = 'telaLogado.html'
        } else {
          alert("Dados inválidos... Tente novamente.");
        }
      })
      .catch(error => console.error('Erro ao encontrar os dados:', error));
  } else {
    alert("Preencha corretamente todos os campos!");
  }
}