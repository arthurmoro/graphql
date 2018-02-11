import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import { Post } from "./Post";
import { fakeDatabase } from "../../FakeDatabase";

export const Author = new GraphQLObjectType({
    name: "Author",
    description: "All details of an author on the website",

    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },

        posts: {
            type: new GraphQLList(Post),
            resolve: (source) => {
                return fakeDatabase.getPostsOfAuthor(source.id);
            }
        }
    })
 });