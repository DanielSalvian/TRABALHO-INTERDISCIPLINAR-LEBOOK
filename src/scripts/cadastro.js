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


function carregarDadosUsuario() {
  const usuarioLogado = JSON.parse(localStorage.getItem('LoginAtual'));

  if (usuarioLogado) {
    fetch('https://phaccess.vercel.app/usuarioLivro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {

        return response.json();
      })
      .then(data => {
        console.log('Dados recebidos da API:', data);
        console.log('Usuário logado:', usuarioLogado);


        const usuario = data.find(user => user.email === usuarioLogado.email && user.senha === usuarioLogado.senha);



        const userInfoDiv = document.getElementById('userInfo');
        if (userInfoDiv) {
          userInfoDiv.innerHTML = `
              <h2>Informações do Usuário</h2>
              <p><strong>Nome:</strong> ${usuarioLogado.nome}</p>
              <p><strong>Email:</strong> ${usuarioLogado.email}</p>
             
            `;
        }

      })
      .catch(error => {
        console.error('Erro ao buscar dados do usuário:', error);
      });
  } else {
    console.error('Nenhum usuário logado encontrado no localStorage.');
  }
}

window.onload = carregarDadosUsuario;

function validarNome() {
  const nome = document.getElementById('nomeCadastro').value;

  if (!isNaN(nome)) {
    alert("Nome não pode conter números!");
  }
}

function validarCPF() {
  const cpf = document.getElementById('cpfCadastro').value;

  if (isNaN(cpf)) {
    alert("CPF contém apenas números!");
  }
}

function validarEmail() {
  const email = document.getElementById('emailCadastro').value;

  
}




