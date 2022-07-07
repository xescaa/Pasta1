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


function cashMachine(saque, fixo, vendas){

    let salarioTotal = calculateSalary(fixo, vendas)
    

    if (salarioTotal < saque){
        return "sem dinheiros"
    }
    let saldoAtual = salarioTotal - saque
    let nota200 = saque / 200
    if(saque % 200 === 0 ){
        return (
        `Notas sacadas: ${nota200} notas de R$200 
         Saldo Atual: ${saldoAtual}`)
    }
    
    let nota100 = 0
    let nota50 = 0
    let nota20 = 0
    let nota10 = 0
    let nota5 = 0
    let nota2 = 0
    


}
