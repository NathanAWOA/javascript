// seleciona o elemento

var title = document.querySelector("#title");

var subtitle = document.querySelector("#subtitle");

// adiciona o estilo

title.style.color = "red";

console.warn("Cuidado porque as alterações de estilo feitas aqui podem sobreescrever as estilizações feitas no CSS da sua página. Então não tenho certeza ainda, mas acredito que seja melhor fazer só alterações pontuais por aqui e sempre dar preferencia para fazer estilizações num geral la no CSS mesmo.")

// background-color 

title.style.backgroundColor = "gray";

// adicionar vários estilos

subtitle.style.cssText = "color: green; background-color: pink; font-size: 50px";