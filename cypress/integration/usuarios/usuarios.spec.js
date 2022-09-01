/// <reference types="cypress" />

describe('Casos de teste sobre a rota /usurios da API Serverest', () => {

    it('Deve buscar todos os usuarios cadastrados na serverest', () => {
        cy.request('/usuarios').then( res => {
            expect(res).to.be.a('object')
            expect(res.body.quantidade).to.be.a('number')  
            expect(res.body.quantidade).to.be.greaterThan(0) 
        })      
    })

    it('Não deve postar um novo usuário administrador existente', () => {
        cy.request({
            method: 'POST',
            url: '/usuarios',
            failOnStatusCode: false,
            body: {
                "nome": "Fulano da Silva",
                "email": "beltrano@qa.com.br",
                "password": "teste",
                "administrador": "true"
            }
        }).then( res => {
            expect(res).to.be.a('object')
            expect(res.body.message).to.be.a('string')  
            expect(res.body.message).to.be.eq('Este email já está sendo usado')
        })      
    })
  })