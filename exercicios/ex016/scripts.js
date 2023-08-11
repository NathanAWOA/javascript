var x = 1;

var y = 3;

console.log(x, y);

function teste(z) {

    var z = 0;

    console.log(z);

    console.log(x);
}

teste();


console.warn("Se uma variável estiver no escopo global eu posso acessa-la e usa-la em outros escopos, porém variáveis que estejam dentro de escopos locais eu não posso acessa-las e usa-las em outros escopos, ou seja elas ficam mais restritas.");

function testando(z) {
    var z = 5;

    console.log(z);
}

testando();


var z = 7;

console.log(z);

console.warn("Variáveis em escopos locais também tem a caracteristica de eu poder criar outra variável com mesmo nome e com valores diferentes, e ainda assim não dar problema, desde que as variáveis estajam em escopos diferentes, mas se você for fazer isso eu acho que seria melhor criar-la dentro de outro escopo local, porque se você não perceber e criar duas variáveis com o mesmo nome no escopo global elas vão se sobreescrever e vai dar ruim.");

if(true) {
    var p = 1;

}

console.log(p);

console.warn("Cuidado com o 'if' porque aparentemente ele não esta se caracterizando como escopo local.");