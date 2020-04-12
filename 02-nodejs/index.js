/*
00 - Obter um usuário
01 - Obter o número de telefone de um usuário a partir de seu Id
02 - Obter o endereço do usuário pelo Id
*/

function getUser(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Michael Kyle',
            birthDate: new Date()
        })
    }, 1000)
}

function getPhone(idUser, callback) {
    setTimeout(() => {
        return callback(null,  {
            phone: '44028922',
            ddd: 11
        })
    }, 2000);
}

function getEndress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Baker Street',
            number: 221
        })
    }, 2000);
}

function resolveUser(erro, user) {
    Console.log('Usuário', user)
}

getUser(function resolveUser(error, user) {
    if(error) {
        console.error('Erro no Usuário', error)
        return;
    }
    getPhone(user.id, function resolvePhone(error1, phone) {
        if(error1) {
            console.error('Erro no telefone', error)
            return;
        }
        getEndress(user.id, function resolveEndress(error2, endress) {
            if(error2) {
                console.error('Erro no Endereço', error)
                return;
            }

            console.log(`
            Nome: ${user.nome},
            Endereco: ${endress.rua},${endress.number}
            Telefone: (${phone.ddd})${phone.phone}
            `)
        })
    })
})

