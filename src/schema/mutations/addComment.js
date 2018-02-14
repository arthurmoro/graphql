import {
    GraphQLNonNull,
    GraphQLInt
} from 'graphql';
import {
    fakeDatabase
} from '../../FakeDatabase';
import { Comment, CommentInputType } from '../types/Comment';
//Imports

export default {
    //Nome da mutation que aparecerá na Documentação
    addComent: {
        // Tipo que está sendo inserido
        type: Comment,
        //Descrição da Mutation
        description: "Add new post comment",
        //Argumentos que a mutation recebe
        args: {
            //Type é o tipo que a variavel recebe. Neste caso, ela está referenciada no arquivo ../types/Comment
            comment: {type: CommentInputType}
        },
        //Função que será executada para que a mutation ocorra.
        resolve: (parent, { comment }) => fakeDatabase.addNewComment(comment)
    }
}