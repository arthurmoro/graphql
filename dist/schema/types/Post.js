'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostInputType = exports.Post = undefined;

var _graphql = require('graphql');

var _Author = require('./Author');

var _Comment = require('./Comment');

var _FakeDatabase = require('../../FakeDatabase');

var Post = exports.Post = new _graphql.GraphQLObjectType({
    name: "Post",
    description: "The datails from a blog post",
    fields: {
        id: { type: _graphql.GraphQLInt },
        title: { type: _graphql.GraphQLString },
        content: { type: _graphql.GraphQLString },
        author: {
            type: new _graphql.GraphQLList(_Author.Author),
            resolve: function resolve(post) {
                return _FakeDatabase.fakeDatabase.getAuthor(post.author);
            }
        },
        comments: {
            type: new _graphql.GraphQLList(_Comment.Comment),
            resolve: function resolve(post) {
                return _FakeDatabase.fakeDatabase.getCommentsForPost(post.id);
            }
        }
    }
});

//Objeto do tipo Input que será usado para executar mutations em nosso código.
var PostInputType = exports.PostInputType = new _graphql.GraphQLInputObjectType({
    //Nome do nosso input
    name: "PostInput",
    //Campos
    fields: {
        //Todos os nossos campos são do tipo string e não devem ser nulo
        title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        auhtor: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
});