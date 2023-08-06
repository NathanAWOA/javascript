var numero = 5;

console.log(numero);
console.log(typeof numero);

var float = 5.32; 

console.log(float);
console.log(typeof float);

console.warn("O comando typeof é usado para descobrir o tipo do dado");

var textoComNumero = "523";

console.log(textoComNumero);
console.log(typeof textoComNumero);

console.warn("Cuidado para não achar que você esta fazendo um script com um tipo de dado e la na frente você descobre que ao invés de Number é String, igual no exemplo acima.");

console.log(NaN);
console.log(typeof NaN);
console.log(typeof +Infinity);
console.log(typeof -Infinity);

var nome = "Nathan";
var sobrenome = "Paiva";

var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);

console.log(typeof "asd");

console.log(nomeCompleto);


document.write("Ele disse 'Olá' ");

document.write('Ele disse "Olá" ');

var verdadeiro = true;

console.log(verdadeiro);
console.log(typeof verdadeiro);

console.log(typeof true);
console.log(typeof false);

var falso = false;

console.log(falso);
console.log(typeof falso);

var nome = null;

console.log(nome);

nome = "Nathan";

console.log(nome);

var nome = null;
var idade;

console.log(nome);
console.log(idade);

nome = "Nathan";

console.log(nome);

// HOISTING

console.log(sexo);

var sexo = "masculino";

var obj = {
    nome: "Nathan",
    idade: 24,
    profissao: "Vagabundo por natureza",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

obj.nome = "Thiago";

console.log(obj.nome);
console.log(obj);

obj.graduacao = true;

console.log(obj);

