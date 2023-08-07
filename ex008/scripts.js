var idade = 17;
var nome = "João";

if(nome == "João" && idade == 16) {
    console.log("O João pode entrar para a aula");
} else {
    console.log("Você não é o João");
}

if(1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if((1 == 1 && 3 > 2) && true) {
    console.log("Passou");
}

if((1 == 1 && 3 > 3) && true) {
    console.log("Passou");
} else if (nome == "João" && idade >= 14) {
    console.log("Aqui passou");
}