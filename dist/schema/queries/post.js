'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Post = require('../types/Post');

var _FakeDatabase = require('../../FakeDatabase');

//Imports


exports.default = {
    //Nome da query (Aparecerá na documentação)
    post: {
        //Tipo da variável. A que ela está referenciada?
        //Ao tipo Post, neste caso
        type: _Post.Post,
        //Descrição do que a query se trata.
        description: "Get a single post by id",
        //Argumentos que a query recebe
        args: {
            //A query recebe um "id" do tipo STRING que não deve ser nulo
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
        },
        //Resolver da query.
        //A função que a query irá executar para obter os dados necessários.
        //Pode ser a chamada de uma função, de uma API, leitura de um arquivo.
        resolve: function resolve(parent, _ref) {
            var id = _ref.id;

            return _FakeDatabase.fakeDatabase.getBlogPost(id);
        }
    }
};