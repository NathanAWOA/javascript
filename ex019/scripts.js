// length

var nome = "Nathan";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// indexOf

console.log(nome[2]);

var frase = "isquibiri da da da";

console.log(frase.indexOf("da"));

// slice

var da = frase.slice(10, 12);

console.log(da);

// raplace

var novaFrase = frase.replace("da", "uepa");

console.log(novaFrase);

// toLowerCase e toUpperCase

var frase = "Esse negócio de programação ta terminando de derreter meus ultimos neuronios.";

console.log(frase.toLowerCase());

var frase2 = "Esse negócio de programação ta terminando de derreter meus ultimos neuronios.";

console.log(frase2.toUpperCase());

// trim

var nome = "     Cleitin Vacilão";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScritp, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf

var frase3 = "Eu quero a última palavra teste desta frase de teste";

console.log(frase3.indexOf("teste"));
console.log(frase3.lastIndexOf("teste"));