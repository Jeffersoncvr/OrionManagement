var lista = [
    {
        id:"01",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"02",
        nome:"Bolo de morango",
        preco:"R$ 100,00",
        producao:"6,800KG",
        custo:"R$ 350,00",
        totalDeSaida:"4,400KG",
        totalVendas:"R$ 565,00",
        totalDeLucro:"R$ 410,00"
    },
    {
        id:"03",
        nome:"Bolo de milho",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"04",
        nome:"Bolo de cenoura",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"05",
        nome:"panofe",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"06",
        nome:"pão",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"07",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"08",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"09",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"10",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"11",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"12",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    },
    {
        id:"13",
        nome:"Bolo de chocolate",
        preco:"R$ 80,00",
        producao:"5,800KG",
        custo:"R$ 30,00",
        totalDeSaida:"4,200KG",
        totalVendas:"R$ 525,00",
        totalDeLucro:"R$ 210,00"
    }
]

var table_element = document.getElementById('lista')
var tamanhoLista = lista.length
for(let i=0;i<tamanhoLista;i++){
    produtos(lista[i])
}

function produtos(item){
    var conteudo = document.createElement('tr')
    var mudelo = `
    <td>${item.id}</td>
    <td>${item.nome}</td>
    <td>${item.preco}</td>
    <td>${item.producao}</td>
    <td>${item.custo}</td>
    <td>${item.totalDeSaida}</td>
    <td>${item.totalVendas}</td>
    <td>${item.totalDeLucro}</td>
    `
    conteudo.innerHTML = mudelo
    table_element.appendChild(conteudo)
}