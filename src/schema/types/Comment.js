import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';


export const Comment = new GraphQLObjectType({
    //Nome do tipo que estamos criando
    name: "Comment",
    //Descrição do nosso tipo
    description: "The datails from a post's comments",
    //Campos que o nosso tipo possui
    fields: {
        // Uma variável do tipo inteiro
        id: {type: GraphQLInt},
        // Uma variável do tipo string
        name: {type: GraphQLString},
        // Uma variável do tipo string
        content: {type: GraphQLString}
    }
});

//Objeto do tipo Input que será usado para executar mutations em nosso código.
export const CommentInputType = new GraphQLInputObjectType({
    //Nome do nosso input
    name: "CommentInput",
    //Campos
    fields: {
        //Aqui nenhum campo deve ser nulo e todos são do tipo String.
        name: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        postId: {type: new GraphQLNonNull(GraphQLInt)},
    }
});