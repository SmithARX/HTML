function enviarWhats(event){
        event.preventDefault()

        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;
        const telefone = '5531984920141'

        const texto = `Olá! Me chamo ${nome}, é lhe enviei a seguinte mensagem:\n ${mensagem}`
        const msgFormatada = encodeURIComponent(texto)

        const url = `https://wa.me/${telefone}/?text=${msgFormatada}`

        window.open(url, '_blank')
    }

const cards = document.querySelectorAll(".card-projeto");
const modal = document.getElementById("modal-projeto");
const btnFechar = document.getElementById("fechar-modal");

// Elementos internos do modal
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const modalImg1 = document.getElementById("modal-img-1");
const modalImg2 = document.getElementById("modal-img-2");
const modalGithub = document.getElementById("modal-github");
const modalDeploy = document.getElementById("modal-deploy");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        // Lê os atributos data-* do card clicado
        modalTitulo.textContent = card.dataset.titulo;
        modalDescricao.textContent = card.dataset.descricao;
        modalImg1.src = card.dataset.imgPrincipal;
        
        // Se o projeto tiver uma segunda imagem, mostra; se não tiver, esconde a segunda tag img
        if (card.dataset.imgSecundaria) {
            modalImg2.src = card.dataset.imgSecundaria;
            modalImg2.style.display = "block";
        } else {
            modalImg2.style.display = "none";
        }

        modalGithub.href = card.dataset.github;
        modalDeploy.href = card.dataset.deploy;

        // Abre o modal e trava a rolagem da página de trás
        modal.classList.add("ativo");
        document.body.style.overflow = "hidden";
    });
});

// Função para fechar o modal
function fecharModal() {
    modal.classList.remove("ativo");
    document.body.style.overflow = "auto"; // Libera a rolagem da página
}

btnFechar.addEventListener("click", fecharModal);

// Fecha ao clicar na área escura fora do pop-up
modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        fecharModal();
    }
});

// Fecha ao apertar a tecla ESC
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modal.classList.contains("ativo")) {
        fecharModal();
    }
});

elementoDoTitulo.innerHTML = titulo.replace('\\n', '<br>');
