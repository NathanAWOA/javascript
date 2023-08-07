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

var x = 0;

while(x < 5) {
    console.log("Testando repetição" + x);

    //incrementador

    x++;
}

var arr = ['testando', 'estrutura' , 'de', 'repetição', 'while'];
var y = 0;

while(y <= 4) {
    console.log(arr[y]);

    y++;
}

var palavra = "Nathan";
var i = 0;

while(i <= 5) {
    console.log(palavra[i]);

    i+= 1;
}

console.warn("Vamos ver agora sobre operadores de atribuição");

var x = 1;
var y = 2;

//soma 

console.log(x = x + y);

console.log(x += y);

console.warn("Fique atento porque nesse caso aqui que fizemos, ambas as operações somaram certinho, porem se você prestar atenção você percebera que a segunda soma foi feita se baseando no resultado da primeira");

//subtração 

console.log(x -= y);

//multiplicação

console.log(x *= y);

//divisão

console.log(x /= y);

//loops
console.log(x++);
console.log(x--);

while(x <= 100) {
    console.log(x);

    x *= 2;
}

var j = 5;


while( x > 0) {
    console.log(x)

    x -= j;
}

/*
console.warn("");
*/