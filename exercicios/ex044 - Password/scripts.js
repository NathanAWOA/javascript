// selector

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// functions

// gerar letras minusculas
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// gerar letras maiusculas
const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// gerar números
const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

// gerar simbolos
const getSymbols = () => {
    const symbols = "(){}[]?;:!@#$%&/*-+.,=<>|"
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// geração das senhas
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols) => {

    let password = "";

    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbols
    ]

    // gerar valores aleatorios
    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;

        });
    }

    // impedir que tenha mais de 10 caracteres
    password = password.slice(0, passwordLength);
    
    // exibir a div da senha aleatoria
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;

};

// events

// butão de geração de senhas
generatePasswordButton.addEventListener("click", () => {
    
    
    generatePassword(
        
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbols

        );
});