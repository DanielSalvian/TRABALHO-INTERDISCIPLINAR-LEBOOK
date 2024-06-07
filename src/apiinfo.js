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

        function mostrarDados(data) {
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
                cardImage.src = 'imgaltura.jpg';
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

                    alert(
                        
                        `
ID do Livro: ${data[key].id_livro}
Autor: ${data[key].autor}
Gênero: ${data[key].genero} 
Resumo: ${data[key].resumo}`);
                });

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardImage);
                cardBody.appendChild(cardButton);
                card.appendChild(cardBody);
                
                apiDataDiv.appendChild(card);
            });
        }