function trabalhoEmDobro(array) {
    
       const newDataFiltered = []
        
        array.filter(livro =>{
         
            let livroJaIncluido = newDataFiltered.filter(element =>{
               return element.title === livro.title
            } )
            if (livroJaIncluido.length === 0){
            newDataFiltered.push(livro)
           }
        })

    return newDataFiltered
    
  }
  console.log(trabalhoEmDobro(dataBase))

//   function trabalhoEmDobro(array) {
    
//     const newDataFiltered = []
     
//      array.forEach(livro =>{
      
//         if (!newDataFiltered.filter(element => element.title === livro.title).length){
//              newDataFiltered.push(livro)
//         }
//      })

//  return newDataFiltered
 
// }
// console.log(trabalhoEmDobro(dataBase))

// -------------------------------------------------------------------

function zerosNoFim(listaDeLivros) {
  
    let array1 = []
   
   
    listaDeLivros = listaDeLivros.filter(element => {
      if (element.inventory == 0){
         array1.push(element)
      } else { 
        return element
      }
    })
    listaDeLivros.push(...array1)
    console.log(array1, listaDeLivros)
  
  }
  zerosNoFim(dataBase)



