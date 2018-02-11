import {
    GraphQLNonNull,
    GraphQLInt
} from 'graphql';
import {
    fakeDatabase
} from '../../FakeDatabase';
import { Comment, CommentInputType } from '../types/Comment';


export default {
    addComent: {
        type: Comment,
        description: "Add new post comment",
        args: {
            comment: {type: CommentInputType}
        },
        resolve: (parent, { comment }) => fakeDatabase.addNewComment(comment)
    }
}