function saldoVitorias (qntdVitorias, qntdDerrotas){
    return qntdVitorias - qntdDerrotas
}
let resultado = saldoVitorias(131, 40)
let rank = ""

switch (true) {
    case (resultado <= 10):
        rank = "Ferro"
        break
    case (resultado >= 11 && resultado <= 20):
        rank = "Bronze"
        break
    case (resultado >= 21 && resultado <= 50):
        rank = "Prata"
        break
    case (resultado >= 51 && resultado <= 80):
        rank = "Ouro"
        break
    case (resultado >= 81 && resultado <= 90):
        rank = "Diamante"
        break
    case (resultado >= 91 && resultado <= 100):
        rank = "Lendário"
        break
    case (resultado >= 101):
        rank = "Imortal"
        break
}

console.log("O Herói tem um saldo de: " + resultado + " e está no nível: " + rank)