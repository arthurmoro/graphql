import {
    GraphQLNonNull,
    GraphQLInt
} from 'graphql';
import {
    Post, PostInputType
} from '../types/Post';
import {
    fakeDatabase
} from '../../FakeDatabase';


export default {
    addPost: {
        type: Post,
        description: "Add new blog post",
        args: {
            post: {type: PostInputType}
        },
        resolve: (parent, { post }) => fakeDatabase.addPost(post)
    }
}