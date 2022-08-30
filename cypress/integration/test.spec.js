it('Deve realizar uma requisição Get a rota /usuários', () => {
    cy.request('/usuarios').then(res => {
        expect(res).to.be.a('object')
        cy.log(JSON.stringify(res))
    })
} )