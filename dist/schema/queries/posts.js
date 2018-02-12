'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Post = require('../types/Post');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
    posts: {
        type: new _graphql.GraphQLList(_Post.Post),
        description: "Get a list of recent posts",
        args: {},
        resolve: function resolve() {
            return _FakeDatabase.fakeDatabase.getBlogPosts();
        }
    }
};