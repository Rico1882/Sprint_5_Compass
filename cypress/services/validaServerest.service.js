

export default class ValidaServerest {
    //Validações das ações que podemos realizar
    static validarBuscaDeUsuarios(resposta){
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')  
        expect(resposta.body.quantidade).to.be.greaterThan(0)
    }

    static validaLoginComSucesso(resposta){
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body).to.haveOwnProperty('authorization')
    }
}