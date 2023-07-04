const buttonOpen = document.querySelector("#abrir-popup") // Colocar o botão que for ser pressionado aq pelo id para abrir o popup
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("#botao-fechar") // Colocar o botão que for ser pressionado aq pelo id para fechar
const buttonSave = document.querySelector("#botao-salvar") // Colocar o botão que for ser pressionado aq pelo id para salvar

buttonOpen.onclick = function () {
    modal.showModal() //poder fechar popup com o ESC, caso queira fechar somente com o botao usar modal.show()
}

buttonClose.onclick = function () {
    modal.close()
}

buttonSave.onclick = function () { //mudar o código de salvar dps
    modal.close()
}