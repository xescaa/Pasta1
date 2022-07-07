function calculateSalary(salarioFixo, vendas){

let comissao3 = 0
let comissao5 = 0

        if (vendas <= 1200){
           comissao3 = vendas * 0.03
           console.log(salarioFixo + comissao3)

        } else{
            comissao5 = ((vendas - 1200) * 0.05) + (1200 * 0.03)
            console.log(salarioFixo + comissao5)

        }
    

    
}
calculateSalary(1200 , 1200)