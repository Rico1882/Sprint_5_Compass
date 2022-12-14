

const {faker} = require('@faker-js/faker');

export default class Factory{

    static gerarProduto(){
        return{
            "nome": faker.commerce.productName(),
            "preco": faker.datatype.number(),
            "descricao":faker.commerce.productDescription(),
            "quantidade": faker.datatype.number()
         }
    }
    static gerarInteiroAleatorio(qtd=0){
        return faker.datatype.number(qtd)
    }

    static criarCarrinho(){
        return{
        "idProduto": faker.finance.currencyCode(),
        "quantidade": faker.datatype.number()
        }
    }
}