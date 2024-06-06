const conteudoUmItens = [
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" },
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" },
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" }
];

const conteudoDoisItens = [
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" },
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" },
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" }
];

const conteudoTresItens = [
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" },
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" },
    { nome: "Pão de queijo", preco: "R$ 1,00", imagem: "img/dolli.jpg" },
    { nome: "Pão frances", preco: "R$ 0,25", imagem: "img/pao frances.jpg" },
    { nome: "Coxinha", preco: "R$ 2,50", imagem: "img/coxinha.jpg" }
];

function adicionarItensAoMenu(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item =>
        `<div class="item">
            <img src="${item.imagem}" alt="${item.nome}" class="img">
            <div class="item-details">
                <span class="item-name">${item.nome}</span>
                <span class="item-price">${item.preco}</span>
            </div>
        </div>`
    ).join('');
}

adicionarItensAoMenu(conteudoUmItens, 'conteudo-UM-itens');
adicionarItensAoMenu(conteudoDoisItens, 'conteudo-DOIS-itens');
adicionarItensAoMenu(conteudoTresItens, 'conteudo-TRES-itens');

const menuImages = document.querySelectorAll('.img');

// Função para verificar se o conteúdo do acordeão é maior que a altura da tela
function ajustarFooter() {
    var alturaAcordeao = $('.accordion-item').height();
    var alturaJanela = $(window).height();

    if (alturaAcordeao > alturaJanela) {
        $('footer').css('margin-top', alturaAcordeao - alturaJanela);
    } else {
        $('footer').css('margin-top', 0);
    }
}
