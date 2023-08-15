// ======HEADER MENU=======

const menu = document.getElementById('menuLateral');
const headerMenu = document.createElement('header');
headerMenu.className = "menu-header";
menu.appendChild(headerMenu);

const imagem = document.createElement('img');
imagem.src = './assets/images/Group.svg';
imagem.className = "logoImg";
headerMenu.appendChild(imagem);

const titleLogo = document.createElement('h1');
titleLogo.className = "logoCc";
titleLogo.innerHTML = `CompreCerto`;
headerMenu.appendChild(titleLogo);

const subTitle = document.createElement('h3');
subTitle.className = "subLogo";
subTitle.innerHTML = `G.m.a.o`;
headerMenu.appendChild(subTitle);

// =============================================

// ======NAV MENU======

const navMenu = document.createElement('nav');
navMenu.className = "navMenu"
menu.appendChild(navMenu);

const buttonInicio = document.createElement('button');
buttonInicio.className = "navButtons buttonInico";
buttonInicio.innerHTML += ` <i class="material-symbols-outlined">home</i>
<span>Ínicio</span>`;
navMenu.appendChild(buttonInicio);

const buttonProdutos = document.createElement('button');
buttonProdutos.className = "navButtons buttonProdutos";
buttonProdutos.innerHTML += ` <i class="material-symbols-outlined">folder</i>
<span>Produtos</span>`;
navMenu.appendChild(buttonProdutos);

const buttonFavoritos = document.createElement('button');
buttonFavoritos.className = "navButtons buttonFavoritos";
buttonFavoritos.innerHTML += ` <i class="material-symbols-outlined">star</i>
<span>Favoritos</span>`;
navMenu.appendChild(buttonFavoritos);

// ==============================================
