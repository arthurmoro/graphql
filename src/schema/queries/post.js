import {GraphQLNonNull, GraphQLInt} from 'graphql';
import { Post } from '../types/Post';
import { fakeDatabase } from '../../FakeDatabase';


export default {
    posts: {
        type: Post,
        description: "Get a list of posts",
        args: {
            id: {type: new GraphQLNonNull(GraphQLInt)}
        },
        resolve: (parent, {id}) => {
            return fakeDatabase.getBlogPost(id)
        }
    }
}