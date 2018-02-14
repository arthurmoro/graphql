'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Post = require('../types/Post');

var _FakeDatabase = require('../../FakeDatabase');

//Imports


exports.default = {
    //Nome da query que irá aparecer na documentação
    posts: {
        //Tipo da variável. A que ela está referenciada?
        //Ao tipo Post, neste caso
        type: new _graphql.GraphQLList(_Post.Post),
        //Descrição do que a query se trata.
        description: "Get a list of recent posts",
        //Nenhum argumento é necessário pois aqui será retornardo uma lista
        //de todos os posts
        args: {},
        //Resolver da query.
        //A função que a query irá executar para obter os dados necessários.
        //Pode ser a chamada de uma função, de uma API, leitura de um arquivo.
        resolve: function resolve() {
            return _FakeDatabase.fakeDatabase.getBlogPosts();
        }
    }
};