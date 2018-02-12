import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLInputObjectType, GraphQLNonNull } from "graphql";
import { Author } from './Author';
import { Comment } from './Comment';
import { fakeDatabase } from '../../FakeDatabase';

export const Post = new GraphQLObjectType({
    name: "Post",
    description: "The datails from a blog post",
    fields: {
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        author: {
            type: Author,
            resolve: post => fakeDatabase.getAuthor(post.author)
        },
        comments: {
            type: Comment,
            resolve: post => fakeDatabase.getCommentsForPost(post.id)
        }
    }
});


export const PostInputType = new GraphQLInputObjectType({
    name: "PostInput",
    fields: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        auhtor: {type: new GraphQLNonNull(GraphQLString)},
    }
})