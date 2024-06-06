var nomeHeroi = prompt("Qual o nome do seu herói? : ")
var nivelHeroi = prompt("Digite a quantidade de xp do seu herói: ")
var classHeroi 

if (nivelHeroi < 1000){
    classHeroi = 'Ferro'
} else if (nivelHeroi > 1001 && nivelHeroi < 2000){
    classHeroi = 'Bronze'
} else if (nivelHeroi > 2001 && nivelHeroi < 5000){
    classHeroi = 'Prata'
} else if (nivelHeroi > 5001 && nivelHeroi < 7000){
    classHeroi = 'Ouro'
} else if (nivelHeroi > 7001 && nivelHeroi < 8000){
    classHeroi = 'Platina'
} else if (nivelHeroi > 8001 && nivelHeroi < 9000){
    classHeroi = 'Ascendente'
} else if (nivelHeroi > 9001 && nivelHeroi < 10000){
    classHeroi = 'Imortal'
} else {
    classHeroi = 'Radiante'
}

print('O Herói de nome,' + nomeHeroi, 'está no nível de ' + classHeroi)