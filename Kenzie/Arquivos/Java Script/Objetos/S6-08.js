let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
  }

 
function qualIdade(){
    return 2022 - pessoa.anoNascimento + " anos."
}
  console.log(qualIdade())


function normalizaDado(){
    return pessoa.nome[0].toUpperCase()
}
    console.log(normalizaDado())


function criandoListaDeUsuarios(pessoa){
  let listaDeUsuarios = []
  let nomeDeUsuario = ""   

    listaDeUsuarios.push[pessoa]
    console.log(listaDeUsuarios)
}
