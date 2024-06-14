

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