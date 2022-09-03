
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

    }

