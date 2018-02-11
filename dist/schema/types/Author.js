"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Author = undefined;

var _graphql = require("graphql");

var _Post = require("./Post");

var _FakeDatabase = require("../../FakeDatabase");

var Author = exports.Author = new _graphql.GraphQLObjectType({
    name: "Author",
    description: "All details of an author on the website",

    fields: function fields() {
        return {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
            name: { type: _graphql.GraphQLString },
            email: { type: _graphql.GraphQLString },

            posts: {
                type: new _graphql.GraphQLList(_Post.Post),
                resolve: function resolve(source) {
                    return _FakeDatabase.fakeDatabase.getPostsOfAuthor(source.id);
                }
            }
        };
    }
});