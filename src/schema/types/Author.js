import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import { Post } from "./Post";
import { fakeDatabase } from "../../FakeDatabase";

export const Author = new GraphQLObjectType({
    //Nome do tipo que estamos criando
    name: "Author",
    //Descrição do nosso tipo
    description: "All details of an author on the website",
    //Campos que o nosso tipo possui
    fields: () => ({
        //id: todo id deve ser não nulo e do tipo String
        id: { type: new GraphQLNonNull(GraphQLString) },
        //name: variável do tipo String
        name: { type: GraphQLString },
        //email: variável do tipo String
        email: { type: GraphQLString },
        //Post variável do tipo Post que retornará uma lista de posts.
        //Posts irá fazer um request no nosso banco de dados procurando posts do id do autor
        //e retornará através do resolver.
        posts: {
            type: new GraphQLList(Post),
            resolve: (source) => {
                return fakeDatabase.getPostsOfAuthor(source.id);
            }
        }
    })
 });