// setTimeOut

console.log("Antes do setTimeOut");

setTimeout(function() {

    console.log("Testando o setTimeOut");

}, 2000);

console.log("Depois do setTimeOut");

// setInterval

setInterval(function(){

    console.log("Testando setInterval")

}, 1000);

//cearTimeOut

var x = 0;

var myTimer = setTimeout(function() {

    console.log("O 'x' é 0");

}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log("O 'x' passou de 0");
}

//clearInterval

var myInterval = setInterval(function(){

    console.log("Imprimindo interval");

}, 500);

setTimeout(function(){

    console.log("Não precisa mais repetir!");
    clearInterval(myInterval);

}, 1500);