atualizarCapa();

function atualizarCapa() {
    const inputElement = document.getElementById('inputImagem');

    inputElement.addEventListener('change', (event) => {
        const file = event.target.files[0];

        converterParaBase64(file, (base64Image) => {
            // console.log(base64Image);
            imagem = "data:image/png;base64," + base64Image
            document.getElementById("capaLivro").src = `${imagem}`
        });
    });
}

function converterParaBase64(file, callback) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const img = new Image();

        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const dataURL = canvas.toDataURL('image/png');
            const base64Image = dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');

            callback(base64Image);
        };

        img.src = event.target.result;
    };

    reader.readAsDataURL(file);
}

function adicionarLivro() {
    const capa = document.getElementById("capaLivro").src;

    const nome = document.getElementById('nomeLivro').value;
    const autor = document.getElementById('autorLivro').value;
    const genero = document.getElementById('generoLivro').value;
    //const disponiveis = document.getElementById('disponiveisLivro').value;
    const resumo = document.getElementById('resumoLivro').value;
    
    if (nome && autor && genero && resumo && capa) {
      fetch('https://phaccess.vercel.app/livros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          autor: autor,
          genero: genero,
          resumo: resumo
        })
      })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => console.error('Erro ao enviar os dados:', error));

        fetch('https://phaccess.vercel.app/capa', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              valor: capa
            })
          })
            .then(response => response.json())
            .then(data => {
              alert("Livro Inserido");
              window.location.href="telaAdicionarLivro.html"
            })
            .catch(error => console.error('Erro ao enviar os dados:', error));
    } else {
      alert("Preencha corretamente todos os campos!");
    }
  }