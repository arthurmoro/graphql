'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _FakeDatabase = require('../../FakeDatabase');

var _Comment = require('../types/Comment');

//Imports

exports.default = {
    //Nome da mutation que aparecerá na Documentação
    addComent: {
        // Tipo que está sendo inserido
        type: _Comment.Comment,
        //Descrição da Mutation
        description: "Add new post comment",
        //Argumentos que a mutation recebe
        args: {
            //Type é o tipo que a variavel recebe. Neste caso, ela está referenciada no arquivo ../types/Comment
            comment: { type: _Comment.CommentInputType }
        },
        //Função que será executada para que a mutation ocorra.
        resolve: function resolve(parent, _ref) {
            var comment = _ref.comment;
            return _FakeDatabase.fakeDatabase.addNewComment(comment);
        }
    }
};