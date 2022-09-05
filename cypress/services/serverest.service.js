import Factory from '../fixtures/factory'

const URL_USUARIOS  = '/usuarios'
const URL_lOGIN     = '/login'
const URL_PRODUTOS  = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export default class Serverest {

    static buscarUsuarios(){
        return cy.rest('GET', URL_USUARIOS)
    }

    static buscarUsuariosParaLogin() {
        cy.request (URL_USUARIOS).then(res => {
            cy.wrap({
                email: res.body.usuarios[0].email,
                password: res.body.usuarios[0].password
            }).as('usuarioLogin')
                
            })
    }
    static logar(usuario){
        return cy.rest('POST', URL_lOGIN, usuario)
    }

    static salvarBearer(resposta){
        Cypress.env('bearer', resposta.body.authorization.slice(7))
       
    }

    //produtos//

    static buscarProdutos(){
        return cy.rest('GET', URL_PRODUTOS)
    }

    static cadastrarProdutoComSucesso() {
       let produto = Factory.gerarProduto()
       return cy.request({
            method: 'POST',
            url: URL_PRODUTOS,
            body: produto,
            failOnStatusCode: true,
            auth: {
                bearer: Cypress.env("bearer")
            }
        })
        
    }

    }

