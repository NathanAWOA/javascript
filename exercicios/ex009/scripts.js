/*

var = ;

console.log("");

if() {
    console.log("");
}

else if () {
    console.log("");
}

*/

var nome = "João";
var idade = 13;

if(nome == "João" || idade > 14) {
    console.log("Pode entrar na aula.");
} else {
    console.log("Não pode entrar na aula.");
}

if(nome == "Pedro" && 15 > 20 || 10 == 10) {
    console.log("testando");
} 

if((nome == "Pedro" || 15 > 20) && 10 == 10) {
    console.log("testando");
} else {
    console.log("Não entrou")
}

if((nome == "Pedro" || 30 > 20) && 10 == 10) {
    console.log("entrou");
} else {
    console.log("Não entrou");
}

if(nome == "Pedro" || (30 > 20 && 10 == 10)) {
    console.log("entrou");
} else {
    console.log("Não entrou");
}

console.warn("Quando se usa o '||' no código basta apenas uma das variáveis ser considerada como true para o código funcioar. Mas tome cuidado porque o comando é lido da esqueda para a direita ou seja se o comando '&&' estiver depois do '||' o código vai precisar que todas as variaveis deem um resultado true");

console.warn("Também vale resaltar que asso, como é na matemática o que estiver entre parentese vai ser resolvido primeiro e isso pode alterar e muito o resultado dos seus scripts.")