'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Post = require('../types/Post');

var _FakeDatabase = require('../../FakeDatabase');

//Imports

exports.default = {
    addPost: {
        //Nome da mutation que aparecerá na Documentação
        type: _Post.Post,
        //Descrição da Mutation
        description: "Add new blog post",
        args: {
            post: { type: _Post.PostInputType }
        },
        //Função que será executada para que a mutation ocorra.
        resolve: function resolve(parent, _ref) {
            var post = _ref.post;
            return _FakeDatabase.fakeDatabase.addPost(post);
        }
    }
};