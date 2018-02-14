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
            type: new GraphQLList(Author),
            resolve: post => fakeDatabase.getAuthor(post.author)
        },
        comments: {
            type: new GraphQLList(Comment),
            resolve: post => fakeDatabase.getCommentsForPost(post.id)
        }
    }
});

//Objeto do tipo Input que será usado para executar mutations em nosso código.
export const PostInputType = new GraphQLInputObjectType({
    //Nome do nosso input
    name: "PostInput",
    //Campos
    fields: {
        //Todos os nossos campos são do tipo string e não devem ser nulo
        title: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        auhtor: {type: new GraphQLNonNull(GraphQLString)},
    }
})