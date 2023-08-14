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
titleLogo.innerHTML = `CompreCerto`
headerMenu.appendChild(titleLogo)

const subTitle = document.createElement('h3');
subTitle.className = "subLogo";
subTitle.innerHTML = `G.m.a.o`;
headerMenu.appendChild(subTitle);


