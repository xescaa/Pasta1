let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  }

const tagUl = document.querySelector(".lista")

const tagLi = document.createElement("li")
    tagLi.classList.add("li")

const nome = document.createElement("span")
    nome.innerText = produto.nome

const valor = document.createElement("span")
    valor.innerText = produto.valor



const valorDesconto = document.createElement("Span")
    valorDesconto.innerText = "Hoje apenas: R$2100"
    valorDesconto.classList.add("desconto")

const distribuidor = document.createElement("span")
    distribuidor.innerText = produto.distribuidor

let botao = document.createElement("button")
    botao.classList.add("botaoDesconto")
    botao.innerText = "Em liquidação"

    tagUl.appendChild(tagLi)
    tagLi.appendChild(nome)
    tagLi.appendChild(valor)
    tagLi.appendChild(botao)
    tagLi.appendChild(valorDesconto)
    tagLi.appendChild(distribuidor)

function toggle(elemento, classname){
    if (elemento.classList.contains(classname)){
        elemento.classList.remove(classname)
    
    } else {
        elemento.classList.add(classname)
    }
}

botao.addEventListener("click", (e)=> {

    toggle(e.target, "novoDesconto")

    
})

//   preventDefault()