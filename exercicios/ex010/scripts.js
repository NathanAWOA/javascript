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

if(!true) {
    console.log("Passou");
}

if(!false) {
    console.log("Passou");
}

console.warn("Quando você utiliza o comando '!' ele vai negar o que vem depois dele. Por exemplo se você estover fazendo um 'if' e colocar um '!true' isso sera igual a um 'false' e se você colocar um '!false' vai ser igual a um 'true'. Então nesse exemplo é como se o '!true' significasse 'não verdadeiro' que é a mesma coisa que dizer que é falso, e no '!false' é a mesma coisa, ele se torna basicamente um 'não falso' que é a mesma coisa que ser verdadeiro.");

var nome = "Thiago";

if(!(nome == "Nathan")) {
    console.log("Ok");
}

console.warn("Seguindo a mesma lógica de antes quando eu uso no meu 'if' o comando '!nome == ...' o que eu estou dizendo é basicamente 'se o nome não for igual a...'.")