console.log("Antes do if");

if(true) {
    console.log("Testando o if");
}

console.log("Depois do if");

console.warn("Para o comando 'if' tudo dentro das chaves é um bloco de comando, e tudo que estiver dentre parenteses é a condição. Por isso que se fizermos por exemplo o seguinte comando 'if(false) {console.log('Testando o if');}' o comando sera ignorado na hora de rodar ele no DevTools.")

var idade = 16;
var idadeMinima = 18;

if(idade > idadeMinima) {
    console.log("Pode tirar carteira de motorista."); //não apareceu a mensagem, não sei bem o pq
}



if(idade = 15) {
    console.log("Precisa esparar 3 anos ainda.");

}


else (idade < 18) 
    console.log("Não pode tirar carteira de motorista.");


if (idade >= 18) {
    console.log("Pode tirar carteira de motorista.");
} else {
    console.log("Não pode tirar carteira de motorista.");
}