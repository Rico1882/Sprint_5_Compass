/// <reference types="cypress" />

import Factory from '../fixtures/factory'
import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /Carrinhos da API Serverest', () => {

    it('Deve buscar todos os carrinhos cadastrados na serverest', () => {
        Serverest.buscarCarrinhos().then( res => {
           cy.contractValidation(res, "get-carrinhos", 200)
            ValidaServerest.validarBuscaDeCarrinhos(res) 
        })
        })
    })

    context('Logar com sucesso', () => {
        beforeEach('logar', () => {
            Serverest.buscarUsuariosParaLogin()
            cy.get('@usuarioLogin').then( usuario => {
                    Serverest.logar(usuario).then( res=> {
                    ValidaServerest.validaLoginComSucesso(res)
                    Serverest.salvarBearer(res)
                })
        })
    })  
    
    it.only('Deve Criar um novo carrinho com sucesso', () => {        
        Serverest.cadastrarCarrinhoComSucesso().then( res => {
            ValidaServerest.validarCarrinhoComSucesso(res)  
        })  
    })

    it ('Deve deletar um carrinho com sucesso', () => {
            Serverest.deletarCarrinhoCadastrado().then( res => {
            cy.contractValidation(res, "delete-carrinhos-concluir-compra", 200)
            expect(res.body.message).to.be.equal('Nenhum registro excluído')
    })    

})
})
