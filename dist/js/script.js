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

function ಠ_ಠ281(ಠ_ಠ284, ಠ_ಠ285) {
    const container = document.getElementById(ಠ_ಠ285);
    container.ಠ_ಠ283 = ಠ_ಠ284.map(item =>
        `<div class="item">
            <img src="${item.imagem}" alt="${item.nome}" class="img">
            <div class="item-details">
                <span class="item-name">${item.nome}</span>
                <span class="item-price">${item.preco}</span>
            </div>
        </div>`
    ).join('');
}

ಠ_ಠ281(conteudoUmItens, 'conteudo-UM-itens');
ಠ_ಠ281(conteudoDoisItens, 'conteudo-DOIS-itens');
ಠ_ಠ281(conteudoTresItens, 'conteudo-TRES-itens');

const menuImages = document.querySelectorAll('.img');

// Função para verificar se o conteúdo do acordeão é maior que a altura da tela
function ಠ_ಠ282() {
    var ಠ_ಠ279 = $('.accordion-item').height();
    var ಠ_ಠ280 = $(window).height();

    if (ಠ_ಠ279 > ಠ_ಠ280) {
        $('footer').css('margin-top', ಠ_ಠ279 - ಠ_ಠ280);
    } else {
        $('footer').css('margin-top', 0);
    }
}
