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
  let objetoTratado = pessoa.nomeDeUsuario.toLowerCase()
  pessoa.nomeDeUsuario = objetoTratado
  listaDeUsuarios.push(pessoa)
  
    console.log(listaDeUsuarios)
}
criandoListaDeUsuarios(pessoa)


function calculaVale(pessoa){
  let valorDoLitro = 6.99
  //CRIAR VARIAVEL PARA O VALE COMBUSTIVEL?
  // let calcValeCombustivel = pessoa.valeCombustivel
  if (pessoa.temCarro == true){
    let calcValeCombustivel = parseInt(pessoa.distanciaDoTrabalho) * valorDoLitro * 0.7
   
    pessoa.valeCombustivel = calcValeCombustivel
    
    
    // console.log(calcValeCombustivel)
    
  }
  let transf = pessoa.valeCombustivel.toString()
 
  console.log("R$" + transf )
  
  }
  calculaVale(pessoa)

let endereco = {
  cidade: 'Curitiba',
  logradouro: 'Rua Dali',
  numero: 10,
  tipo:[]
  }
  

function adicionarTipo(endereco){
  let varcasa = "Casa"
  endereco.tipo.push(varcasa)
    console.log(endereco.tipo)

  }
  adicionarTipo(endereco)


  function inserirPessoa(endereco, pessoa){

    pessoa.endereco.push(endereco)
    console.log(pessoa)

  
  }
  inserirPessoa(endereco, pessoa)