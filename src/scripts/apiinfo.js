var arr= [];

document.addEventListener("DOMContentLoaded", consumirAPI);

        function consumirAPI() {
            const url = 'https://phaccess.vercel.app/';

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    mostrarDados(data);
                })
                .catch(error => {
                    console.error('Erro ao consumir a API:', error);
                });
        }

        function mostrarDados(data) { //acervo
            const apiDataDiv = document.getElementById('api-data');
            apiDataDiv.innerHTML = ''; 

            Object.keys(data).forEach(key => {
                const card = document.createElement('div');
                card.className = 'card col-4';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = data[key].nome;

                const cardImage = document.createElement('img');
                cardImage.className = 'card-img-top';
                cardImage.src = 'livro.jpg';
                cardImage.style.height = '500px';
                

                const cardContent1 = document.createElement('p');
                cardContent1.className = 'card-text';
                cardContent1.innerText = `ID do Livro: ${data[key].id_livro}`;

                const cardContent2 = document.createElement('p');
                cardContent2.className = 'card-text';
                cardContent2.innerText = `Autor: ${data[key].autor}`;

                const cardContent3 = document.createElement('p');
                cardContent3.className = 'card-text';
                cardContent3.innerText = `Gênero: ${data[key].genero}`;

                const cardContent4 = document.createElement('p');
                cardContent4.className = 'card-text';
                cardContent4.innerText = `Resumo: ${data[key].resumo}`;

                const cardButton = document.createElement('button');
                cardButton.className = 'btn btn-secondary';
                cardButton.innerText = 'Mostrar Detalhes';
                cardButton.style.height = '40px';
                cardButton.style.marginTop = '10px'
                
                cardButton.addEventListener('click', () => {
                    
                    addItem(data[key].nome, data[key].id_livro, data[key].autor, data[key].genero, data[key].resumo);
        
                    
                    const livroId = data[key].id_livro;
    window.location.href = `telaLivro.html?id=${livroId}`;
                });

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardImage);
                cardBody.appendChild(cardButton);
                card.appendChild(cardBody);
                
                apiDataDiv.appendChild(card);
            });
        }

        

        document.addEventListener("DOMContentLoaded", consumirAP);

        function consumirAP() { //tela inicial
            const url = 'https://phaccess.vercel.app/';

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    mostrarDado(data);
                })
                .catch(error => {
                    console.error('Erro ao consumir a API:', error);
                });
        }
       
        function mostrarDado(data) {
            const apiDataDiv = document.getElementById('api-datas');
            apiDataDiv.innerHTML = ''; 
        
            for (let i = 0; i < 3; i++) {
                const key = Object.keys(data)[i]; 
        
                const card = document.createElement('div');
                card.className = 'card col-2';

                card.style.marginLeft = '50px';
                card.style.marginTop = '30px';
                card.style.marginBottom = '30px';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';


                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = data[key].nome;

                const cardImage = document.createElement('img');
                cardImage.className = 'card-img-top';
                cardImage.src = 'livro.jpg';
                cardImage.style.height = '200px';
                

                const cardContent1 = document.createElement('p');
                cardContent1.className = 'card-text';
                cardContent1.innerText = `ID do Livro: ${data[key].id_livro}`;

                const cardContent2 = document.createElement('p');
                cardContent2.className = 'card-text';
                cardContent2.innerText = `Autor: ${data[key].autor}`;

                const cardContent3 = document.createElement('p');
                cardContent3.className = 'card-text';
                cardContent3.innerText = `Gênero: ${data[key].genero}`;

                const cardContent4 = document.createElement('p');
                cardContent4.className = 'card-text';
                cardContent4.innerText = `Resumo: ${data[key].resumo}`;
        

        
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardImage);

                card.appendChild(cardBody);
                        
                apiDataDiv.appendChild(card);
            }
        }

        document.addEventListener("DOMContentLoaded", consumirAPIS);

        function consumirAPIS() {
            const url = 'https://phaccess.vercel.app/';

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    mostrarDadosPerfil(data);
                })
                .catch(error => {
                    console.error('Erro ao consumir a API:', error);
                });
        }
       
      

        function mostrarDadosPerfil() { //telaperfil
            const apiDataDiv = document.getElementById('api-dates');
            apiDataDiv.innerHTML = '';
        
            const storedData = localStorage.getItem('meuArr'); 
            if (storedData) {
                const data = JSON.parse(storedData);
        
                data.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'card col-3';
                    card.style.marginLeft = '50px';
                    card.style.marginTop = '30px';
                    card.style.marginBottom = '30px';
        
                    const cardBody = document.createElement('div');
                    cardBody.className = 'card-body';
        
                    const cardTitle = document.createElement('h5');
                    cardTitle.className = 'card-title';
                    cardTitle.innerText = item.nome; 
        
                    const cardImage = document.createElement('img');
                    cardImage.className = 'card-img-top';
                    cardImage.src = 'livro.jpg';
                    cardImage.style.height = '350px';
        
                    const cardContent1 = document.createElement('p');
                    cardContent1.className = 'card-text';
                    cardContent1.innerText = `ID do Livro: ${item.id_livro}`;
        
                    const cardContent2 = document.createElement('p');
                    cardContent2.className = 'card-text';
                    cardContent2.innerText = `Autor: ${item.autor}`;
        
                    const cardContent3 = document.createElement('p');
                    cardContent3.className = 'card-text';
                    cardContent3.innerText = `Gênero: ${item.genero}`;
        
                    const cardContent4 = document.createElement('p');
                    cardContent4.className = 'card-text';
                    cardContent4.innerText = `Resumo: ${item.resumo}`;
        
                    cardBody.appendChild(cardTitle);
                    cardBody.appendChild(cardImage);
                    cardBody.appendChild(cardContent1);
                    cardBody.appendChild(cardContent2);
                    cardBody.appendChild(cardContent3);
                    cardBody.appendChild(cardContent4);
                    card.appendChild(cardBody);
        
                    apiDataDiv.appendChild(card);
                });
            }
        }
        
        window.onload = mostrarDadosPerfil;
        
        function addItem(nome, id_livro, autor, genero, resumo) {
            let arr = [];
        
            if (localStorage.meuArr) {
                arr = JSON.parse(localStorage.getItem('meuArr'));
            }
        
    
            const livroExistente = arr.find(item => item.id_livro === id_livro);
        
            if (!livroExistente) {
                let novoItem = {
                    nome: nome,
                    id_livro: id_livro,
                    autor: autor,
                    genero: genero,
                    resumo: resumo
                };
        
                arr.push(novoItem);
        
                localStorage.setItem('meuArr', JSON.stringify(arr));
            } else {
                
            }
        }
        

      
        
        
        