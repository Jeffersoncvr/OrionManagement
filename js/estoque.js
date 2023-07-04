var listaEstoq = [
    {
        id:"01",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"02",
        nome:"Bolo de morango",
        preco:"R$ 100,00",
        producao:"6,800KG"
    },
    {
        id:"03",
        nome:"Bolo de milho",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"04",
        nome:"Bolo de cenoura",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"05",
        nome:"panofe",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"06",
        nome:"pão",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"07",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"08",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"09",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"10",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"11",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"12",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG"
    },
    {
        id:"13",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG"
    }
]

var table_element = document.getElementById('listaEstoque')
var tamanhoLista = listaEstoq.length
for(let i=0;i<tamanhoLista;i++){
    produtos(listaEstoq[i])
}
function produtos(item){
    var conteudo = document.createElement('tr')
    var Item = `
    <td>${item.id}</td>
    <td>${item.nome}</td>
    <td>${item.producao}</td>
    <td>${item.preco}</td>
    <td><button id="visualizar" class="Botao-Visu">Visualizar</button></td>
    `
    conteudo.innerHTML = Item
    table_element.appendChild(conteudo)
}

const openBtn = document.querySelector("#visualizar");
const closeBtn = document.querySelector("#close-visualizar");
const modal = document.querySelector("dialog");

openBtn.onclick = function (){
    modal.showModal()
}

closeBtn.onclick = function (){
    modal.close()
}