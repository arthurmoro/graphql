import {GraphQLNonNull, GraphQLInt} from 'graphql';
import { Post } from '../types/Post';
import { fakeDatabase } from '../../FakeDatabase';


export default {
    post: {
        type: Post,
        description: "Get a single post by id",
        args: {
            id: {type: new GraphQLNonNull(GraphQLInt)}
        },
        resolve: (parent, {id}) => {
            return fakeDatabase.getBlogPost(id)
        }
    }
}