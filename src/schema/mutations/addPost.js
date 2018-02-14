import {
    GraphQLNonNull,
    GraphQLInt
} from 'graphql';
import {
    Post, PostInputType
} from '../types/Post';
import {
    fakeDatabase
} from '../../FakeDatabase';
//Imports

export default {
    addPost: {
        //Nome da mutation que aparecerá na Documentação
        type: Post,
        //Descrição da Mutation
        description: "Add new blog post",
        args: {
            post: {type: PostInputType}
        },
        //Função que será executada para que a mutation ocorra.
        resolve: (parent, { post }) => fakeDatabase.addPost(post)
    }
}