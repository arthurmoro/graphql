import { GraphQLList, GraphQLString } from 'graphql';
import { Post } from '../types/Post';
import { fakeDatabase } from '../../FakeDatabase';
//Imports


export default {
    //Nome da query que irá aparecer na documentação
    posts: {
        //Tipo da variável. A que ela está referenciada?
        //Ao tipo Post, neste caso
        type: new GraphQLList(Post),
        //Descrição do que a query se trata.
        description: "Get a list of recent posts",
        //Nenhum argumento é necessário pois aqui será retornardo uma lista
        //de todos os posts
        args: {},
        //Resolver da query.
        //A função que a query irá executar para obter os dados necessários.
        //Pode ser a chamada de uma função, de uma API, leitura de um arquivo.
        resolve: () => {
            return fakeDatabase.getBlogPosts()
        }
    }
}