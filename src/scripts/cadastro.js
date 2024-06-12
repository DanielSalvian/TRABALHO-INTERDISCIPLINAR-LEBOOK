function enviarDados() {
  const nome = document.getElementById('nomeLivro').value;
  const cpf = document.getElementById('autorLivro').value;
  const resumo = document.getElementById('resumoLivro').value;
  const genero = document.getElementById('generoLivro').value;

  if (nome && autor && resumo && genero) {
    fetch('https://phaccess.vercel.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        autor: autor,
        resumo: resumo,
        genero: genero
      })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        get();
        document.getElementById('nomeLivro').value = "";
        document.getElementById('autorLivro').value = "";
        document.getElementById('resumoLivro').value = "";
        document.getElementById('generoLivro').value = "";
      })
      .catch(error => console.error('Erro ao enviar os dados:', error));
  } else {
    alert("Preencha o nome, autor, resumo e genero para adicionar!");
  }
}