var vitoria = prompt("Digite a quantidade de vitórias: ")
var derrota = prompt("Digite a quantidade de derrotas: ")
var elo

function saldo(){
    saldos = vitoria - derrota    

}

function elo(){
    if (vitoria < 10){
        elo = 'ferro'
    } else if (vitoria > 11 && vitoria < 20){
        elo = 'bronze'
    } else if (vitoria > 21 && vitoria < 50){
        elo = 'prata'
    } else if (vitoria > 51 && vitoria < 80){
        elo = 'ouro'
    } else if (vitoria > 81 && vitoria < 90){
        elo = 'Diamante'
    } else if (vitoria > 91 && vitoria < 100){
        elo = 'Lendário'
    } else {
        elo = 'imortal'
    }
}


print("O Heroi tem de saldo" + saldos + " está no nível de " + elo)