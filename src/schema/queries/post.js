import {GraphQLNonNull, GraphQLInt} from 'graphql';
import { Post } from '../types/Post';
import { fakeDatabase } from '../../FakeDatabase';
//Imports


export default {
    //Nome da query (Aparecerá na documentação)
    post: {
        //Tipo da variável. A que ela está referenciada?
        //Ao tipo Post, neste caso
        type: Post,
        //Descrição do que a query se trata.
        description: "Get a single post by id",
        //Argumentos que a query recebe
        args: {
            //A query recebe um "id" do tipo STRING que não deve ser nulo
            id: {type: new GraphQLNonNull(GraphQLInt)}
        },
        //Resolver da query.
        //A função que a query irá executar para obter os dados necessários.
        //Pode ser a chamada de uma função, de uma API, leitura de um arquivo.
        resolve: (parent, {id}) => {
            return fakeDatabase.getBlogPost(id)
        }
    }
}