var altura = 183;

if (altura >= 150) {
    console.log("Você pode ir nesse brinquedo.");
} else (altura < 150)
    console.log("Você não tem altura o suficiente para ir nesse brinquedo.")

var possuiCarro = 0;

if (possuiCarro) {
    console.log("O usuário já pode andar de carro.");
}

var possuiCarro2 = 1;

if (possuiCarro2) {
    console.log("O usuário já pode andar de carro.");
}

console.warn("Variáveis definidas com o valor '0' seram consideradas como 'false' para o comando 'if', e como já vimos anteriormente se o 'if' for falso ele não vai ser rodado. Também vale resalta que o valor '1' é considerado positivo e por isso ele vai funcionar normalmente com o 'if'. Então fique atento ao valor das variáveis quando você for utilizar 'if', e de preferencia fique atento a tudo o tempo todo hehe.");

var nome = "Pedro";

if(nome == "Nathan") {
    console.log("O seu nome é Nathan.");
} else (nome != "Nathan")
    console.log("Você não é o Nathan.");

console.warn("Cuidado na hora de usar os simbolos para fazer comparações no 'if'. Por exemplo se você vai comparar nomes então você não pode usar o comando 'var nome = 'ciclano'; if(nome = 'fulaninho' {console.log('Seu nome é fulaninho.');}. Se você fizer um comando como esse você vai estar dizendo para o script que ele deve mudar a variável nome de 'ciclano' para 'fulaninho' e ainda assim imprimir na tela a mensagem dizendo 'Seu nome é fulaninho'. Para fazer a comparação se o nome é igual a 'ciclano' você deveria usar '==', porque quando você usa apenas o '=' você esta atribuindo um valor aquela variável.");

var nome = "Pedro";

if(nome == "Cleitin da ZN") {
    console.log("Cleitin é a cabeça da minha caceta.");
} else if(nome == "Pedro"){
    console.log("Fala Pedro meu bom.")
}  else if(nome == "Xavier"){
    console.log("Fala Professor X, como é que tu ta meu querido?.")
}

else {
    console.log("Acho que ainda não te conheço");
}

var idade = 19;

if(idade >= 20) {
    console.log("Você pode entrar na festa.");
} else if (idade <= 19) {
    console.log("Você não pode entrar na festa.");
}

var numero = 'cinco';

if(numero === '5') {
    console.log("O número é 5.");
}

if(numero !== 5) {
    console.log("Não é o número 5 do tipo number.");
}

console.warn("É muito comum usar o '===' pelo fato dele conferir o tipo de dado também, então acaba passando um pouco mais de confiabilidade.");