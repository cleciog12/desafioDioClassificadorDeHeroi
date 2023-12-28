let nome = "Nemo"
let heroi = 5001
let nivel = ""

if (heroi <= 1000) {
    nivel  = "Ferro"
}else if(heroi>= 1001 && heroi <=2000){ nivel = "Bronze"
}else if(heroi>= 2001 && heroi <=5000){ nivel = "Prata"
}else if(heroi>= 5001 && heroi <=7000){ nivel = "Ouro"
}else if(heroi>= 7001 && heroi <=8000){ nivel = "Platina"
}else if(heroi>= 8001 && heroi <=9000){ nivel = "Ascendente"
}else if(heroi>= 9001 && heroi <=10000){ nivel = "Imortal"
}else {nivel = "Radiante"}

console.log("O Herói de nome ",nome, " está no nível de ", nivel)
