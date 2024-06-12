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
        window.location.href='telaLogado.html'
      })
      .catch(error => console.error('Erro ao enviar os dados:', error));
  } else {
    alert("Preencha corretamente todos os campos!");
  }
}