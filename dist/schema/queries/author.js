'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _FakeDatabase = require('../../FakeDatabase');

var _Author = require('../types/Author');

//Imports


exports.default = {
    author: {
        //Tipo da variável. A que ela está referenciada?
        //Ao tipo Author, neste caso.
        type: _Author.Author,
        //Descrição do que a query se trata.
        description: "Get a author by id",
        //Argumentos que a query recebe
        args: {
            //A query recebe um "id" do tipo STRING que não deve ser nulo
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
        },
        //Resolver da query.
        //A função que a query irá executar para obter os dados necessários.
        //Pode ser a chamada de uma função, de uma API, leitura de um arquivo.
        resolve: function resolve(parent, _ref) {
            var id = _ref.id;

            //Retornando os dados buscados.
            return _FakeDatabase.fakeDatabase.getAuthor(id);
        }
    }
};