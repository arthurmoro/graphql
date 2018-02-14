"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Author = undefined;

var _graphql = require("graphql");

var _Post = require("./Post");

var _FakeDatabase = require("../../FakeDatabase");

var Author = exports.Author = new _graphql.GraphQLObjectType({
    //Nome do tipo que estamos criando
    name: "Author",
    //Descrição do nosso tipo
    description: "All details of an author on the website",
    //Campos que o nosso tipo possui
    fields: function fields() {
        return {
            //id: todo id deve ser não nulo e do tipo String
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
            //name: variável do tipo String
            name: { type: _graphql.GraphQLString },
            //email: variável do tipo String
            email: { type: _graphql.GraphQLString },
            //Post variável do tipo Post que retornará uma lista de posts.
            //Posts irá fazer um request no nosso banco de dados procurando posts do id do autor
            //e retornará através do resolver.
            posts: {
                type: new _graphql.GraphQLList(_Post.Post),
                resolve: function resolve(source) {
                    return _FakeDatabase.fakeDatabase.getPostsOfAuthor(source.id);
                }
            }
        };
    }
});