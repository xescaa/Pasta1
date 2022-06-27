// Higiene, Alimentação, Cuidados médicos e Lazer.

let amigoUm = ["sabonete", "papelhigiengico", "cotonete", "shampoo", "guardanapo"]
let amigoDois = ["picanha", "costela", "fraldinha", "maminha", "linguiça"]
let amigoTres = ["gaze", "dipirona", "agua", "antibiotico", "bandaid"]
let amigoQuatro = ["cerveja", "som", "bola", "anzol", "isca"]

let caixaDeSuprimentos = [amigoUm, amigoDois, amigoTres, amigoQuatro]

for(i = 0 ; i <= caixaDeSuprimentos.length ; i++){
    for( j=0 ; j <= caixaDeSuprimentos[i].length ; j++){
        if (caixaDeSuprimentos[i].length < 5){
            alert ("Quantidade errada de itens. Adicione até 5 itens." ) 

        }else if (caixaDeSuprimentos[i].length > 5){
            alert ("Quantidade errada de itens. O maximo são 5 itens" ) 
        }
        
    } 

}