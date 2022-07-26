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


