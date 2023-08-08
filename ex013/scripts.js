for(var i = 10; i > 0; i--) {

    console.log(i);

    /* Lembrando que o "===" é usado para quando o valor da variável tem que ser totalmente igual, em todos os sentidos, incluindo o tipo de dado*/
    if(i === 5 ) {
        break;
    }
}

console.log("Deu o break");

var x = 10;

while(x < 100) {
    x += 10;

    if(x === 60 || x === 90) {

        console.log("CONTINUE");
        continue;
    }

    console.log("Testando continue" + x);

}