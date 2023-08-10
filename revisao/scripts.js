// JSON - JavaScript Object Notation

const dog = {
    name: 'Shark',
    age: 10,
}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)

console.log(obj)

const jsonErrado = '{"name": "Teste", "surname": "Testando"}'

const obj2 = JSON.parse(jsonErrado)

console.log(obj2)

// arrow function

console.warn("A seguir usaremos arrow function");
const myArrowFunction = (a, b) => {
    return a + b
}

console.log(myArrowFunction(2, 5));

const mySimpleArrowFunction = (a, b) => a + b

console.log(mySimpleArrowFunction(5, 5));

// classes

console.warn("A seguir usaremos classes");

class Product {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é R$${this.price}`
    }
}

const socks = new Product('Meia branca', 10.99)
const tshirt = new Product('Camisa branca', 20.00)

console.log(socks.name)
console.log(socks.price)

console.log(tshirt.name)
console.log(tshirt.price)
console.log(tshirt.productDetails())

//herança 

class SuperProduct extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }

    showAdjective(adjective) {
        return `O ${this.name} é muito ${adjective}`
    }

    //static
    static sayHello() {
        console.log('Hello')
    }
}

const tenis = new SuperProduct('Tênis vermelho', 59.9, '42')

console.log(tenis.name)
console.log(tenis.price)
console.log(tenis.size)

console.log(tenis.showAdjective('bom'))

SuperProduct.sayHello()