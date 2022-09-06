/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /produtos da API Serverest', () => {

    it('Deve buscar todos os produtos cadastrados', () => {
        Serverest.buscarProdutos().then(res => {
            ValidaServerest.validarBuscaDeProdutos(res)
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
    it('Deve postar um novo produto com suscesso', () => {
        
                Serverest.cadastrarProdutoComSucesso().then( res => {
                    ValidaServerest.validarCadastroDeProdutoComSucesso(res)  
            })  
            
        
        })
    })
})    
