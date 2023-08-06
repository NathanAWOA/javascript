var teste = 1;

teste = 'Nathan';

console.log(teste);

console.warn("Mudar o valor da variável até que não tem tanto problema, já mudar o tipo de variável pode dar ruim. Porque fica confuso para todos que forem utilizar o código.");

var nome = "Nathan";

console.log(nome);

console.warn("Quando for definir uma variável é aconselhavel usar o comando 'var', para evitar problemas no decorrer do projeto.");

var $nome = 'ASD';
var _nome = 'ASD';

console.log($nome);
console.log(_nome);

var nome7 = "Jão";

console.log(nome7);

console.warn("Fique atento também nos caracteres especiais que você utiliza na hora de definir uma variável. Caracteres como '@'por exemplo não dão certo, inclusive o DevTools mandaria a mensagem avisando que a sintaxe é invalida. Os unicos caracteres especiais que você pode utilizar para definir uma variável são '$' e '_' (underline). Números também dão problema na hora de definir variáveis, mas isso só vale para os números que vem no começo da variável se o número vier no final da variável não havera problemas.");

var meuPrimeiroNome = "Nathan";

console.log(meuPrimeiroNome);

var meusobrenome = "Paiva";

console.log(meusobrenome);

console.warn("Como você pode ver da para definir uma variável usando apenas letras minusculas, porém isso piora a legibilidade do script para outros programadores que possam vir lidar com o seu script, e até mesmo pode complicar a legibilidade para você, afinal de contas muitas vezes os códigos e scripts acabam ficando bem extensos. Então é bem comum os programadores usarem o camelcase, que nada mais é do que a primeira palavra do nome da variável começar com letra minuscula e as demais palavras que fizerem parte do nome teream a primeira letra maiuscula. Ex: 'meuPrimeiroNome'.");

let testando = 1;

const ola = 2;

console.log(testando);
console.log(ola);

var meuNome;

console.log(meuNome);

meuNome = "Nathan";

console.log(meuNome);

console.warn("Como você pode ver logo acima, se você apenas declarar uma variável, mas não especificar o 'valor' dela o script não vai dar certo e o DevTools printara a mensagem de 'undefined'. Então fica esperto na hora de declarar variáveis.")