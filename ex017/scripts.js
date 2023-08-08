let x = 5; // funciona igual a 'var x = 5;'

const y = 10;

x = 12;

console.log(x);

console.log("const " + y);

console.warn("O comando 'const' como o nome indica ele funciona como um constante, ou seja, a variável que eu criar com ele não vai poder ser alterada posteriormente, mas a lógica dos escopos funciona para ela também. Se você criar outra variável com o mesmo nome da costante e com valor diferente, mas dentro de outro escopo vai funcionar tranquilo")

if(true) {

    let x = 20;

    console.log(x);

    const y = 50;

    console.log("const if " + y);
}

console.log(x);

if(20 > 10) {

    const y = 100;

    console.log("const if 2 " + y);
}

console.warn("Aparentemente com o uso de 'let' os comandos de bloco podem funcionar como escopos locais");

for(let x = 0; x < 10; x++) {
    console.log(x);
}