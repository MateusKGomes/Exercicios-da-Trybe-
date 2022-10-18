const btnSend = document.getElementById('btn-send');
const inputProduto = document.querySelector('#input-produto');
const listaCompras = document.querySelector('#lista-de-compras');
const btnClear = document.querySelector('#btn-clear');


const colocarItemLista = (text) => {
const createLi = document.createElement('li')
createLi.classList.add('item-lista');
createLi.innerHTML = text;
listaCompras.appendChild(createLi);
}

const adicionaItemStorage = () => {
    const itens = document.getElementsByClassName('item-lista');
    const arrItens = [];
    for (const item of itens) {
        arrItens.push(item.innerText);
    }
    localStorage.setItem('itens', JSON.stringify(arrItens));
}

const criarItem = () => {
const inputValue = inputProduto.value;
colocarItemLista(inputValue);
inputProduto.value = '';
adicionaItemStorage();
}
btnSend.addEventListener('click', criarItem);

 const retornaStorage = () => {
    if(localStorage.itens){
    const arrItens = JSON.parse(localStorage.getItem('itens'));
    for (let index = 0; index < arrItens.length; index++) {
        colocarItemLista(arrItens[index]);
        }
    }
}
retornaStorage();
