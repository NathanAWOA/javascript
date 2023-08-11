// criar um elemento

var el = document.createElement("h3");

el.classList = ("testando-classe");

var texto = document.createTextNode("este é o texto do h3");

var body = document.querySelector("body");

el.appendChild(texto);

body.appendChild(el);

console.log(el);

// selecionar o elemento que quero trocar 

var title = document.querySelector("#title");

console.log(title);

// selecionar o pai do el

var pai = title.parentNode;

// trocar os elementos

pai.replaceChild(el, title); /* Obs: primeiro vem qual você vai por no lugar e em segundo qual vai sair*/