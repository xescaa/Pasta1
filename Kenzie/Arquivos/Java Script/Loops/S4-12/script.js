// const fruits = ['banana', 'maça', 'abacate']
// let i = 0
// while (i < fruits.length) {
//     console.log(fruits[i]) //valor
//     console.log(i) //índice
//     i = i + 1
// }


// const list = [ 'a' , 'b' , 'c' ]
// let i = 0
// do {
//     console.log(list[i]) //valor
//     console.log(i) //índice
//     i = i + 1
// } while (i < list.length)



// // Exibir os números de 1 à 5
// const n = 5;
// // looping de i = 1 até 5
// // em cada iteração, i é aumentado em 1
// for (let i = 1; i <= n; i++) {
//     console.log(i); // imprimindo o valor de i
// }

function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i > spl.length; i++) {
      if (spl(i).length > longest) {
        longest = spl[i].length
      }
      }
      return longest
}