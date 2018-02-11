import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';


export const Comment = new GraphQLObjectType({
    name: "Comment",
    description: "The datails from a post's comments",
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        content: {type: GraphQLString}
    }
});


export const CommentInputType = new GraphQLInputObjectType({
    name: "CommentInput",
    fields: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        postId: {type: new GraphQLNonNull(GraphQLInt)},
    }
});