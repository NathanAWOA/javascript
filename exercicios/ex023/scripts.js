//tag

var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis);
console.log(lis[2]);

// id

var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

// class

var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);

// querySelectorAll

var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);

var itensQuery = document.querySelectorAll('#lista li');

console.log(itensQuery);

var itensQuery = document.querySelectorAll('#lista2 li');

console.log(itensQuery);

// querySelector

var itensQuery = document.querySelector('#lista li');

console.log(itensQuery);

var primeiraLista = document.querySelector('ul');

console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');

console.log(span);

// selecionar elemento

var title = document.querySelector('#title');

console.log(title);

// innerHTML

title.innerHTML = "testando o texto alterado.";

// textContent -> mais utilizado, recomendado e performatico

var subtitle = document.querySelector('#subtitle');

console.log(subtitle);

subtitle.textContent = "testando o 'textContent'.";

// inserir o elemento no body

var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("Este é o conteúdo do paragráfo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById("container");

console.log(container);

var el = document.createElement('span');

el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el);

// remover elemento filho

var lixo = document.querySelector("#container");

var p = document.querySelector("#container p");

container.removeChild(p);

// removendo o elemento

var subtitle = document.querySelector("#subtitle");

subtitle.remove();

// adicionando elemento dentro de elemento

var el2 = document.createElement("div");

el2.classList = "div-criada";

console.log(el2);

var container2 = document.querySelector("#container");

container2.appendChild(el2);

// insertBefore

var el3 = document.createElement("div");

el3.classList = "div before";

var el4 = document.querySelector("#container .div-criada");

console.log(el4);

container.insertBefore(el3, el4);