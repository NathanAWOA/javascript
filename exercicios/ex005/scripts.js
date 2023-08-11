var arr= [5, "Nathan", true, {teste: 1, teste: 2}]; //obsj =>{}

console.log(arr);

var arr2= [2,3,4,5,6];

console.log(arr2);

console.log(arr[1]);
console.log(arr[0]);


console.warn("Observe que os arrays são feitos com [] e que o primeiro item da lista é o item 0, assim sendo se você fizer um comando pedindo para por o segundo item na tela você precisa usar 'console.log(arr[1]);'. Tome cuidado para não se confundir lá na frente.");

var arr = [10];

console.log(arr);

var arr= [5, "Nathan", true, {teste: 1, teste: 2}];

arr[4]= 10;

console.log(arr);

console.warn("Muito importante também tomar cuidado na hora de acrescentar novos itens ao seu array. se você simplesmente fizer o comando 'var arr = [10];', você não vai ter acrescentado o item '10' no seu array e sim sobreescrito toda a sua lista. Quando você quiser acrescentar um novo item o que você precisa fazer é saber quantos itens já estão na sua lista, por exemplo se sua lista tem 3 itens então você precisa indicar no comando que o item vai estar na posição quatro. Por exemplo 'arr[4] = 10;'")

arr[0] = "Teste";

console.log(arr);

console.log(typeof arr);