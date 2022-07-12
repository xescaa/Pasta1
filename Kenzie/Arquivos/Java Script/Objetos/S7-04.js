let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  }

const tagUl = document.querySelector(".lista")


    const tagLi = document.createElement("li")
    const nome = document.createElement("span")
    nome.innerText = produto.nome
    const valor = document.createElement("span")
    valor.innerText = produto.valor
    const liquidacao = document.createElement("a")
    liquidacao.innerText = "Em liquidação"
    const distribuidor = document.createElement("span")
    distribuidor.innerText = produto.distribuidor

    tagUl.appendChild(tagLi)
    tagLi.appendChild(nome)
    tagLi.appendChild(valor)
    tagLi.appendChild(liquidacao)
    tagLi.appendChild(distribuidor)



// liquidacao.addEventListener("click", function(verificacao))

//   preventDefault()