"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentInputType = exports.Comment = undefined;

var _graphql = require("graphql");

var Comment = exports.Comment = new _graphql.GraphQLObjectType({
    //Nome do tipo que estamos criando
    name: "Comment",
    //Descrição do nosso tipo
    description: "The datails from a post's comments",
    //Campos que o nosso tipo possui
    fields: {
        // Uma variável do tipo inteiro
        id: { type: _graphql.GraphQLInt },
        // Uma variável do tipo string
        name: { type: _graphql.GraphQLString },
        // Uma variável do tipo string
        content: { type: _graphql.GraphQLString }
    }
});

//Objeto do tipo Input que será usado para executar mutations em nosso código.
var CommentInputType = exports.CommentInputType = new _graphql.GraphQLInputObjectType({
    //Nome do nosso input
    name: "CommentInput",
    //Campos
    fields: {
        //Aqui nenhum campo deve ser nulo e todos são do tipo String.
        name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        postId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
    }
});