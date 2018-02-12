import { GraphQLList, GraphQLString } from 'graphql';
import { Post } from '../types/Post';
import { fakeDatabase } from '../../FakeDatabase';


export default {
    posts: {
        type: new GraphQLList(Post),
        description: "Get a list of recent posts",
        args: {},
        resolve: () => {
            return fakeDatabase.getBlogPosts()
        }
    }
}