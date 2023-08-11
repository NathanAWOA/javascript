//sintaxe
/*
function primeiraFuncao() {

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui!")
            resolve()
        }, 1000)
    })

}

async function segundaFuncao() {

    console.log("Inicio")

    await primeiraFuncao()

    console.log("Terminou")

}

segundaFuncao()
*/

//pratico 

function getUser(id) {

    return fetch(`http://regres.in/api/users?id=${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))
}

async function showUserName(id) {

    try {
        const user = await getUser(id)

        console.log(`O nome do usuário é: ${user.data.first_name}`)
    } catch(err) {
        console.log(`Erro: ${err}`)
    }


    
}

showUserName(3)