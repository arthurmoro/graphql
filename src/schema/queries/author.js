import {GraphQLString, GraphQLNonNull} from 'graphql';
import { fakeDatabase } from '../../FakeDatabase';
import { Author } from '../types/Author';


export default {
    posts: {
        type: Author,
        description: "Get a list of posts",
        args: {
            id: {type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (parent, {id}) => {
            return fakeDatabase.getAuthor(id)
        }
    }
}