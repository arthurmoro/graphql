import {GraphQLString, GraphQLNonNull} from 'graphql';
import { fakeDatabase } from '../../FakeDatabase';
import { Author } from '../types/Author';


export default {
    author: {
        type: Author,
        description: "Get a author by id",
        args: {
            id: {type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (parent, {id}) => {
            return fakeDatabase.getAuthor(id)
        }
    }
}