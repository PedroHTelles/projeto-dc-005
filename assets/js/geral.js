
//header-menu-mob
var menuIcon = document.querySelector('#menu-icon')
var menuMob = document.querySelector('.header-menu-mob')

menuIcon.addEventListener('click', aparecerMenu)
function aparecerMenu() {
    if (menuMob.style.display == 'none') {
        menuMob.style.display = 'block'
        menuIcon.innerText = 'close'
    } else {
        menuMob.style.display = 'none'
        menuIcon.innerText = 'menu'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
    menuMob.style.display = 'none'
    menuIcon.innerText = 'menu'
    }
}



// retornando valor do input(id="ifilpreco")
var precoAtual = document.getElementById('ifilpreco').value

var preco = document.getElementById('preco')

preco.innerText = Number(precoAtual).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


function mostrarPreco() {
    var precoAtual = document.getElementById('ifilpreco').value

    preco.innerText = Number(precoAtual).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

