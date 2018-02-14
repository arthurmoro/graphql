import {GraphQLString, GraphQLNonNull} from 'graphql';
import { fakeDatabase } from '../../FakeDatabase';
import { Author } from '../types/Author';
//Imports


export default {
    author: {
        //Tipo da variável. A que ela está referenciada?
        //Ao tipo Author, neste caso.
        type: Author,
        //Descrição do que a query se trata.
        description: "Get a author by id",
        //Argumentos que a query recebe
        args: {
            //A query recebe um "id" do tipo STRING que não deve ser nulo
            id: {type: new GraphQLNonNull(GraphQLString) }
        },
        //Resolver da query.
        //A função que a query irá executar para obter os dados necessários.
        //Pode ser a chamada de uma função, de uma API, leitura de um arquivo.
        resolve: (parent, {id}) => {
            //Retornando os dados buscados.
            return fakeDatabase.getAuthor(id)
        }
    }
}