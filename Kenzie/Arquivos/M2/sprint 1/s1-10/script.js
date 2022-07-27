function oddString () {
    
    
    words.forEach()
}

function palavraEImpar(arrayDePalavras){
    
    let newWords = []
    for (let i = 0; i< words.length; i++){
        if (words[i].length %2 != 0){

          let temporaria =  words[i].replace(words[i], words[i] + "_")
            newWords.push(temporaria)
        
        }else {
            newWords.push(words[i])
        }
    }
    console.log(newWords)
}
palavraEImpar(words)
//percorrer o array de strings
//encontrar as strings impares
//criar a logica com reduce para adicionar o "_"
//pushar com replace ou splice?


function noBrackets (palavras) {
    
    for (let i = 0; i< palavras.length; i++){
    let encontrandoBrackets = palavras[i].indexOf("(" , ")")
    console.log(encontrandoBrackets)
    }
}
noBrackets(words)
// [4, 6, 7, 10]
